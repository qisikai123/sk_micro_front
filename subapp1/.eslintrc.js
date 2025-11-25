module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  // 不在子应用里启用 prettier 插件，避免与本地 prettier 版本不兼容
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
