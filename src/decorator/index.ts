/*
 * @Author: wuxh
 * @Date: 2021-09-22 23:13:40
 * @LastEditTime: 2021-11-10 11:43:50
 * @LastEditors: wuxh
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
  console.log('decoratorNonenumerable', '--')
  descriptor.enumerable = false
  return descriptor
}
