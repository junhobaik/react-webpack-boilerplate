const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const outputDirectory = 'dist';

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outputDirectory),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ManifestPlugin({
      fileName: 'manifestWebpack.json',
      basePath: './dist/',
    }),
    new CopyWebpackPlugin([{ from: 'public', to: '' }]),
  ],
};
