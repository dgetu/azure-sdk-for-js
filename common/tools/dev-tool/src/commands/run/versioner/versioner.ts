// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Project,
  ts,
  Node,
  CommentRange,
  JSDocTag,
  JSDoc,
  SourceFile,
  NewExpression,
  ForEachDescendantTraversalControl,
  VariableStatement,
  WriterFunction,
  Structures,
  Structure,
} from "ts-morph";
import { match, P } from "ts-pattern";
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

const removeNodeHandler = (parent: Node<ts.Node> | undefined, node: Node<ts.Node>) => {
  return match<[ts.SyntaxKind | undefined, ts.SyntaxKind]>([parent?.getKind(), node.getKind()])
    .when(
      () => (node as Node<ts.Node> & { remove: () => void }).remove !== undefined,
      () => {
        (node as Node<ts.Node> & { remove: () => void }).remove();
      }
    )
    .with([ts.SyntaxKind.SourceFile, ts.SyntaxKind.EndOfFileToken], () => {})
    .with([ts.SyntaxKind.NewExpression, ts.SyntaxKind.PropertyAccessExpression], (_) => {
      (parent as NewExpression).removeArgument(node);
    })
    .otherwise(() => {
      throw Error(
        `Unimplemented remove node handler for ${
          parent?.getKindName() ?? undefined
        } and ${node.getKindName()}`
      );
    });
};

const removeDirectiveComment = (node: Node<ts.Node>): Node<ts.Node> => {
  const removeDirectivePattern = /\s*\/\/[^\r\n\S]*@(?:alpha|beta|public)\s*\n+/;
  return match(node)
    .when(
      (
        node
      ): node is typeof node & {
        getStructure(): Structures;
      } =>
        [
          ts.SyntaxKind.ClassDeclaration,
          ts.SyntaxKind.ClassStaticBlockDeclaration,
          ts.SyntaxKind.Constructor,
          ts.SyntaxKind.GetAccessor,
          ts.SyntaxKind.MethodDeclaration,
          ts.SyntaxKind.PropertyDeclaration,
          ts.SyntaxKind.SetAccessor,
          ts.SyntaxKind.Decorator,
          ts.SyntaxKind.JSDoc,
          ts.SyntaxKind.JSDocTag,
          ts.SyntaxKind.EnumDeclaration,
          ts.SyntaxKind.EnumMember,
          ts.SyntaxKind.PropertyAssignment,
          ts.SyntaxKind.ShorthandPropertyAssignment,
          ts.SyntaxKind.SpreadAssignment,
          ts.SyntaxKind.FunctionDeclaration,
          ts.SyntaxKind.Parameter,
          ts.SyntaxKind.CallSignature,
          ts.SyntaxKind.ConstructSignature,
          ts.SyntaxKind.IndexSignature,
          ts.SyntaxKind.InterfaceDeclaration,
          ts.SyntaxKind.MethodSignature,
          ts.SyntaxKind.PropertySignature,
          ts.SyntaxKind.JsxAttribute,
          ts.SyntaxKind.JsxElement,
          ts.SyntaxKind.JsxSelfClosingElement,
          ts.SyntaxKind.JsxSpreadAttribute,
          ts.SyntaxKind.AssertEntry,
          ts.SyntaxKind.ExportAssignment,
          ts.SyntaxKind.ExportDeclaration,
          ts.SyntaxKind.ExportSpecifier,
          ts.SyntaxKind.ImportDeclaration,
          ts.SyntaxKind.ImportSpecifier,
          ts.SyntaxKind.ModuleDeclaration,
          ts.SyntaxKind.SourceFile,
          ts.SyntaxKind.VariableStatement,
          ts.SyntaxKind.TypeAliasDeclaration,
          ts.SyntaxKind.TypeParameter,
          ts.SyntaxKind.VariableDeclaration,
        ].includes(node.getKind()),
      (node) => {
        const structure = { ...node.getStructure() };
        const leadingTrivia = structure.leadingTrivia;
        structure.leadingTrivia = match(leadingTrivia)
          .when(
            (trivia): trivia is undefined | WriterFunction =>
              trivia === undefined || typeof trivia === "function",
            (trivia) => trivia
          )
          .with(P.string, (trivia) => trivia.slice(0, trivia.search(removeDirectivePattern)))
          .with(P.array(P._), (trivia) => {
            const newTrivia = [];
            let skip = false;
            for (const trivium of trivia) {
              let updatedTrivium = trivium;
              if (typeof updatedTrivium === "string") {
                if (skip) {
                  newTrivia.push("");
                  continue;
                }
                const index = updatedTrivium.search(removeDirectivePattern);
                if (index >= 0) {
                  updatedTrivium = updatedTrivium.slice(0, index);
                  skip = true;
                }
              }
              newTrivia.push(updatedTrivium);
            }
            return newTrivia;
          })
          .exhaustive();
        type SetStructure<
          T extends Node & {
            getStructure(): Structures;
          }
        > = T & {
          set: (structures: ReturnType<T["getStructure"]>) => T;
        };
        (node as SetStructure<typeof node>).set(structure);
        return node;
      }
    )
    .when(
      (node): node is VariableStatement => {
        return Node.isVariableStatement(node) && Node.isSourceFile(node.getParent());
      },
      (node) => {
        const statements = (node.getParent() as SourceFile).getStatementsWithComments().reverse();
        const index = statements.indexOf(node);
        const commentStatements = statements.slice(
          index,
          statements.findIndex((n) => !Node.isCommentStatement(n), index)
        );
        commentStatements.forEach((statement) => statement.remove());
        return node;
      }
    )
    .when(
      (node) => node.getKind() === ts.SyntaxKind.EndOfFileToken,
      () => {
        return node;
      }
    )
    .when(
      (node) =>
        [
          ts.SyntaxKind.ExpressionStatement,
          ts.SyntaxKind.IfStatement,
          ts.SyntaxKind.PropertyAccessExpression,
          ts.SyntaxKind.CaseClause,
        ].includes(node.getKind()),
      () => {
        const fullText = node.getFullText();
        const index = fullText.search(removeDirectivePattern);
        if (index >= 0) {
          const newNode = node.replaceWithText(
            fullText.substring(0, index) + fullText.substring(node.getStart() - node.getPos())
          );
          return newNode;
        }
        return node;
      }
    )
    .otherwise((node) => {
      throw Error(
        `Node is not removable: ${node.getKindName()}\n\n${node.getParent()!.getFullText()}`
      );
    });
};

const removeNodes = (sourceFile: SourceFile, channel: Channel, _log: Printer) => {
  type RemoveRange = { pos: number; end: number };
  const removeRanges: RemoveRange[] = [];
  const callback = (node: Node<ts.Node>, traversal: ForEachDescendantTraversalControl): void => {
    const directives = getDirectives(node);
    if (shouldRemoveNode(directives, channel)) {
      try {
        node = removeDirectiveComment(node);
        const parent = node.getParent();
        removeNodeHandler(parent, node);
      } catch (e) {
        if (
          e instanceof Error &&
          e.message.includes(
            "The children of the old and new trees were expected to have the same count"
          )
        ) {
          removeRanges.push({
            pos: node.getPos(),
            end: node.getEnd(),
          });
        } else {
          throw e;
        }
      }
      traversal.skip();
    }
  };
  sourceFile.forEachDescendant(callback);
  const mergeRanges = (ranges: RemoveRange[]) => {
    ranges.sort(({ pos }) => pos);
    const mergedRanges: RemoveRange[] = [];
    for (const range of ranges) {
      if (mergedRanges.length === 0 || mergedRanges[mergedRanges.length - 1].end < range.pos) {
        mergedRanges.push(range);
      } else {
        mergedRanges[mergedRanges.length - 1].end = Math.max(
          mergedRanges[mergedRanges.length - 1].end,
          range.end
        );
      }
    }
    return mergedRanges;
  };
  const removeTextRanges = (text: string, ranges: RemoveRange[]) => {
    let i = 0;
    const substrings = ranges.map((range) => {
      const substring = text.substring(i, range.pos);
      i = range.end;
      return substring;
    });
    substrings.push(text.substring(i));
    return substrings.join("");
  };

  const fullText = sourceFile.getFullText();
  const text = removeTextRanges(fullText, mergeRanges(removeRanges));
  sourceFile.replaceWithText(text);
};

const nonNullify = (sourceFile: SourceFile, channel: Channel, _log: Printer): void => {
  const removeNull = (node: Node<ts.Node>) => {
    if (Node.isTyped(node)) {
      const currentType = node.getTypeNodeOrThrow();
      let newType;
      if (!Node.isUnionTypeNode(currentType)) {
        if (currentType.getType().isNull()) {
          newType = "never";
        } else {
          throw Error("non-null type should have null type");
        }
      } else {
        const newTypes = currentType
          .getTypeNodes()
          .filter((typeNode) => {
            return !typeNode.getType().isNull();
          })
          .map((typeNode) => typeNode.compilerNode);
        const newTypeNode: ts.UnionTypeNode = ts.factory.createUnionTypeNode(newTypes);
        const printer = ts.createPrinter();
        newType = printer.printNode(
          ts.EmitHint.Unspecified,
          newTypeNode,
          node.getSourceFile().compilerNode
        );
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
