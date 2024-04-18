const hbs = require("handlebars");
const path = require("path");
const fs = require("fs-extra");

const compile = async function (templateName, data) {
  const filepath = path.join(process.cwd(), "templates", `${templateName}.hbs`);
  const html = await fs.readFile(filepath, "utf-8");
  return hbs.compile(html)(data);
};

module.exports = compile;
