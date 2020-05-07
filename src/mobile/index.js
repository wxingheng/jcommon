/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:52:11
 * @LastEditTime: 2020-05-07 22:29:14
 * @LastEditors: wuxh
 * @Description: 移动端相关
 * @FilePath: /jcommon/src/mobile/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 是否是QQ平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  jMobIsQQ()
  => false
 */
export const jMobIsQQ = function () {
  if (/qq\/([\d\.]+)*/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 是否是微信平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  jMobIsWX()
  => false
 */
export const jMobIsWX = function () {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 获取手机运营商 (开发中)
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return:
 * @example: 
  jMobOperator()
  => 移动
 */
export const jMobOperator = function () {}
