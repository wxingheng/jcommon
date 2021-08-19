/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2021-08-19 22:43:23
 * @LastEditors: wuxh
 * @Description: 数组方法 Array
 * @FilePath: /jcommon/src/index.ts
 * @https://github.com/wxingheng/jcommon
 */

export const isEmail = function (str: string): boolean {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
}
