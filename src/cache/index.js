/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:17:39
 * @LastEditTime: 2020-05-08 09:17:00
 * @LastEditors: wuxh
 * @Description: 数据持久化，缓存
 * @FilePath: /jcommon/src/cache/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 删除
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example: 
  removeStorage('test')
  => undefined
 */
export const removeStorage = function (key) {
  window.localStorage.removeItem(key)
}
/**
 * @description: 保存
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @param {value}
 * @param {isJson}
 * @return: undefined
 * @example: 
  saveStorage('test', '001')
  => undefined
 */
export const saveStorage = function (key, value, isJson) {
  try {
    window.localStorage.setItem(key, isJson ? JSON.stringify(value) : value)
  } catch (e) {
    console.error(e)
  }
}
/**
 * @description: 获取
 * @author: wuxh
 * @Date: 2020-05-06 12:00:37
 * @param {key}
 * @return: String
 * @example: 
  getStorage('test')
  => '001'
 */
export const getStorage = function (key) {
  return window.localStorage.getItem(key)
}
/**
 * @description: 是否支持local
 * @author: wuxh
 * @Date: 2020-05-06 12:01:43
 * @param 
 * @return: Boolean
 * @example: 
  isSupportStorage()
  => true
 */
export const isSupportStorage = function () {
  if (!window.localStorage) {
    return false
  }
  try {
    window.localStorage.setItem('JUTILS_STOARGE_TEST', true)
    window.localStorage.removeItem('JUTILS_STOARGE_TEST')
    return true
  } catch (e) {
    return false
  }
}
