const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve from dist
    },
    compress: true,
    port: 3000,
    hot: true, // Enable Hot Module Replacement
    liveReload: true, // Reload page when files change
    watchFiles: ["src/**/*", "public/**/*"], // Watch these files for changes
    open: true, // Open browser automatically
  },
});
