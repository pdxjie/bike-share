import axios from 'axios'
import store from '@/store'
const baseApi = process.env.VUE_APP_BASE_API

const instance = axios.create({
  baseURL: baseApi,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  store.dispatch('system/setloadding', true)
  return config
}, error => {
  return Promise.reject(error.message)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  store.dispatch('system/setloadding', false)
  if (res.status === 200) {
    return res
  }
}, error => {
  return Promise.reject(error.message)
})

export default instance
