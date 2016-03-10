var webpack = require('webpack');

module.exports = {
    entry: {
        javascript: './src/client.js',
        html: './src/public/index.html'
    },
    output: { path: __dirname + '/build', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
