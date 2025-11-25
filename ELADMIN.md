# Project introduction

```
一个基于 Spring Boot 、 Spring Boot Jpa、Redis、Vue的前后端分离的后台管理系统
```
### Project structure

```
common 公共模块，各种工具类，公共配置存在该模块

system 项目入口模块，也是最终需要打包部署的模块

logging 日志模块，其他模块如果需要记录日志需要引入该模块，暂时未用到

tools 第三方工具模块，包含：图床、邮件、云存储、本地存储、支付宝，暂时未用到

generator 代码生成模块，代码生成的模板在 system 模块中，暂时未用到
```
### Detailed structure

```
|——dist                     # npm run build:prod 打包后生成
|——node_modules             # 依赖包
|——public                   # 静态资源
    |——favicon.ico          # favicon 图标 
    |——index.html           # html模板
|——src                      # 源代码
    |——api                      # 所有请求
        |——system                   # 系统设置api
            |——area.js                  # 区域管理接口 未用到
            |——code.js                  # 用户邮箱、密码接口
            |——dept.js                  # 部门管理接口 
            |——dict.js                  # 字典管理接口 
            |——dictDetail.js            # 字典详情管理接口
            |——job.js                   # 岗位管理接口
            |——menu.js                  # 菜单管理接口 
            |——role.js                  # 角色管理接口 
            |——settings.js              # 系统设置接口 
            |——timing.js                # 任务管理接口 未用到
            |——user.js                  # 用户管理接口 
        |——login.js                 # 登录接口api 已使用
        |——LoginApi.js              # 登录接口api 未用到
    |——assets                   # 主题 字体 样式 图片等静态资源
        |——images                   # 全局图片管理
        |——styles                   # 全局样式设置
    |——components               # 全局公共组件
        |——Crud                     # 全局方法（封装）常用
            |——crud.js                  # 全局方法（封装）常用
            |——CRUD.operation           # 页面新增修改删除（封装）
            |——Pagination               # 页面分页（封装）
            |——RR.operation             # 页面搜索重置（封装）
            |——UD.operation             # 页面操作（修改、删除）（封装）
        |——Dict                     # 全局字典管理
        |——Pagination               # 全局分页设置
        |——Permission               # 全局权限控制
        |——SvgIcon                  # 全局icon
    |——const                    # 全局字典 未用到
    |——handler                  # 封装的请求方法 未用到
    |——layout                   # 布局：左侧导航栏 头部侧边栏
    |——mixins                   # 框架crud混合模式
        |——crud.js                 # 框架中mixins主要是用于一个重要的组件–CRUD组件的支持
    |——nginx                    # nginx 部署案例
    |——router                   # 路由
        |——index.js                 # 前置守卫 后置守卫
        |——routers.js               # 路由配置
    |——store                    # 全局 仓库管理
    |——utils                    # 全局公用方法
        |——auth.js                  # 封装获取本地token Ai-Refresh-Token 方法
        |——clipboard.js             # 简单的剪切板
        |——datetime.js              # Date对象补充函数
        |——filter.js                # 封装列表字典回显方法
        |——index.js                 # 很多实用方法
        |——permission.js            # 封装权限方法
        |——request.js               # 封装请求拦截方法 常用
        |——rsaEncrypt.js            # 加密解密
        |——shortcuts.js             # 日期工具补充
        |——upload.js                # 上传函数
        |——validate.js              # 封装校验方法
    |——views                    # 所有页面  常用
        |——components               # 系统公共模块页面
        |——dashboard                # 系统图表展示页面
        |——demo                     # 菜单配置演示页面
        |——features                 # 系统401、404、重定向页面
        |——generator                # 系统代码生成器页面
        |——system                   # 系统管理页面
            |——demo                     # 系统配置演示页面
            |——iframe                   # 系统内嵌子系统页面
            |——setting                  # 系统动态主题颜色、系统名称展示页面
        |——home.vue                 # 系统首页
        |——login.vue                # 系统登陆页面
    |——App.vue                  # 入口文件
    |——main.js                  # 入口文件 加载组件 初始化
    |——settings.js              # 自定义变量
|——.env.development         # 开发环境配置
|——.env.production          # 生产环境配置
|——.eslintrc.js             # eslint 配置
|——babel.config.js          # babel 配置
|——ELADMIN.md               # 项目介绍 
|—— postcss.config.js       # postcss配置
|——README.md                # 项目操作命令
|——vue.config.js            # vue-cli 配置
```
### 提示

```
可参照el-admin项目文档
```
### 某一页面

```
【template】：整个页面的内容写在这个标签下
【app-container】：这个里面包含了所有的主体内容。
【head-container】： 这个div里面建立了input搜索框，日期搜索框，搜索按钮与重置按钮，以及第二排的新增，修改，删除，导出按钮，和右边的三个按钮。
【el-dialog】：当点击添加或编辑按钮的时候会弹出这个对话框，是element的组件。
【el-table】：展示的主题控件，是element的组件
【defaultForm】：里面定义了表单的初始值，以及控件数据源的绑定，也涉及到框架内部对字段的维护，比如点击弹出框的取消按钮，消除所有的内容，就需要把弹出框的变量都写在defaultFrom中。
【export default】：这一块定义了核心的内容
【name】：这个对标的是我们创建菜单的时候，有个组件名称 字段，用于菜单缓存，其实目前没用到的。
【components】：这是我们的页面中所用到的组件，我这里引用了六个组件，前五个是比较常用的，udOperation是表格中最右边的编辑和删除按钮，DateRangePicker是日期搜索框需要用到的，rrOperation是搜索框右边的搜索和重置按钮，pagination是分页组件，crudOperation是搜索框下面的四个按钮，IconSelect是我们需要去选择图标的时候用到的组件。
【cruds】：这个里面定义了一些进入这个页面的时候，对框架进行一些初始化的内容，比如title，中间table所访问的url地址，api的引入地址，或者一些其它的设置等，总之当你进入到这个页面的时候，会有一大堆的东西可以提前设置一下，有些是必须要设置的，有些可以先不设置。 这个crud常常指代的就是el-admin这个框架的运转。
【mixins】：设置混入模式，混入模式的各个模块可以共用属性。
【data】：设置一些变量，以及rules验证
【methods】：关于本页面的js操作就在这里写了。

参考链接：https://blog.csdn.net/qq_29582443/article/details/119939987
```
