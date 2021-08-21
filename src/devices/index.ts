/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:49:34
 * @LastEditTime: 2021-08-21 20:17:01
 * @LastEditors: wuxh
 * @Description: 用户设备相关（客户端系统）
 * @FilePath: /jcommon/src/devices/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取用户系统平台信息
 * @author: wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
  osInfo()
  => {os: "mac", version: "10.15.3"}
 */
interface osInfoResult {
  os: string | RegExp
  version: string
}
export const osInfo = function (e: string) {
  e = e || navigator.userAgent
  let t: osInfoResult = {
      os: 'other',
      version: ''
    },
    r = [
      ['android', /Android;?[\s\/]+([\d.]+)?/],
      ['android', /jdapp;android;[\d.]+;([\d.]+);/],
      ['android', /[aA]ndroid;/],
      ['ipad', /iPad;.*?OS\s([\d_]+)/],
      ['ipod', /iPod(?:\stouch)?;.*?\sOS\s([\d_]+)?/],
      ['iphone', /CPU\siPhone\s(?:OS\s)?([\d_]+)/],
      ['windows', /Windows NT/],
      ['mac', /Macintosh;.*?Mac OS X\s([\d._]+)/],
      ['windows phone', /Windows Phone\s([\d.]+)?/],
      ['symbianos', /SymbianOS\/([\d.]+)?/],
      ['bb', /BlackBerry|BB10|RIM Tablet OS\s([\d.]+)?/],
      ['linux', /linux/i]
    ],
    o = 0
  for (; o < r.length; o++) {
    const i = r[o],
      a = e.match(i[1])
    if (a) {
      ;(t.os = i[0]), (t.version = (a[1] || '').replace(/_/g, '.'))
      break
    }
  }
  return t
}
