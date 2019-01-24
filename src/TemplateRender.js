const ejs = require("ejs");
const fse = require("fs-extra");

class TemplateRender {
  constructor(templateDir = `${__dirname}/templates`) {
    this.templateDir = templateDir;
  }
  render(templateName, outputPath, variables) {
    const templatePath = `${this.templateDir}/${templateName}`;
    const templateString = fse.readFileSync(templatePath, {
      encoding: "utf8"
    });
    const result = ejs.render(templateString, variables);
    fse.outputFileSync(outputPath, result);
  }
}

module.exports = TemplateRender;