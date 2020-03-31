const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html'}
);

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    htmlWebpackPlugin
  ]
};
