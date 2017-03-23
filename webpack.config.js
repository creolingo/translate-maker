const webpack = require('webpack');

module.exports = {
  output: {
    library: 'TranslateMaker',
    libraryTarget: 'umd',
  },

  externals: [],

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },

  node: {
    Buffer: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
