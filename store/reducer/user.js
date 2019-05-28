/*
 * @Author: leo 
 * @Date: 2019-05-28 14:55:14 
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 15:12:56
 * user reducer
 */
import { GET_USER_INFO} from '../actions/user.js'

const initialState = {
  userInfo: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      }
    default:
      return state
  }
}