/*
 * @Author: leo 
 * @Date: 2019-05-28 14:55:14 
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 15:12:56
 * number reducer
 */
import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER
} from '../actions/number'

const initialState = {
  number: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_NUMBER:
      return {
        ...state,
        number: state.number + action.number
      }
    case DECREMENT_NUMBER:
      return {
        ...state,
        number: state.number - action.number
      }
    default:
      return state
  }
}