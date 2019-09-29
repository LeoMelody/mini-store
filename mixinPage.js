/*
 * @Author: leo 
 * @Date: 2019-02-12 18:12:53 
 * @Last Modified by: leo
 * @Last Modified time: 2019-09-29 00:05:05
 * page 基础配置
 */
import store from './store/index.js'
import { initStoreData, listenStore, unInstallListener} from './mini-store.js'

export default function SelfPage(option) {
  Page(mixinFn(option))
}

/**
 * 设置固定属性
 */
function baseOptions() {
  const result = {
    /**
    * 初始化数据
    */
    data: {
      isLoad: false,
      options: {}
    },

    /**
     * 页面加载前置处理
     */
    _beforeLoad(initResult, options) {
      this.data.isLoad = true
      this.data.options = options
      listenStore(initResult, this.$store, this)
    },

    /**
     * 页面卸载前置处理
     */
    _beforeUnLoad() {
      unInstallListener(this)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      return {
        path: `/pages/demo1/index/index`
      }
    }
  }

  Object.defineProperty(result, '$store', {
    value: store,
    writable: false,
    configurable: true,
    enumerable: true
  })
  return result
}

/**
 * 混入属性方法， 
 */
const mixinFn = (options) => {
  if (!options || typeof options !== 'object') {
    return baseOptions()
  }
  // 依赖收集
  const initResult = initStoreData(options.storeData, baseOptions().$store)
  const data = {
    ...baseOptions().data,
    ...options.data || {}
  }
  options = {
    ...baseOptions(),
    ...options,
    data
  }

  const onLoad = options.onLoad
  const onUnload = options.onUnload

  options.onLoad = function(options) {
    // 将收集到的依赖传入到
    this._beforeLoad(initResult, options)
    onLoad && onLoad.call(this, options)
  }

  options.onUnload = function() {
    this._beforeUnLoad()
    onUnload && onUnload.call(this)
  }

  return options
}