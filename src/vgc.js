#! /usr/bin/env node
const core = require("./vgcCore");
const VueGenerator = require("./VueGenerator");
const { outputFolder, templateDir, componentName } = core.configOptions;

new VueGenerator({ outputFolder, templateDir }).vueComponents({
  componentName
});
