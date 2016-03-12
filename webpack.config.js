var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        client: './src/client.js'
    },
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true)
            }
        })
    ]
};
