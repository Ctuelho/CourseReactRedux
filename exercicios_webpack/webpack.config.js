const webpack = require('webpack')

module.exports = {
    entry: './ex4/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 5555,
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/0',
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}