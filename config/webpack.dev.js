const webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    debug: true,
    output: {
        pathinfo: true,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'cheap-module-source-map'
});