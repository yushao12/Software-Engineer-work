// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'fonts'

axios.defaults.baseURL = 'http://192.168.43.198:8443/api'
// axios.defaults.baseURL='http://utf8.api.smschinese.cn/'
//全局注册
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
