const ejs = require("ejs");
const fse = require("fs-extra");

class TemplateRender {
  constructor(templateDir = `${__dirname}/templates`) {
    this.templateDir = templateDir;
  }
  render(templatePath, outputPath, variables) {
    const templateFullPath = `${this.templateDir}/${templatePath}`;
    const templateString = fse.readFileSync(templateFullPath, {
      encoding: "utf8"
    });
    const result = ejs.render(templateString, variables);
    fse.outputFileSync(outputPath, result);
  }
}

module.exports = TemplateRender;
