const path = require('path');

module.exports = {
  entry: {
    nm: './client/index.jsx'
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: [
        path.resolve(__dirname, './client'),
      ],
      loader: 'babel-loader',
    }]
  }
};
