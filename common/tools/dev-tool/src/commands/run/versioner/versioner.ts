// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Project, ts, Node, CommentRange, JSDocTag, JSDoc, SourceFile } from "ts-morph";
import { Printer } from "../../../util/printer";

export type Channel = "public" | "beta" | "alpha";

interface Directive {
  channel: Channel;
  operation: Operation;
}
type Operation = "non-null" | "include" | "include tsdoc";

export function generate(
  project: Project,
  channel: Channel,
  log: Printer
): { relativePath: string; fullText: string }[] {
  const sourceFiles = project.getSourceFiles();
  const projectRoot = project.getDirectoryOrThrow("./");
  return sourceFiles.map((sourceFile) => {
    removeNodes(sourceFile, channel, log);
    nonNullify(sourceFile, channel, log);
    removeJSDocs(sourceFile, channel, log);
    return {
      relativePath: projectRoot.getRelativePathTo(sourceFile),
      fullText: sourceFile.getFullText(),
    };
  });
}

const shouldRemoveNode = (directives: Directive[], channel: Channel): boolean => {
  let hasIncludeTag = false;
  let matchingIncludeTag = false;
  directives.forEach((directive) => {
    if (directive.operation === "include") {
      hasIncludeTag = true;
      if (directive.channel === channel) {
        //todo: early return or refactor
        matchingIncludeTag = true;
      }
    }
  });
  // A node is not to be removed by default, but should be removed if explicitly included by another channel
  return hasIncludeTag && !matchingIncludeTag;
};

const removeNodes = (sourceFile: SourceFile, channel: Channel, _log: Printer) => {
  type RemoveRange = { pos: number; end: number };
  const removeRanges: RemoveRange[] = [];
  const callback = (node: Node<ts.Node>): void => {
    const directives = getDirectives(node);
    if (shouldRemoveNode(directives, channel)) {
      if (!Node.isTextInsertable(sourceFile)) {
        throw Error("Node marked for removal, but is not removable");
      }
      if (Node.isJSDocable(node)) {
        node
          .getJsDocs()
          .forEach((jsDoc) => removeRanges.push({ pos: jsDoc.getPos(), end: jsDoc.getEnd() }));
      }
      const fullText = node.getFullText();
      // The last newline before the directive itself. Avoids removing unrelated comments above the directive
      const directiveIndex = Math.min(
        ...["public", "beta", "alpha"]
          .map((chan) => fullText.indexOf(`@${chan}`))
          .filter((i) => i >= 0)
      );
      const pos = node.getPos() + fullText.lastIndexOf("\n", directiveIndex);
      const end = node.getEnd();
      removeRanges.push({ pos: pos >= 0 ? pos : 0, end });
      return;
    }
    node.forEachChild(callback);
  };
  sourceFile.forEachChild(callback);
  removeRanges.sort(({ pos }) => pos);
  const mergedRanges: RemoveRange[] = [];
  for (const range of removeRanges) {
    if (mergedRanges.length === 0 || mergedRanges[mergedRanges.length - 1].end < range.pos) {
      mergedRanges.push(range);
    } else {
      mergedRanges[mergedRanges.length - 1].end = Math.max(
        mergedRanges[mergedRanges.length - 1].end,
        range.end
      );
    }
  }
  for (const range of mergedRanges.reverse()) {
    sourceFile.removeText(range.pos, range.end);
  }
};

const nonNullify = (sourceFile: SourceFile, channel: Channel, _log: Printer): void => {
  const removeNull = (node: Node<ts.Node>) => {
    if (Node.isVariableDeclaration(node)) {
      const currentType = node.getType();
      let newType;
      if (currentType.isNull()) {
        newType = "never";
      } else {
        newType = currentType.getNonNullableType().getText();
      }
      node.setType(newType);
      return;
    }
    node.forEachChild(removeNull);
  };
  const callback = (node: Node<ts.Node>) => {
    const directives = getDirectives(node);
    if (
      directives.some(
        (directive) => directive.operation === "non-null" && directive.channel === channel
      )
    ) {
      removeNull(node);
    }
  };

  sourceFile.forEachDescendant(callback);
};

const removeJSDocs = (sourceFile: SourceFile, channel: Channel, _log: Printer): void => {
  const modifications: { pos: number; end: number; text: string }[] = [];
  const callback = (node: Node<ts.Node>) => {
    const directives = getDirectives(node);
    for (const _directive of directives.filter(
      (directive) => directive.operation === "include tsdoc"
    )) {
      if (!Node.isJSDocable(node)) {
        throw Error("Node expected to be JSDocable");
      }
      const patterns = ["alpha", "beta", "public"].map((patternChannel) => {
        let pattern = `@${patternChannel} doc.*\\n`;
        if (patternChannel !== channel) {
          pattern += ".*\\n";
        }
        pattern += "[\\s\\*]*";
        return new RegExp(pattern, "g");
      });
      node.getJsDocs().forEach((jsDoc) => {
        const ranges = [
          ...jsDoc
            .getLeadingCommentRanges()
            .flatMap((commentRange) => [commentRange.getPos(), commentRange.getEnd()]),
          ...jsDoc
            .getTrailingCommentRanges()
            .flatMap((commentRange) => [commentRange.getPos(), commentRange.getEnd()]),
          jsDoc.getPos(),
          jsDoc.getEnd(),
        ];
        const pos = Math.min(...ranges);
        const end = Math.max(...ranges);
        let text = jsDoc.getFullText();
        patterns.forEach((pattern) => {
          text = text.replace(pattern, "");
        });
        text = text.replace(/\* \/$/g, "*/");
        modifications.push({ pos, end, text });
      });
    }
  };
  sourceFile.forEachDescendant(callback);
  modifications.sort((modification) => -1 * modification.pos);
  //todo: figure out why the same node is traversed 5 times
  let lastPos = Infinity;
  for (const { pos, end, text } of modifications) {
    if (end > lastPos) {
      continue;
    }
    sourceFile.replaceText([pos, end], text);
    lastPos = pos;
  }
};

function getDirectives(node: Node): Directive[] {
  const jsDocTags = Node.isJSDocable(node)
    ? node.getJsDocs().flatMap((doc: JSDoc) => {
        return doc.getTags().flatMap((tag: JSDocTag<ts.JSDocTag>) => {
          // trims whitespace and asterisks
          const trimmed = tag.getText().replace(/^[\s\*]+|[\s\*]+$/g, "");
          return trimmed;
        });
      })
    : [];
  const comments = node.getLeadingCommentRanges().flatMap((commentRange: CommentRange) => {
    return commentRange
      .getText()
      .split("\n")
      .map((line) => {
        if (line.startsWith("//")) {
          line = line.substring(2);
        }
        line = line.trim();
        if (line.startsWith("@")) {
          return line;
        }
        return undefined;
      })
      .filter((line): line is string => line !== undefined);
  });
  const lines = [...jsDocTags, ...comments];
  const directives = lines
    .map((line): Directive | undefined => {
      const tokens = line.split(" ");
      let channel: Channel;
      let operation: Operation;
      switch (tokens[0]) {
        case "@public":
          channel = "public";
          break;
        case "@beta":
          channel = "beta";
          break;
        case "@alpha":
          channel = "alpha";
          break;
        default:
          return;
      }
      if (1 in tokens) {
        switch (tokens[1].trim()) {
          case "non-null":
            operation = "non-null";
            break;
          case "doc":
            operation = "include tsdoc";
            break;
          default:
            return undefined; //todo: handle unimplemented directive
        }
      } else {
        operation = "include";
      }
      return { channel, operation };
    })
    .filter((directive): directive is Directive => directive !== undefined);
  return directives;
}
