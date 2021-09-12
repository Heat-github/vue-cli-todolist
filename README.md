# 笔记

## 1、脚手架文件结构
    ├── node_modules
    ├── public
    │   ├─ favicon.ico：页面标签
    │   └─ index.html： 主页面
    ├── src
    │   ├── assets： 存放静态资源
    │   |   └── logo.png 
    │   ├── components： 存放组件
    │   |   └── xxx.vue
    │   ├── App.vue： 汇总所有组件
    │   ├── main.js： 入口文件
    ├── .gitignore：git 版本管制忽略配置文件
    ├── bable.config.js：babel 配置文件
    ├── package-lock.json：包版本控制文件
    ├── package.json：应用包配置文件
    └── README.md：应用描述文件

## 2、关于不同版本的Vue说明：
- vue.js 与 vue.runtime.xx.js 的区别
  - vue.js 是完整版的Vue，包含核心功能与模板解析器
  - vue.runtime.xx.js 是运行版的 Vue，不包含模板解析器
- 因为 vue.runtime.xx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数指定具体内容

## 3、vue.config.js 配置文件
- 使用 vue inspect 可以查看 vue 脚手架的默认配置
- 使用 vue.config.js 可以对脚手架进行个性化定制，详见 https://cli.vuejs.org/zh/config/ [配置参考]

##