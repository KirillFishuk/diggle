const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.ts",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js",
      library: pkg.name,
      libraryTarget: "commonjs2"
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    target: 'node',
    externals: [nodeExternals()]
};
