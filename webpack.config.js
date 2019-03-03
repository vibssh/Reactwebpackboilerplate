const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        test: /\.yaml$/,
        use: 'js-yaml-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  output: {
    filename: 'main.js',
    path: __dirname + '/build'
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css'
    })
  ]
};
