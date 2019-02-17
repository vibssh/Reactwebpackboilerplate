const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true,
  stats: {
    children: false
  }
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader','sass-loader'],
      }

    ]
  },

  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },

  plugins: [HTMLWebpackPluginConfig],
  mode:'development'
}