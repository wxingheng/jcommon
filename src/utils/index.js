/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:02:02
 * @LastEditTime: 2020-06-17 16:53:25
 * @LastEditors: wuxh
 * @Description: 通用工具方法
 * @FilePath: /jcommon/src/utils/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 函数防抖<短时间内多次触发同一事件，只执行最后一次>
 * @author: wuxh
 * @Date: 2020-05-06 13:46:28
 * @param 
 * {func<需要防抖的逻辑方法>, wait<等待时间>, immediate<boolean, 是否需要立即执行一次>}
 * @return: String
 * @example: 
  // 比如搜索框input需要做输入搜索防抖处理
  // 使用debounce方法产生一个防抖方法
  const search = debounce((value) => console.log, 1000, false)
  // 在你需要的地方进行绑定产生的search方法
  // 你的逻辑处理func部分将会按照你设置的防抖参数来执行
  onChange = {search}
 */
export const debounce = function (func, wait, immediate) {
  let timer
  return function () {
    let context = this,
      args = arguments
    if (timer) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  }
}

/**
 * @description: 函数节流<指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。>
 * @author: wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {func<需要防抖的逻辑方法>, wait<间隔时间>, type< 1 | 2 >}
 * @return: String
 * @example: 
  // 比如滚动事件需要做节流处理
  // 使用debounce方法产生一个防抖方法
  const scroll = throttle((value) => console.log, 1000, 1)
  // 在你需要的地方进行绑定产生的search方法
  // 你的逻辑处理func部分将会按照你设置的防抖参数来执行
  onScroll = {scroll}
 */
export const throttle = function (func, wait, type) {
  let previous
  if (type === 1) {
    previous = 0
  } else if (type === 2) {
    let timeout
  }
  return function () {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}
