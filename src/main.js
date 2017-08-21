// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router' // vue-router
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store';

Vue.use(Vuex)
Vue.use(MintUI)

import '@/common/scss/index.scss'

// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/common/img/elephant.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
