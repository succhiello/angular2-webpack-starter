const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor',
        main: './src/bootstrap'
    },
    output: {
        path: './dist'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw!url' }
        ]
    },
    resolve: {
        root: './',
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({name: 'commons'}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template/index.html',
            chunksSortMode: 'dependency'
        })
    ]
}