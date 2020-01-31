// this file is run with npm run build
// it uses babel to compile everything in client/src into seachBarBundle.js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'searchBarBundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        loader: 'url-loader',
        test: /\.(png|jpg|gif)$/i,
      },
      {
        loader: 'file-loader',
        test: /\.(png|jpe?g|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
