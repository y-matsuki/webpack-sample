const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    pageOne: './app/pageOne/index.js',
    pageTwo: './app/pageTwo/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
