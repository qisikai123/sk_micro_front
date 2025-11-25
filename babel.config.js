module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset', // 更新为当前 Vue CLI 推荐的 preset
      {
        targets: { ie: '11' }, // 目标浏览器和版本
        useBuiltIns: 'entry', // 自动导入 polyfill
        corejs: 3, // 指定 core-js 版本
      },
    ],
  ],
};
