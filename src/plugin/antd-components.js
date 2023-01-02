import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'
import {
  Button,
  Layout,
  Menu,
  Icon,
  Avatar,
  Dropdown,
  Card,
  Radio,
  Modal,
  Notification,
  Divider
} from 'ant-design-vue'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(Card)
Vue.use(Radio)
Vue.use(Modal)
Vue.use(Divider)
Vue.prototype.$notification = Notification
