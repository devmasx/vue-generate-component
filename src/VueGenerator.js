const TemplateRender = require("../src/TemplateRender");

class VueGenerator {
  constructor() {
    this.templateRender = new TemplateRender();
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
