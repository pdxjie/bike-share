import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Error from '@/views/Error'
import Admin from '@/layout/Admin'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Admin,
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home'),
        meta: { title: '首页', icon: 'home' }
      },
      {
        path: '/ui',
        meta: { title: '组件', icon: 'gold' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/ui/buttons',
            meta: { title: '按钮' },
            component: () => import('@/views/Button')
          },
          {
            path: '/ui/modals',
            meta: { title: '弹框' },
            component: () => import('@/views/Modals')
          },
          {
            path: '/ui/notification',
            meta: { title: '通知提醒' },
            component: () => import('@/views/Notification')
          },
          {
            path: '/ui/messages',
            meta: { title: '全局Message' },
            component: () => import('@/views/Message')
          }
        ]
      },
      {
        path: '/table',
        meta: { title: '表格', icon: 'table' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/table/basic',
            meta: { title: '基础表格' },
            component: () => import('@/views/BasicTable')
          },
          {
            path: '/table/high',
            meta: { title: '高级表格' },
            component: () => import('@/views/HighTable')
          }
        ]
      },
      {
        path: '/form',
        meta: { title: '表单', icon: 'file-text' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/form/login',
            meta: { title: '登录表单' },
            component: () => import('@/views/LoginForm')
          },
          {
            path: '/form/reg',
            meta: { title: '注册表单' },
            component: () => import('@/views/RegisterForm')
          }
        ]
      },
      {
        path: '/charts',
        meta: { title: '图表', icon: 'area-chart' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/charts/bar',
            meta: { title: '柱状图' },
            component: () => import('@/views/ChartsBar')
          },
          {
            path: '/charts/pie',
            meta: { title: '饼状图' },
            component: () => import('@/views/ChartsPie')
          },
          {
            path: '/charts/line',
            meta: { title: '折线图' },
            component: () => import('@/views/ChartsLine')
          }
        ]
      },
      {
        path: '/rich',
        meta: { title: '富文本', icon: 'file-markdown' },
        component: () => import('@/views/Rich')
      },
      {
        path: '/city',
        meta: { title: '城市管理', icon: 'build' },
        component: () => import('@/views/City')
      },
      {
        path: '/order',
        meta: { title: '订单管理', icon: 'block' },
        component: () => import('@/views/Order')
      },
      {
        path: '/user',
        meta: { title: '员工管理', icon: 'team' },
        component: () => import('@/views/User')
      },
      {
        path: '/bikeMap',
        meta: { title: '车辆地图', icon: 'heat-map' },
        component: () => import('@/views/BikeMap')
      },
      {
        path: '/permission',
        meta: { title: '权限管理', icon: 'cluster' },
        component: () => import('@/views/Permission')
      }
    ]
  },
  {
    path: '/login',
    hideInMenu: true,
    component: Login
  },
  {
    path: '*',
    hideInMenu: true,
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
