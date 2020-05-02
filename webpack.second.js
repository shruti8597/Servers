var path = require('path');

var browserConfig = {
  entry: './react2',
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
  mode: 'production',
};

module.exports = browserConfig;
