/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:16:25
 * @LastEditTime: 2020-05-07 10:34:57
 * @LastEditors: wuxh
 * @Description: 数字处理相关
 * @FilePath: /jcommon/src/math/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 随机整数
 * @author: wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example: jMathRandom(1, 10)
  => 3
 */
export const jMathRandom = function (str, end) {
  return Math.floor(Math.random() * (end - str) + str)
}
