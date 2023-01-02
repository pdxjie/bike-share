import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/common.css'
import './plugin/antd-components'
import '@/assets/fonts/iconfont.css'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
