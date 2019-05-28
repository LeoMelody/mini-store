// pages/demo2/user/user.js
// 不使用mixinPage
import { initStoreData, listenStore, unInstallListener } from '../../../mini-store.js'
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    unInstallListener(this)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})