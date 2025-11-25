module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // 让 @babel/eslint-parser 不再强制查找 babel.config.js，避免在多项目根目录下报错
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'vue/no-unused-vars': 'off', // 检查vue组件模版中是否有未使用的变量
    'vue/no-unused-components': 'warn', // 检查是否有导入未使用的组件
    'vue/require-name-property': 'warn', // 要求组件声明 name 属性
    'prettier/prettier': 'warn', // 简化为只给出警告，移除重复的配置
    'vue/multi-word-component-names': 'off', // 关闭组件命名规则
    'vue/max-attributes-per-line': [
      // 属性换行规则
      'warn',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 4,
        },
      },
    ],
    'vue/no-useless-v-bind': 'warn', // 禁止无用的 v-bind
    'no-duplicate-imports': 'warn', // 禁止重复模块导入
    'no-unreachable': 'warn', // 禁止出现无法执行的代码
    'no-const-assign': 'warn', // 禁止修改 const 声明的变量
    'no-dupe-args': 'warn', // 函数参数中不允许出现重复的名称
    'no-duplicate-case': 'warn', // switch 语句中不允许出现重复的 case
    'no-else-return': 'warn', // if 语句中 return 之后不允许出现 else
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
