#! /usr/bin/env node
const core = require("./core");
const VueGenerator = require("./VueGenerator");
const { outputFolder, templateDir, componentName } = core.configOptions;

new VueGenerator({ outputFolder, templateDir }).vueComponents({
  componentName
});
