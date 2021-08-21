/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:52:11
 * @LastEditTime: 2021-08-21 20:18:34
 * @LastEditors: wuxh
 * @Description: 移动端相关
 * @FilePath: /jcommon/src/mobile/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 是否是QQ平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  isQQ()
  => false
 */
export const isQQ = function (): boolean {
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
  isWX()
  => false
 */
export const isWX = function (): boolean {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 获取手机运营商
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return: '移动' | '电信' | '联通' | '未知'
 * @example: 
  operattelecom('13419595634') => 移动
 */
export const operattelecom = function (e: string) {
  var i =
      '134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178',
    n = '130,131,132,155,156,185,186,145,176',
    a = '133,153,180,181,189,177,173,170',
    o = e || '',
    r = o.substring(0, 3),
    d = o.substring(0, 4),
    s =
      !!/^1\d{10}$/.test(o) &&
      (n.indexOf(r) >= 0
        ? '联通'
        : a.indexOf(r) >= 0
        ? '电信'
        : '1349' == d
        ? '电信'
        : i.indexOf(r) >= 0
        ? '移动'
        : '未知')
  return s
}

/**
 * @description: 是否是安卓设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:04
 * @param {type} 
 * @return: boolean
 * @example: 
  isAndroidMobileDevice() => false
 */
export const isAndroidMobileDevice = function (): boolean {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

/**
 * @description: 是否是苹果设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:55
 * @param {type} 
 * @return: boolean
 * @example: 
  isAppleMobileDevice() => true
 */
export const isAppleMobileDevice = function (): boolean {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}
