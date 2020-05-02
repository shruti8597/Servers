var path = require('path');

var browserConfig = {
  entry: './react3',
  output: {
    path: path.resolve(__dirname, 'dist3'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
  mode: 'production',
};

module.exports = browserConfig;
