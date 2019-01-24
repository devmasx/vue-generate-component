const TemplateRender = require("../src/TemplateRender");

class VueGenerator {
  constructor(templateRender = new TemplateRender()) {
    this.templateRender = templateRender;
  }
  vueComponents({ componentName, ...rest }) {
    this.templateRender.render(
      `components/Component.vue.ejs`,
      `./components/${componentName}/${componentName}.vue`,
      { componentName }
    );

    this.templateRender.render(
      `components/Component.scss.ejs`,
      `./components/${componentName}/${componentName}.scss`,
      { componentName }
    );
  }
}
module.exports = VueGenerator;
