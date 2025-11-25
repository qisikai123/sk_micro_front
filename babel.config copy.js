const plugins = ['@vue/babel-plugin-transform-vue-jsx']
// 如果是生产环境，则使用去掉console的插件
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins,
  presets: ['@vue/cli-plugin-babel/preset'],
}
