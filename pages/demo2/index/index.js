// pages/demo2/index/index.js
import regeneratorRuntime from '../../../libs/runtime.js'
import { incrementNumberAction, decrementNumberAction } from '../../../store/actions/number.js'
import { getUserInfoAction } from '../../../store/actions/user.js'
import { initStoreData, listenStore, unInstallListener } from '../../../mini-store.js'

// 不使用mixinPage
import $store from '../../../store/index.js'
const storeData = {
  number: {
    number: 'number'
  },
  user: {
    userInfo: 'userInfo'
  }
}
const initResult = initStoreData(storeData, $store)

Page({
  $store,

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    listenStore(initResult, this.$store, this)
  },

  onUnload() {
    unInstallListener(this)
  },


  increme() {
    this.$store.dispatch(incrementNumberAction())
  },

  decreme() {
    this.$store.dispatch(decrementNumberAction())
  },

  async getUserInfo() {
    wx.showLoading({
      title: '获取用户信息中...',
    })
    await this.$store.dispatch(getUserInfoAction())
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '获取成功',
      })
    }, 300)
  },

  goNext() {
    wx.navigateTo({
      url: '/pages/demo2/user/user',
    })
  }
})