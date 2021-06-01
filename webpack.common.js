const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // 3. injects styles into DOM
          'css-loader', // 2. turns css into js
          'sass-loader', // 1. turns sass into css
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      title: 'Wolf Watch',
      meta: {
        charset: { charset: 'utf-8' },
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      favicon: path.resolve(__dirname, 'src', 'img', 'icons', 'favicon.ico'),
      // minify: false
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.resolve(__dirname, 'src', 'partials', 'analytics.html'),
      location: 'body',
      priority: 'high',
      options: {
        ga_property_id: 'G-P37ZRBHH5Q',
      },
    }),
    new Dotenv(),
  ],
};
