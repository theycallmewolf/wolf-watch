const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
    ],
  },
};
