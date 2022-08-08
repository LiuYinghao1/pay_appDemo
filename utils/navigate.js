import {
  field,
  pathWhiteList
} from '../config/config'

/**
 * 不需要授權的跳轉
 */
export const navigateTo = (url) => {
  wx.navigateTo({
    url
  })
}

/**
 * 需要登錄之後才可以跳轉
 */

export const navigateAuthTo = (url) => {
  const path = pathWhiteList.includes(url)
  if (path) {
    wx.navigateTo({
      url
    })
    return
  }

  const token = wx.getStorageSync(field.loginCredentials)

if (token) {
  wx.navigateTo({
    url
  })
  return
}

wx.navigateTo({
  url: '/pages/login/login',
})
}

