/*
 * @Author: leo 
 * @Date: 2019-05-28 15:00:28 
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 15:06:15
 * 用户API
 */
import regeneratorRuntime from '../libs/runtime'

/**
 * 获取用户信息接口
 */
export const getUserInfo = async function(params) {
  return new Promise((resolve, reject) => {
    wx.request({
      // url: 'https://easy-mock.com/mock/5cecdda0cc7ed92ea6ead5bd/ministore/getUserInfo',
      url: "http://localhost:7777/getUserInfo",
      data: params,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        resolve(result.data)
      },
      fail: () => {
        reject()
      },
      complete: () => {}
    });
  })
}