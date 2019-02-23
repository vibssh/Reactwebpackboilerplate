const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true,
  stats: {
    children: false
  }
});

module.exports = {
  entry: __dirname + '/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },

  plugins: [HTMLWebpackPluginConfig],
  mode: 'development'
};
