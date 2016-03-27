const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelLoaderSettings = {
  presets: ['es2015', 'react'],
  plugins: ['transform-object-rest-spread']
};

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: { path: `${__dirname}/public`, filename: 'bundle.js' },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [`babel-loader?${JSON.stringify(babelLoaderSettings)}`, 'eslint-loader'],
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!postcss-loader!sass-loader'
        )
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
