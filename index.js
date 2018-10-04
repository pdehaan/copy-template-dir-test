const path = require("path");
const {promisify} = require("util");
const copyTemplateDir = require("copy-template-dir");

const params = {
  name: "peter",
  age: "old"
};

main("templates", "dest", params);

async function main(srcDir, destDir, params={}) {
  const src = path.join(__dirname, srcDir);
  const dest = path.join(__dirname, destDir);
  const copy = promisify(copyTemplateDir);

  try {
    const createdFiles = await copy(src, dest, params);
    console.log(createdFiles);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}
