/*
 * @Author: leo
 * @Date: 2019-04-26 09:44:03
 * @Last Modified by: leo
 * @Last Modified time: 2019-05-28 11:34:49
 * 小程序Store数据处理中心
 */
/**
 * 获取每个页面storeData,并进行收集存储
 */
export const initStoreData = (function() {
  return function(
    storeData = {},
    $store
  ) {
    const stateCache = new Map()
    const labelCache = new Map()
    if (!$store)
      throw new Error(`can't find any store, please inject store first`)
    // 获取数据仓库初始数据
    const storeState = $store.getState()
    // 获取storeData中定义的本页面需要用的reducer
    const reducerList = Object.keys(storeData)
    // 遍历每一个reducer initData
    for (let reducer of reducerList) {
      const stateReducer = storeState[reducer]
      const dataReducer = storeData[reducer]
      if (stateReducer) {
        Object.keys(dataReducer).map(attr => {
          if (dataReducer[attr]) {
            // 数据收集
            labelCache.set(`${reducer}.${dataReducer[attr]}`, attr)
            stateCache.set(
              `${reducer}.${dataReducer[attr]}`,
              stateReducer[dataReducer[attr]]
            )
          }
        })
      } else {
        throw new Error(
          `can't find ${reducer} reducer, please define reducer before using`
        )
      }
    }
    return {
      labelCache,
      stateCache
    }
  }
})()

/**
 * 监听页面store变化并重新render
 */
export const listenStore = (function() {

  return function(caches, $store, ctx) {
    const labelCache = caches.labelCache
    const stateCache = caches.stateCache
    // init data
    ;(function() {
      const obj = {}
      for(let current of stateCache.keys()) {
        const stateValue = getValue($store.getState(), current)
        if (stateCache.get(current) !== stateValue) {
          stateCache.set(current, stateValue)
        }
        obj[labelCache.get(current)] = stateValue
      }
      ctx.setData(obj)
    })()
    // 注册监听器，state改动触发脏检查方法
    ctx._unsubscribe = $store.subscribe(() => {
      for(let current of stateCache.keys()) {
        const stateValue = getValue($store.getState(), current)
        if (stateCache.get(current) !== stateValue) {
          const obj = {}
          obj[labelCache.get(current)] = stateValue
          stateCache.set(current, stateValue)
          ctx.setData(obj)
        }
      }
    })
  }
})()

/**
 * 监听页面卸载
 */
export const unInstallListener = (function() {
  return function(ctx) {
    ctx._unsubscribe && ctx._unsubscribe()
    ctx._unsubscribe = null
  }
})()

/**
 * 解析链式属性值
 */
function getValue(obj = {}, attrStr) {
  if (!attrStr) throw new Error("please use right attr")
  let attrs = attrStr.split(".")
  for (let attr of attrs) {
    obj = obj[attr]
  }
  return obj
}