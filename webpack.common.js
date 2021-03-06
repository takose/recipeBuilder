const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'inline-source-map',
  entry: src + '/index.jsx',
  output: {
    path: dist,
    filename: 'bundle.js',
  },

  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader?modules',
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html',
    }),
  ],
};
