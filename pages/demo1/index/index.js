// pages/demo1/index/index.js
import regeneratorRuntime from '../../../libs/runtime.js'
import SelfPage from '../../../mixinPage.js'
import {incrementNumberAction, decrementNumberAction} from '../../../store/actions/number.js'
import {getUserInfoAction} from '../../../store/actions/user.js'

SelfPage({

  /**
   * 页面的初始数据
   */
  data: {

  },

  storeData: {
    number: {
      number: 'number'
    },
    user: {
      userInfo: 'userInfo'
    }
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
      url: '/pages/demo1/user/user',
    })
  }
})