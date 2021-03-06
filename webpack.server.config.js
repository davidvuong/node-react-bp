const webpack = require('webpack');
const fs = require('fs');

// Too many problems with bundling `node_modules/`.
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

const babelLoaderSettings = {
  presets: ['es2015', 'react'],
  plugins: ['transform-object-rest-spread']
};

module.exports = {
  entry: {
    server: './src/server.js'
  },
  target: 'node',
  output: { path: `${__dirname}/build`, filename: 'server.js' },
  eslint: {
    configFile: './.eslintrc'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          `babel-loader?${JSON.stringify(babelLoaderSettings)}`, 'eslint-loader'
        ],
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(false)
      }
    })
  ]
};
