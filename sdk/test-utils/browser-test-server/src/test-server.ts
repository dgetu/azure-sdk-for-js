import { createServer } from "http";
import { readFile } from "fs";
import { resolve, extname, normalize as pathNormalize } from "path";

const port = 10987;

export function test_server(root: string, testFiles: string[]) {
  const testFileSet = new Set(testFiles.map(normalize));
  //todo: make sure testFileSet elements are not prefixed with .
  const server = createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(generateTestPage(testFileSet));
    } else if (req.url) {
      let filePath;
      if (testFileSet.has(normalize(req.url))) {
        //todo: make sure `..` does not allow files outside of root to be served
        filePath = resolve(root, normalize(req.url));
      } else if (normalize(req.url) === "index.js") {
        filePath = resolve(root, "../../dist/index.js");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found", "utf-8");
        return;
      }
      const ext = String(extname(filePath)).toLowerCase();
      const mimeMap: { [index: string]: string } = {
        ".html": "text/html",
        ".js": "text/javascript",
      };
      const contentType = mimeMap[ext] ?? "application/octet-stream";

      readFile(filePath, (error, content) => {
        if (error) {
          if (error.code === "ENOENT") {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404 Not Found", "utf-8");
          } else {
            res.writeHead(500);
            res.end(`500:\n${error.code}`, "utf-8");
          }
        } else {
          res.writeHead(200, { "Content-Type": contentType });
          res.end(content, "utf-8");
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found", "utf-8");
    }
  }).listen(port);
  console.log(`Tests running at http://localhost:${port}/`);
  return server;
}

function generateTestPage(files: Set<string>): string {
  const scriptTags = [];
  for (const testFile of files) {
    if (String(extname(testFile)).toLowerCase() !== ".js") {
      throw Error("Must be a .js file");
    }
    scriptTags.push(`<script type="module" src="${testFile}"></script>`);
  }

  const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Mocha Tests</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>

    <script src="https://unpkg.com/chai/chai.js"></script>
    <script src="https://unpkg.com/mocha/mocha.js"></script>

    <script class="mocha-init">
      mocha.setup("bdd");
      mocha.checkLeaks();
    </script>
    ${scriptTags.join("\n")}
    <script type="module" class="mocha-exec">
      mocha.checkLeaks();
      mocha.run();
    </script>
  </body>
</html>
`;
  return page;
}

function normalize(url: string): string {
  if (url[0] === "/") {
    url = url.substring(1);
  }
  return pathNormalize(url);
}
