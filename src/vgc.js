#! /usr/bin/env node
const commandLineArgs = require("command-line-args");
const VueGenerator = require("./VueGenerator");

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
    description: "generate Vue js component",
    defaultOption: true
  }
];

const cli = commandLineArgs(optionDefinitions);

const options = cli.parse().options;
if (options.help) {
  console.log(cli.getUsage(cli));
}
// console.log(options);
const componentName = options.create;
new VueGenerator().vueComponents({ componentName });
// const `Component.vue.ejs`,
//   "./components/Button.vue",
//   { componentName: "Button" }
// new TemplateGenerator();
