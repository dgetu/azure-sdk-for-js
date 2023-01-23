import { generate, Channel } from "../../src/commands/run/versioner/versioner";
import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import { createPrinter } from "../../src/util/printer";
import { assert } from "chai";

describe("versioner", () => {
  it("should generate correct output", async () => {
    const log = createPrinter("versioner-test");

    const testDirectory = "test/versioner/test";
    const expectDirectories = (["alpha", "beta", "public"] as Channel[]).map((channel) => {
      return { channel: channel, expectDirectory: path.join("test/versioner/expect", channel) };
    });
    // todo: consider allowing non-flat structures

    const testFiles = await fs.promises.readdir(testDirectory);
    for (const testFile of testFiles) {
      for (const { channel, expectDirectory } of expectDirectories) {
        const expectFile = path.join(expectDirectory, testFile);
        const project = new Project();
        project.addSourceFileAtPath(path.join(testDirectory, testFile));
        const resultFile = generate(project, channel, log)[0].fullText;
        const expectText = await fs.promises.readFile(expectFile, { encoding: "utf8" });
        assert.strictEqual(resultFile, expectText);
      }
    }
  });
});
