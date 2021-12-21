const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "scss-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "bable-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    // TODO: configure workbox-webpack-plugin
  ],
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
};
