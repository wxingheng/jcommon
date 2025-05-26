/*
 * @Author: wuxh
 * @Date: 2021-09-22 23:13:40
 * @LastEditTime: 2025-05-26 16:53:03
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /jcommon/src/decorator/index.ts
 */


/**
 * @description: decoratorNonenumerable  
 * @author: wuxh
 * @Date: 2021-11-10 11:43:45
 * @param {*}
 * @return {*}
 * @example: 
 */
export const decoratorNonenumerable = function (
  _target: any,
  _name: any,
  descriptor: any
) {
  descriptor.enumerable = false
  return descriptor
}
