# 笔记
<div style="position:fixed; bottom:20px; right:20px"> 
  <a href="#top"> TOP </a> 
</div>

<div style="display:flex;" id="top">
  <div style="flex: auto;">
    <a href ="#structure"> -> 脚手架文件结构</a><br/>
    <a href ="#version"> -> 不同版本的Vue</a><br/>
    <a href ="#config"> -> vue.config.js 配置文件</a><br/>
    <a href ="#ref"> -> ref 属性</a><br/>
    <a href ="#props"> -> props 配置</a><br/>
    <a href ="#mixins"> -> mixin 混入</a><br/>
  </div>
  <div  style="flex: auto;">
    <a href ="#plugins"> -> plugins 插件</a><br/>
    <a href ="#storage"> -> webStorage</a><br/>
    <a href ="#customEvent"> -> 自定义事件</a><br/>
    <a href ="#bus"> -> 全局事件总线</a><br/>
    <a href ="#pubsub"> -> 消息订阅与发布</a><br/>
  </div>
</div>

## <span id="structure">脚手架文件结构</span>
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

## <span id="version">关于不同版本的Vue说明：</span>
1. vue.js 与 vue.runtime.xx.js 的区别
    - vue.js 是完整版的Vue，包含核心功能与模板解析器
    - vue.runtime.xx.js 是运行版的 Vue，不包含模板解析器
2. 因为 vue.runtime.xx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数指定具体内容

## <span id="config">vue.config.js 配置文件</span>
1. 使用 vue inspect 可以查看 vue 脚手架的默认配置
2. 使用 vue.config.js 可以对脚手架进行个性化定制，详见[Vue 官方配置参考列表](https://cli.vuejs.org/zh/config/)



## <span id="ref">ref 属性</span>
1. 被用来给元素或子组件注册引用信息（id 替代者）
2. 应用在 html 标签上获取的是真实 DOM，应用在组件标签上获取的时组件实例对象
3. 使用方式：
   - 打标识：`<div ref="ref1">...<div>` 或者 `<component ref="ref1" />`
   - 获取：`this.$ref.ref1`

## <span id="props">props 配置</span>
1. 一种组件间通信的方式，适用于 <span style="color: orange;">父组件 ==> 子组件</span>
2. 传递方法：父组件中使用子组件标签时配置属性名 `<Component propName="data" /> `
3. 接受方法：接收后数据 data 会被子组件做数据代理，可以直接通过 data 或 this.data 访问；使用数组或者对象定义可接受数据的属性名
   - 只接收数据：`props: ["propName"] `
   - 限定类型： `props: {"propName":Number}`
   - 限定类型、限定必要性、指定默认值：
      ```
      props: {
        "propName": {
          type: String | Number | Function | Objectv | et al,
          required: true | false,
          default: default_value
        }
      }
      ```

## <span id="mixins">mixin 混入</span>
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

## <span id="plugins">plugins 插件</span>
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

## <span id="storage">webStorage</span>
1. 存储内容大小一般支持 5M 左右，不同浏览器略有区别
2. 浏览器通过 `window.sessionStorage` 和 `window.localStorage` 属性实现本地存储机制
3. 相关 API：
   - `xxxxStorage.setItem(key , value)` ：将键值添加到存储中，键名存在则更新；
   - `xxxxStorage.getItem(key)` ：根据键名返回存储中对应的值；
   - `xxxxStorage.removeItem(key)` ：根据键名删除存储中对应的键值；
   - `xxxxStorage.clear()` ：清空缓存数据；
4. 两者区别：
   - `sessionStorage` 存储的内容会在浏览器窗口关闭时消失；
   - `localStorage` 存储的内容需要手动清除才会消失（浏览器缓存设置或者 `clear()` 方法）；
5. 备注：`xxxxStorage.setItem(key)` 方法找不到 `key` 时返回 `null`

## <span id="customEvent">自定义事件</span>
1. 一种组件间通信的方式，适用于 <span style="color: orange;">子组件 ==> 父组件</span>
2. 父组件绑定自定义事件：
   - 方式一：在子组件标签名上直接声明 `<Component @customEvent="callBack" />` 或者 `<Component v-on:customEvent="callBack" />`
   - 方式二：在当前组件 `mounted` 钩子中绑定自定义事件，通过 `ref` 属性获取组件
     ```
     <tempolate>
        <Component ref="sub" />
     </tempolate>
     
     <script>
      export default {
          name:"Component",
          //...
          mounted(){
            this.$refs.sub,$on("customEvent", this.callBack);
          }
     </script>
     ``` 
    - 自定义事件也可以添加事件修饰符
    - 通过方法二绑定自定义事件时，回调函数要么配置在 `methods` 中，要么使用 `箭头函数`，否则 `this` 指向子组件；
3. 子组件触发自定义事件，并向父组件发送数据：`this.$emit('customEvent', data)`
4. 父组件在 `beforeDestroy` 声明周期钩子中解绑自定义事件： `this.$off('customEvent')`
5. 组件上也可以绑定原生 DOM 事件，需要使用 native 修饰符；
  

## <span id="bus">全局事件总线</span>
1. 一种组件间通信的方式，适用于 <span style="color: orange;">任意组件之间</span>
2. 安装全局事件总线：
  ```
  new Vue({
    // ...
    beforeCreated(){
      Vue.prototype.$bus = this; // $bus 就是当前的 vm
    },
    // ...
  });
  ```
3. 使用事件总线：
   - 接收数据：接收数据的组件给 `$bus` 绑定自定义事件，事件回调在该组件自身
      ```
      // ...
      methods(){
        getData(data){
          // ...
        }
      },
      // ...
      mounted(){
        this.$bus.$on('customEvent', this.getData) // 绑定事件
      },
      // ...
      beforeDestroy(){
        this.$bus.$off('customEvent') // 解绑事件
      }
      ``` 
   - 提供数据：发送数据的组件给 `$bus` 触发自定义事件 `this.$bus.$emit('customEvent', data)`

## <span id="pubsub">消息订阅与发布</span>
1. 一种组件间通信的方式，适用于 <span style="color: orange;">任意组件之间</span>
2. 使用步骤：
   - 安装模块：可实现当前功能的模块较多，如：pubsub-js（`npm i pubsub-js`）
   - 引入模块：`import pubsub from 'pubsub-js'`
   - 消息订阅：接收数据的组件设置订阅消息
      ```
      methods()){
        subFunc(subName, data){
          // code for data here
        }
      },
      // ...
      mounted()){
        this.pubId = pubsub.subscribe(subName, this.subFunc) // 订阅消息
      },
      // ...
      beforeDestroy(){
        pubsub.unsubscribe(pubId) // 根据订阅的 ID 删除订阅消息
      }
      ```
    - 发布消息：提供数据的组件发布消息 `pubsub.publish(subName, data)`


