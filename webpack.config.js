const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: './client/vendor/index.js',
    nm: './client/nm/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'normalize.css$': path.resolve('./node_modules/normalize.css/normalize.css')
    }
  },
  output: {
    filename: './js/[name].min.js',
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
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.md$/,
      use: ['html-loader', 'markdown-loader']
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/[name].min.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './js/vendor.min.js',
      minChunks: Infinity
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
