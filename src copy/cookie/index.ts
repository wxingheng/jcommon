/*
 * @Author: wuxh
 * @Date: 2020-06-09 09:27:33
 * @LastEditTime: 2021-08-21 20:02:34
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/cookie/index.ts
 */

/**
 * @description: 获取cookie值
 * @author: wuxh
 * @Date: 2020-06-09 09:28:06
 * @param {type} 
 * @return: string
 * @example: 
  getCookie('name') => 123
 */

export const getCookie = function (name: string): string | null {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}
