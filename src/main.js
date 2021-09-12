// 整个项目的入口文件

/* 
  引入 VUe，实际引入 node_modules/vue/dist/vue.runtime.esm.js
  （通过 packag.json 的 modules 配置项配置），该版本缺少模板解析器
*/
import Vue from 'vue'
// 引入 App 父组件
import App from './App.vue'

// 关闭 Vue 生产提示
Vue.config.productionTip = false
let a = 0;
new Vue({
  // 模板渲染函数，并挂载到 #app 
  // render(createElement){
  //   return createElement(App);
  // }
  render: h => h(App),
}).$mount('#app')
