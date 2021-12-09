/*
 * @Description: 工程入口
 */
// import './src/utils/request'
import { entryInit } from './src/entry'
App({
  onLaunch() {
    entryInit()

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
  },

  onShow(options) {
    console.log(`场景值options:${JSON.stringify(options)}`);
  },

  globalData: {
    userInfo: null
  }
})