var webpack = require('webpack');
var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'output/UniversalDashboard.Markdown');
var SRC_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = (env) => {

  return {
    entry: [APP_DIR + '/index.jsx'],
    output: {
      library: "UDMarkdown",
      libraryTarget: "var",
      path: BUILD_DIR,
      filename: '[name].[hash].bundle.js',
      publicPath: ""
    },
    module : {
      rules : [
        { test: /\.(js|jsx)$/, exclude: [/node_modules/], loader: 'babel-loader'},
      ]
    },
    optimization: {
      nodeEnv: 'production',
    },
    externals: {
      UniversalDashboard: 'UniversalDashboard',
      react: 'react'
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },
    plugins: [],
  };
}


