const webpack = require('webpack')

module.exports = {
    entry: './ex6_loading_css/index.js',
    output: 
    {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: 
    {
        port: 5555,
        contentBase: './public'
    },
    module: 
    {
        rules: 
        [
            {
                test: /.js?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread']
                    } 
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}