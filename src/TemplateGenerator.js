const ejs = require("ejs");
const fse = require("fs-extra");

class TemplateGenerator {
  constructor(templateDir = `${__dirname}/templates`) {
    this.templateDir = templateDir;
  }
  renderTemplate(templateName, outPath) {
    const variables = { componentName: "Button" };
    const templatePath = `${this.templateDir}/${templateName}`;
    const templateString = fse.readFileSync(templatePath, {
      encoding: "utf8"
    });
    const result = ejs.render(templateString, variables);
    fse.outputFileSync(outPath, result);
  }
}

// export default TemplateGenerator;
new TemplateGenerator().renderTemplate(
  `components/Component.vue.ejs`,
  "./components/Button.vue"
);
