// development config
import path from 'path';
import { merge } from 'webpack-merge';
import commonConfig from './common';

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    path.join(__dirname,'../../src','index.tsx'), // the entry point of our app
  ],
  devServer: {
    contentBase: path.join(__dirname,'../../src'),
    // hot: "only", // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    port: 3003,
  },
  devtool: "cheap-module-source-map",
  plugins: [],
  stats: "errors-only",
});
