import { Channel, generate } from "./versioner";
import { leafCommand, makeCommandInfo } from "../../../framework/command";
import fs from "fs";
import path from "path";
import { createPrinter } from "../../../util/printer";
import { Project } from "ts-morph";

const log = createPrinter("versioner");

export const commandInfo = makeCommandInfo(
  "generate",
  "generates the source for a particular release channel",
  {
    input: {
      kind: "string",
      description: "Path to the project's source files",
      shortName: "i",
      allowMultiple: true,
    },
    outputDir: {
      kind: "string",
      description: "Directory for the generated files",
      default: "./generated",
      shortName: "o",
    },
    channel: {
      kind: "string",
      description: 'The release channel, from "public", "alpha", or "beta"',
      default: "public",
      shortName: "c",
    },
  }
);

function parseChannel(channel: string): Channel {
  const normalizedChannel = channel.toLowerCase();
  if (["public", "alpha", "beta"].includes(normalizedChannel)) {
    return normalizedChannel as Channel;
  }
  throw Error(`${channel} is an invalid release channel`);
}

export default leafCommand(commandInfo, async (options) => {
  if (!options.input) {
    log.error(`No input specified.`);
    return false;
  }
  try {
    await fs.promises.mkdir(options.outputDir, { recursive: true });
  } catch {
    log.error(`${options.outputDir} is not a valid writable directory.`);
    return false;
  }

  const outputDir = options.outputDir;
  const input = options.input;
  const channel = parseChannel(options.channel);

  const project = new Project({});
  project.addSourceFilesAtPaths(input);
  const generated = generate(project, channel, log);
  await Promise.all(
    generated.map(async ({ relativePath, fullText }) => {
      const outputPath = path.join(outputDir, relativePath);
      const temp = path.resolve(outputPath, "..");
      await fs.promises.mkdir(temp, { recursive: true });
      const handle = await fs.promises.open(outputPath, "w");
      return handle.writeFile(fullText);
    })
  );

  return true;
});
