/*
 * @Author: wuxh
 * @Date: 2021-08-21 22:30:51
 * @LastEditTime: 2022-01-17 23:57:42
 * @LastEditors: wuxh
 * @Description: 血袋相关工具函数
 * @FilePath: /jcommon/src/blood/index.ts
 * @https://github.com/wxingheng/jcommon
 */

import { getV } from '../object/index'

/**
 * @description: 转换Rh血型
 * @author: wuxh
 * @Date: 2021-09-07 13:44:36
 * @param {*}
 * @return {*}
 * @example:  formatRhBloodGroup('**D**') => 阳性
 * formatRhBloodGroup('+') => 阳性
 *
 */
export const formatRhBloodGroup = function (
  input: string, // 输入值(后台返回值)
  optiongs?: {
    format?: [string | number | boolean, string | number | boolean]
    default?: string | number | boolean
    negative?: Array<string>
    positive?: Array<string>
  }
) {
  const defaultOptiongs = {
    format: ['阴性', '阳性'], // 自定义返回格式
    default: '未知', // 默认返回值
    negative: ['阴性', '-'], // 阴性可能性
    positive: ['阳性', '+'] // 阳性可能性
  }
  const { negative, positive, format, default: def } = {
    ...defaultOptiongs,
    ...optiongs
  }
  if (negative.includes(input)) {
    return format[0]
  } else if (positive.includes(input)) {
    return format[1]
  } else {
    if (input.includes('d')) {
      return format[0]
    } else if (input.includes('D')) {
      return format[1]
    } else {
      return def
    }
  }
}

/**
 * @description: 是否阴性
 * @author: wuxh
 * @Date: 2022-01-17 23:57:31
 * @param {string} input
 * @return {*}
 * @example: 
 */
export const isRhNegative = function (input: string) {
  return formatRhBloodGroup(input, {
    format: [true, false]
  })
}


/**
 * @description: 是否阳性
 * @author: wuxh
 * @Date: 2022-01-17 23:57:19
 * @param {string} input
 * @return {*}
 * @example: 
 */
export const isRhPositive = function (input: string) {
  return formatRhBloodGroup(input, {
    format: [false, true]
  })
}


/**
 * @description: sort []
 * @author: wuxh
 * @Date: 2021-09-07 14:12:06
 * @param {string} key
 * @return {*}
 * @example:
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sorterCallBackString('name') => [{name: '333'}, {name: '666'}]
 * arr.sorterCallBackString('name', false) => [{name: '666'}, {name: '333'}]
 */
export const sorterCallBack = function (key: string, isAscend = true) {
  return (a: any, b: any) =>
    a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1
}
