const webpack = require('webpack'),
      webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    debug: false,
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
});