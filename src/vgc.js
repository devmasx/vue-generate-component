#! /usr/bin/env node
const commandLineArgs = require("command-line-args");
const VueGenerator = require("./VueGenerator");
const TemplateRender = require("./TemplateRender");
const getConfig = require("./config").getConfig;
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
    name: "templates",
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

const configOptions = getConfig(options);

const componentName = options.create;
const templateDir = configOptions.templates;

const templateRender = new TemplateRender(templateDir);
new VueGenerator(templateRender).vueComponents({ componentName });
