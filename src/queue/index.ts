/*
 * @Author: wuxh
 * @Date: 2021-08-31 23:08:54
 * @LastEditTime: 2021-08-31 23:15:27
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/queue/index.ts
 */

export const Queue = function (items) {
  this.items = items || []
  // 向队列添加元素（一个或多个）
  this.enqueue = function (element) {
    if (element instanceof Array) {
      this.items = this.items.concat(element)
    } else {
      this.items.push(element)
    }
  }

  // 从队列移除元素
  this.dequeue = function () {
    return this.items.shift()
  }

  // 返回队列中的第一个元素
  this.front = function () {
    return this.items[0]
  }

  // 判断队列是否为空
  this.isEmpty = function () {
    return this.items.length === 0
  }

  // 返回队列的长度
  this.size = function () {
    return this.items.length
  }

  // 清空队列
  this.clear = function () {
    this.items = []
  }

  // 打印队列内的所有元素
  this.print = function () {
    console.log(this.items.toString())
  }
}
