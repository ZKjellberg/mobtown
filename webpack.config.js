const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    loaders: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}
