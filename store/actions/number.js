/*
 * @Author: leo 
 * @Date: 2019-05-28 10:35:54 
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 15:12:46
 * number action
 */
export const INCREMENT_NUMBER = 'INCREMENT_NUMBER' // 增加数字
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER' // 减少数字

/**
 * 增加数字action
 */
export function incrementNumberAction(i = 1) {
  return {
    type: INCREMENT_NUMBER,
    number: i
  }
}

/**
 * 减少数字action
 */
export function decrementNumberAction(i = 1) {
  return {
    type: DECREMENT_NUMBER,
    number: i
  }
}
