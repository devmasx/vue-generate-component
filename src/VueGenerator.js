const TemplateGenerator = require("../src/TemplateGenerator");

class VueGenerator {
  constructor() {
    this.templateGenerator = new TemplateGenerator();
  }
  vueComponents({ componentName, ...rest }) {
    this.templateGenerator.renderTemplate(
      `components/Component.vue.ejs`,
      `./components/${componentName}/${componentName}.vue`,
      { componentName }
    );

    this.templateGenerator.renderTemplate(
      `components/Component.scss.ejs`,
      `./components/${componentName}/${componentName}.scss`,
      { componentName }
    );
  }
}
module.exports = VueGenerator;
