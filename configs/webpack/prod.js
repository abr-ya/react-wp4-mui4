// production config
import path from 'path';
import { merge } from 'webpack-merge';
import commonConfig from './common';

module.exports = merge(commonConfig, {});
