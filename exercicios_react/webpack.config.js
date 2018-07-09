const webpack = require('webpack')

module.exports = {
    entry: './ex1/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        port: 5555,
        contentBase: './public'
    },
    module: 
    {
        rules: 
        [
            {
                test: /.jsx?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['env', 'react'],
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