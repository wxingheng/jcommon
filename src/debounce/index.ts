/*
 * @Author: wuxh
 * @Date: 2021-09-02 21:21:04
 * @LastEditTime: 2021-09-02 21:33:44
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/debounce/index.ts
 */

/**
 * @description: debounce 防抖, 固定时间内持续触发，只执行最后一次
 * @author: wuxh
 * @Date: 2021-09-02 21:30:44
 * @param {*}
 * @return {*}
 * @example: 
 * 
 */
export const debounce = function (
  func: Function,
  wait = 500,
  immediate = false
) {
  let timeout: NodeJS.Timeout | null
  return function () {
    // var context = null
    const args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) func.apply(null, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(null, args)
      }, wait)
    }
  }
}
