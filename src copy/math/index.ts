/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:16:25
 * @LastEditTime: 2021-08-21 20:17:27
 * @LastEditors: wuxh
 * @Description: 数处理相
 * @FilePath: /jcommon/src/math/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 范围随机整数
 * @author: wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example: 
  scopeRandom(1, 10)
  => 3
 */
export const scopeRandom = function (str: number, end: number) {
  return Math.floor(Math.random() * (end - str) + str)
}
