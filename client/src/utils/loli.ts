import axios from 'axios'
import { message } from 'ant-design-vue'
import { baseHost } from '@/config'

const { DEV } = import.meta.env

// axios instance
const loli = axios.create({
  responseType: 'json',
  timeout: 7000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

loli.interceptors.request.use(
  (config): any => {
    const token = window.localStorage.getItem('token')
    if (token) config.headers['Token'] = token
    return config
  },
  error => Promise.reject(error)
)

loli.interceptors.response.use(
  (res): any => {
    switch (res.status) {
      case 200: // 返回正常内容
      case 204: // 没有内容
      case 4001: // 用户名或密码错误
      case 4002: // 用户已停用
      case 5101: // 题库编号已存在
      case 5001: // 题库标签最多写三个
        return Promise.resolve(res)
      case 401: // 没有被授权
      case 403: // 没有权限
        return Promise.resolve(res)
    }
  },
  error => {
    // 获取 error 对象的 config 和 response 属性
    const { config, response } = error

    // 处理错误时的状态码信息
    switch (response.status) {
      case 401: // 没有被授权
        setTimeout(() => {
          message.warning('登入超時請重新登入')
          window.location.replace('/')
        }, 100)
        return Promise.reject(error)

      case 5106:
        message.warning('您沒有訪問權限')
        return Promise.reject(error)
    }

    // 如果 config 不存在，或者 retry 选项没有设置，用reject
    if (!config || !config.retry) return Promise.reject(error)

    // 设置变量来跟踪重试次数
    config.__retryCount = config.__retryCount || 0

    // 检查重试的次数是否超出最大重试次数
    if (config.__retryCount >= config.retry) {
      console.log('請求超時')
      return Promise.reject(error)
    }

    // 计算重试次数
    config.__retryCount += 1

    // 创建一个新的 Promise 来处理 exponential backoff
    let backoff = new Promise(resolve => {
      setTimeout(() => {
        resolve(null)
      }, config.retryDelay || 1)
    })

    // return the promise in which  recalls axios to retry the request
    return backoff.then(_ => {
      return loli(config)
    })
  }
)

// baseURL
loli.defaults.baseURL = DEV ? baseHost.API1.dev_host : baseHost.API1.pro_host

/**
 * @method get
 * @param path  - 請求路徑
 * @param params - 請求參數
 */
export const loliGet = async (path: string, params?: object) => {
  try {
    console.log(`get ${loli.defaults.baseURL}${path}`)
    const response = await loli.get(path, { params })
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * @method post
 * @param path  - 請求路徑
 * @param params - 請求參數
 */
export const loliPost = async (path: string, params?: object) => {
  try {
    console.log(`post ${loli.defaults.baseURL}${path}`)
    const response = await loli.post(path, { params })
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * @method put
 * @param path  - 請求路徑
 * @param params - 請求參數
 */
export const loliPut = async (path: string, params?: object) => {
  try {
    console.log(`put ${loli.defaults.baseURL}${path}`)
    const response = await loli.put(path, { params })
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * @method delete
 * @param path  - 請求路徑
 * @param params - 請求參數
 */
export const loliDelete = async (path: string, params?: object) => {
  try {
    console.log(`delete ${loli.defaults.baseURL}${path}`)
    const response = await loli.delete(path, { data: params })
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
