import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require("mock/HomeMock.js")
require("mock/DetailMock.js")
import toast from "components/common/toast"
import FastClick from "fastclick"

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装 toast 插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
