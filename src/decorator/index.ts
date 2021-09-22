/*
 * @Author: wuxh
 * @Date: 2021-09-22 23:13:40
 * @LastEditTime: 2021-09-22 23:28:15
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/decorator/index.ts
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
