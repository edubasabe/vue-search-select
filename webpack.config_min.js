var webpack = require('webpack');

module.exports = require('./webpack.config.js');

module.exports.output.filename = "[name].min.js";

module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  }
}));
