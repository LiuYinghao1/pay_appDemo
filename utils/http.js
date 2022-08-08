import {
  APIconfig
} from '../config/config'
import wxToPromise from './wx'
import exceptionMessage from "../config/exceptionMessage"
class Http {
  static async request({
    url,
    method = 'GET',
    data = {},
    name = 'api1'
  }, options) {
    const response = await wxToPromise('request', {
      url: APIconfig[name].baseURL + url,
      method,
      data,
      ...options
    })

    if (response.statusCode < 400) {
      return response.data
    }

    if (response.statusCode == 401) {
      // token过期,登录超时
      return
    }

    Http._showError(response.data.code, response.data.msg)
    return response
  }

  static _showError(code, msg) {
    let title = ""
    title = exceptionMessage[code] || msg || '发生未知错误'
    wx.showToast({
      title,
      icon: 'none',
      duration: 3000
    })
  }
}

export default Http