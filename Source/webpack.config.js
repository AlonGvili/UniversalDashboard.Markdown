var webpack = require('webpack');
var path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'output/UniversalDashboard.Markdown');
var SRC_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = (env) => {
  const isDev = env == 'development' || env == 'isolated';

  return {
    entry: [APP_DIR + '/index.jsx'],
    output: {
      library: "UDMarkdown",
      libraryTarget: "var",
      path: BUILD_DIR,
      filename: isDev ? 'UniversalDashboard.Markdown.bundle.js' : 'UniversalDashboard.Markdown.[hash].bundle.js',
      publicPath: ""
    },
    module : {
      rules : [
        { test: /\.(js|jsx)$/, exclude: [/node_modules/], loader: 'babel-loader'}
      ]
    },
    externals: {
      UniversalDashboard: 'UniversalDashboard',
      react: 'react'
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },
    plugins: [],
   devtool: 'source-map',
  };
}


