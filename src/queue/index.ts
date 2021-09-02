/*
 * @Author: wuxh
 * @Date: 2021-08-31 23:08:54
 * @LastEditTime: 2021-09-02 23:04:22
 * @LastEditors: wuxh
 * @Description: Queue 队列
 * @FilePath: /jcommon/src/queue/index.ts
 */

import { isArray } from '../validate/index'

/**
 * @description: Queue 队列 class
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @example: const queue = new Queue()
 */
export class Queue {
  private items: Array<never> = []
  constructor (items: Array<never>) {
    this.items = items || []
  }
  // 向队列添加元素（一个或多个）
  enqueue (element: never) {
    if (isArray(element)) {
      this.items = this.items.concat(element)
    } else {
      this.items.push(element)
    }
  }

  // 从队列移除元素
  dequeue (): void {
    return this.items.shift()
  }

  // 返回队列中的第一个元素
  front () {
    return this.items[0]
  }

  // 判断队列是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // 返回队列的长度
  size () {
    return this.items.length
  }

  // 清空队列
  clear () {
    this.items = []
  }

  // 打印队列内的所有元素
  print () {
    console.log(this.items.toString())
  }
}
