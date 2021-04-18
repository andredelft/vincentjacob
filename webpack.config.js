const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: '[name].[contenthash][ext]'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|xml|webmanifest)$/i,
          type: 'asset/resource',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main.css'
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/images/*", to: "[name].[contenthash][ext]" },
          { from: "src/favicon/*", to: "[name][ext]" },
        ],
      }),
    ]
  }
};
