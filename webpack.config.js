const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'




module.exports = {
  entry: {
    app:'./frontend/app.js',
    app1:'./frontend/app1.js',
    app2:'./frontend/app2.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/ [name] .js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index_.html',
      chunks: []
    }),
    new HtmlWebpackPlugin({
      filename: 'index3.html',
      template: './frontend/index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'index1.html',
      template: './frontend/index1.html',
      chunks: ['app1']
    }),new HtmlWebpackPlugin({
      filename: 'index2.html',
      template: './frontend/index2.html',
      chunks: ['app2']
    }),
    new MiniCssExtractPlugin({
    filename: "css/bundle.css"
  })
  ],

  devtool: 'source-map'
};
/*
module.exports = {
  entry: './frontend/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index_.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};*/
