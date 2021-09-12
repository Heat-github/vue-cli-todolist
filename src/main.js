// 整个项目的入口文件

/* 
  引入 VUe，实际引入 node_modules/vue/dist/vue.runtime.esm.js
  （通过 packag.json 的 modules 配置项配置），该版本缺少模板解析器
*/
import Vue from 'vue'
import App from './App.vue'     // 引入 App 父组件
// import { sorts } from './mixins' // 引入混合
// Vue.mixin(sorts) // 全局配置混合
import { plg1 } from './plugins' // 引入插件
Vue.use(plg1)

// 关闭 Vue 生产提示
Vue.config.productionTip = false

new Vue({
  name:"vm",
  // 模板渲染函数，并挂载到 #app 
  // render(createElement){
  //   return createElement(App);
  // }
  render: h => h(App),
}).$mount('#app')
