const TemplateRender = require("../src/TemplateRender");

class VueGenerator {
  constructor({ outputFolder = "./src/components", templateDir }) {
    this.outputFolder = outputFolder;
    this.templateRender = new TemplateRender(templateDir);
  }
  vueComponents({ componentName, ...rest }) {
    this.templateRender.render(
      `components/Component.vue.ejs`,
      `${this.outputFolder}/${componentName}/${componentName}.vue`,
      { componentName }
    );

    this.templateRender.render(
      `components/Component.scss.ejs`,
      `${this.outputFolder}/${componentName}/${componentName}.scss`,
      { componentName }
    );
  }
}
module.exports = VueGenerator;
