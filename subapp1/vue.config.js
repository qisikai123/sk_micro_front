const { name } = require('./package.json');
const path = require('path');

module.exports = {
  publicPath: '//localhost:7101/',
  devServer: {
    port: 7101,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 让子应用可以直接 import 主应用 src 下的文件
        '@master': path.resolve(__dirname, '../src')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
};

