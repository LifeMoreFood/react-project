const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  fixBabelImports,
} = require("customize-cra");

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  fixBabelImports("import", {
    libraryName: "@material-ui/core",
    libraryDirectory: "components",
    camel2DashComponentName: false,
  })
);
