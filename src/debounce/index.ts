/*
 * @Author: wuxh
 * @Date: 2021-09-02 21:21:04
 * @LastEditTime: 2023-05-19 23:40:58
 * @LastEditors: wxingheng
 * @Description: 防抖
 * @FilePath: /jcommon/src/debounce/index.ts
 */

/**
 * @description: debounce 防抖, 固定时间内持续触发，只执行最后一次
 * @author: wuxh
 * @Date: 2021-09-02 21:30:44
 * @param {*} Function 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 * @return {*} Function
 * @example: 
 * function onInput() {
                console.log('1111')
            }
            const debounceOnInput = debounce(onInput)
            document
                .getElementById('input')
                .addEventListener('input', debounceOnInput)
 * 
 */
export const debounce = function (
  func: (...rest: any) => void,
  wait = 500,
  immediate = false
) {
  let timeout: any = null;
  return function (...args: any) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func(...args)
    } else {
      timeout = setTimeout(() => {
        func(...args)
      }, wait)
    }
  }
}
