#! /usr/bin/env node
const commandLineArgs = require("command-line-args");
const VueGenerator = require("./VueGenerator");
const TemplateRender = require("./TemplateRender");

const optionDefinitions = [
  {
    name: "help",
    type: Boolean,
    group: "options",
    description: "help"
  },
  {
    name: "create",
    alias: "c",
    type: String,
    group: "options",
    description: "generate Vuejs component",
    defaultOption: true
  },
  {
    name: "template",
    type: String,
    group: "options",
    description: "Template directory"
  }
];

const cli = commandLineArgs(optionDefinitions);

const options = cli.parse().options;
if (options.help) {
  console.log(cli.getUsage(cli));
}
// console.log(options);
const componentName = options.create;
const templateDir = options.template;
const templateRender = new TemplateRender(templateDir);
new VueGenerator(templateRender).vueComponents({ componentName });
// const `Component.vue.ejs`,
//   "./components/Button.vue",
//   { componentName: "Button" }
// new TemplateGenerator();
