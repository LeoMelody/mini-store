/*
 * @Author: leo 
 * @Date: 2019-05-28 14:59:39 
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 15:10:22
 * user Action
 */
import regeneratorRuntime from '../../libs/runtime'
import {getUserInfo} from '../../apis/user.api'

export const GET_USER_INFO = 'GET_USER_INFO' // 获取用户信息

/**
 * 获取用户信息action
 */
export function getUserInfoAction() {
  return async function(dispatch, getState) {
    const res = await getUserInfo()
    dispatch({
      type: GET_USER_INFO,
      payload: {
        userInfo: res.data
      }
    })
  }
}