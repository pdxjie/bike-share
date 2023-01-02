import axios from 'axios'

const baseApi = process.env.VUE_APP_BASE_API

const instance = axios.create({
  baseURL: baseApi,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error.message)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return res
  }
}, error => {
  return Promise.reject(error.message)
})

export default instance
