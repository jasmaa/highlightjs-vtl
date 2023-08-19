const fs = require("fs");
const path = require("path");
const hljs = require("highlight.js");
const hljsVtl = require("../src/vtl.js");

const filePaths = ["basic/hello-world.vm"];

describe("VTL syntax highlighting", () => {
  beforeAll(() => {
    hljs.registerLanguage("vtl", hljsVtl);
  });

  test.each(filePaths)("highlights syntax for %s", (filePath) => {
    const code = fs.readFileSync(path.join(__dirname, filePath), "utf8");
    const result = hljs.highlight(code, {
      language: "vtl",
    });
    expect(result.value).toMatchSnapshot();
  });
});
