/*
 * @Author: wuxh
 * @Date: 2021-08-21 22:30:51
 * @LastEditTime: 2021-09-07 14:15:10
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
 */
export const formatRhBloodGroup = function (
  value: string,
  format = 'Z',
  normal = '未知'
) {
  const def = {
    S: {
      '**d**': '阴性',
      阴性: '阴性',
      '-': '阴性'
    },
    Z: {
      '**D**': '阳性',
      阳性: '阳性',
      '+': '阳性'
    }
  }
  return getV(normal, def, format, value)
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
