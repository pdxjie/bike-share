import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/common.css'
import './plugin/antd-components'
import '@/assets/fonts/iconfont.css'
import * as echarts from 'echarts' // 引入echarts
import BaiduMap from 'vue-baidu-map'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak: 'wI3keyqxOmeysZBcskEKnq8BLmWGlgfF'
  ak: 'WfpIyGsncXdS451EWpFOuvk6kAqTvXBg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
