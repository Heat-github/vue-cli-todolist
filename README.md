# 笔记
<div style="display:flex;">
  <div>
    <a href ="#C1"> 1. 脚手架文件结构</a><br/>
    <a href ="#C2"> 2. 不同版本的Vue</a><br/>
    <a href ="#C3"> 3. vue.config.js 配置文件</a><br/>
    <a href ="#C4"> 4. ref 属性</a><br/>
    <a href ="#C5"> 5. props 配置</a><br/>
    <a href ="#C4"> 6. mixin 混入</a><br/>
    <a href ="#C7"> 7. plugins 插件</a><br/>
  </div>
</div>

## <h2 id="C1">脚手架文件结构</h2>
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

## <h2 id="C2">关于不同版本的Vue说明：</h2>
1. vue.js 与 vue.runtime.xx.js 的区别
    - vue.js 是完整版的Vue，包含核心功能与模板解析器
    - vue.runtime.xx.js 是运行版的 Vue，不包含模板解析器
2. 因为 vue.runtime.xx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数指定具体内容

## <h2 id="C3">vue.config.js 配置文件</h2>
1. 使用 vue inspect 可以查看 vue 脚手架的默认配置
2. 使用 vue.config.js 可以对脚手架进行个性化定制，详见[Vue 官方配置参考列表](https://cli.vuejs.org/zh/config/)



## <h2 id="C4">ref 属性</h2>
1. 被用来给元素或子组件注册引用信息（id 替代者）
2. 应用在 html 标签上获取的是真实 DOM，应用在组件标签上获取的时组件实例对象
3. 使用方式：
   - 打标识：&lt;div ref="xxx"&gt;...&lt;div&gt; 或者 &lt;component ref="xxx" /&gt;
   - 获取：this.$ref.xxx

## <h2 id="C5">props 配置</h2>
1. 功能：让组件接受外部传过来的数据
2. 传递方法（父组件给子组件传）：&lt;component prop-name="data" /&gt; 
3. 接受方法：接收后数据 data 会被子组件做数据代理，可以直接通过 data 或 this.data 访问；使用数组或者对象定义可接受数据的属性名
   - 只接收数据：props: ["prop-name"] 
   - 限定类型： props: {"prop-name":Number}
   - 限定类型、限定必要性、指定默认值：
    ```
    props: {
      "prop-name": {
        type: String | Number | Function | Objectv | et al,
        required: true | false,
        default: default_value
      }
    }
    ```

## <h2 id="C6">mixin 混入</h2>
1. 功能：可以把多个组件共用的配置提取成一个混入对象，提高复用；
2. 定义混合：外部 js 文件定义混合，混合与组件内容、格式一致，通过 `export` 暴露；当混合中定义的数据与组件中数据冲突时，保留组件中的数据；当混合中定义的生命周期钩子函数与组件生命周期钩子重复时，混合生命周期钩子中的程序先执行，组件生命周期钩子中的程序后执行。
    ```
    {
      data(){// ...},
      methods:{// ...}
      // ...
    }
    ```
3. 引入混合：通过 `import` 引入混合到组件中，再通过 `mixin` 配置混合
    - 局部混合：仅在特定的组件中引入
    ```
    // 引入混合
    import mixin1 from './mixin/mixin1.js'
    import mixin2 from './mixin/mixin2.js'

    default export {
      data(){},
      // 配置混合
      mixin: [mixin1, mixin2]
    }
    ```
    - 全局混合：在 `main.js` 或任意组件中引入 vue 以及混合，vm 和所有组件都将引入混合
    ```
    // 引入混合
    import Vue from 'vue'
    import mixin1 from './mixin/mixin1.js'
    import mixin2 from './mixin/mixin2.js'

    // 全局配置混合
    Vue.mixin(mixin1)
    Vue.mixin(mixin2)
    ```

## <h2 id="C7">plugins 插件</h2>
1. 功能：用于增强 vue，在插件中定义各种增强的方法可以直接全局
2. 本质：一个包含 install(安装) 方法的对象，vue 会自动执行 install 方法；install 方法第一个参数时 Vue，第二个参数之后是插件使用者传递的参数。
3. 定义插件：
    ```
    const plugin_name = {
      install(Vue, ...params){
        // 为 Vue 添加方法
        // 添加指令
        // 定义混合
        // 添加实例方法
        // 等等等等......
      }
    }
    ```
4. 插件的使用：`Vue.use(plugin_name)`，如果插件为外部文件需要先通过 import 引入 



