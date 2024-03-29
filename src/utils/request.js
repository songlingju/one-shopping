import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 自定义配置
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 开启loading  禁止背景点击
  Toast.loading({
    message: '加载中... ',
    forbidClick: true, // 禁止背景点击
    loadingType: 'spinner', // loading 图标
    duration: 0 // 不会自动消失， 需要手动关闭

  })
  // 只要有token   在请求时携带，便于授权
  const token = store.getters.token
  if (token) {
    config.headers['access-Token'] = token
    config.headers.platform = 'H5'
  }

  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const res = response.data
  if (res.status !== 200) {
    //  提示
    Toast(res.message)
    // promise
    return Promise.reject(res.message)
  } else {
    // 清除 loading的动画  照应   duration: 0
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 导出
export default instance
