var path = require('path');

var browserConfig = {
  entry: './react',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
  mode: 'production',
};

module.exports = browserConfig;
