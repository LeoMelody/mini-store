# mini-store
miniprogram&amp;redux

## mini-store & mixinPage  
使用mini-store & mixinPage 构建状态管理模式

### 为什么要用状态管理？

不论是开发小程序，H5，后台管理等等Web应用，总会存在多个 页面/组件 共用一些数据（状态）的情况。举一个常见的例子，在更新完用户信息后，在其他依赖用户信息的 页面/组件 也需要做到相应的数据更新，类似的一处修改。多处更新的场景比比皆是，这时候如果有一个数据中心管理器帮助我们做这些事情，就会很大程度提升开发效率和代码的可读性。