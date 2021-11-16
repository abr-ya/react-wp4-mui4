import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = {
  entry: path.join(__dirname,'../../src','index.tsx'),
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, '../../src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'../../src','index.html')
    }),
    new CopyPlugin({
      patterns: [{ from: './public/', to: './' }],
    }),
  ]
};
