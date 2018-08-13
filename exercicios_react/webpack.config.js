const webpack = require('webpack')

module.exports = {
    entry: './ex8-class-based-component/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        port: 5555,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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