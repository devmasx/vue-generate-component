const fse = require("fs-extra");

const getConfig = cliOptions => {
  let fileOptions = {};
  if (fse.existsSync("./vgc.json")) {
    fileOptions = fse.readJsonSync("./vgc.json");
  }
  return { ...fileOptions, ...cliOptions };
};
module.exports.getConfig = getConfig;
