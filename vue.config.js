const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        // 主应用在模块联邦中的名称
        name: 'main_app',
        // 对外暴露的入口文件
        filename: 'remoteEntry.js',
        // 暴露给其他应用使用的模块
        exposes: {
          './GlobalButton': './src/shared/components/GlobalButton.vue',
          './sharedUtils': './src/shared/utils/index.js',
        },
        // 共享依赖，避免重复打包 Vue 等
        shared: {
          vue: { singleton: true, eager: true, requiredVersion: '^2.7.10' },
          'vue-router': { singleton: true, eager: true, requiredVersion: '^3.5.1' },
        },
      }),
    ],
  },
};
