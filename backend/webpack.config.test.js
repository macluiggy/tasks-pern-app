const path = require("path");

module.exports = {
  entry: "./src/test/index.test.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /test\.js$/,
        use: "mocha-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
