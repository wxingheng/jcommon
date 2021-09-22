/*
 * @Author: wuxh
 * @Date: 2021-09-01 22:49:28
 * @LastEditTime: 2021-09-22 23:17:05
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/eventBus/index.ts
 */

import { decoratorNonenumerable } from '../decorator/index'


/**
 * @description: EventBus  class
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @example: const eventBus = new EventBus()
 */
 export class EventBus {
  private listeners: { [x: string]: any }
  private maxListener: number

  constructor () {
    this.listeners = {}
    this.maxListener = 5
  }

  // 添加监听函数
  addListener (event: string, cb: Function) {
    const listeners = this.listeners
    if (listeners[event] && listeners[event].length >= this.maxListener) {
      throw console.error('监听器的最大数量是%d,您已超出限制', this.maxListener)
    }
    if (listeners[event] instanceof Array) {
      if (listeners[event].indexOf(cb) === -1) {
        listeners[event].push(cb)
      }
    } else {
      listeners[event] = [cb]
    }
  }

  // 触发监听函数
  @decoratorNonenumerable
  emit (event: string) {
    const args = Array.prototype.slice.call(arguments)
    args.shift()
    this.listeners[event].forEach((cb: Function) => {
      cb.apply(null, args)
    })
  }

  //  获取监听列表
  getListeners (event: string) {
    return this.listeners[event]
  }

  //  设置最大监听方法数量
  setMaxListeners (maxListener: number) {
    this.maxListener = maxListener
  }

  //   删除一个事件的一个方法
  removeListener (event: string, listener: Function) {
    const listeners = this.listeners
    const arr = listeners[event] || []
    const i = arr.indexOf(listener)
    if (i >= 0) {
      listeners[event].splice(i, 1)
    }
  }

  //  删除一个事件的所有方法
  removeAllListener (event: string) {
    this.listeners[event] = []
  }

  //  只出发一次的方法
  once (event: string, cb: Function) {
    const self = this
    function fn () {
      const args = Array.prototype.slice.call(arguments)
      cb.apply(null, args)
      self.removeListener(event, fn)
    }
    this.addListener(event, fn)
  }
}

// console.log('EventBus', new EventBus().emit)

