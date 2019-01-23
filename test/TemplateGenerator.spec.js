const TemplateGenerator = require("../src/TemplateGenerator");

// new TemplateGenerator().renderTemplate(
//   `components/Component.vue.ejs`,
//   "./components/Button.vue",
//   { componentName: "Button" }
// );

new TemplateGenerator(`./test/templates_mock`).renderTemplate(
  `Component.vue.ejs`,
  "./components/Button.vue",
  { componentName: "Button" }
);
