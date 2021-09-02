/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:16:25
 * @LastEditTime: 2021-09-02 22:57:22
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

/**
 * @description: 保留到小数点以后n位
 * @author: wuxh
 * @Date: 2021-09-02 22:54:36
 * @param {number} number
 * @param {*} no
 * @return {*} Number
 * @example: 
 cutNumber('3123.22312') => 3123.22
 */
export const cutNumber = function (number: number, no = 2): Number {
  if (typeof number != 'number') {
    number = Number(number)
  }
  return Number(number.toFixed(no))
}
