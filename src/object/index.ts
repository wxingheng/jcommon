/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2022-04-10 22:43:02
 * @LastEditors: wxingheng
 * @Description: 对象相关（Object处理）
 * @FilePath: /jcommon/src/object/index.ts
 * @https://github.com/wxingheng/jcommon
 */

import { isNull, isObject, isUndefined, isVoid } from '../validate/index'

/**
 * @description: 获取多级数据避免出错（超级好用）
 * @author: wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {defaultResult, ...any} args
 * @return: any
 * @example: 
  getV('', {name: {children: 123}}, 'name', 'children')
  => 123
 */
export const getV = function<T> (defaultResult: T, ...args: any): any {
  return args.length >= 2
    ? args.reduce((a: any, b: any) =>
        a && a.hasOwnProperty(b) ? a[b] : defaultResult
      )
    : defaultResult
}

/**
 * @description: 深拷贝，克隆（只包含可遍历属性<常用>）
 * @author: wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example: 
  clone({name: 123})
  => {name: 123}
 */
export const cloneObj = function (obj: any): any {
  if (isNull(obj) || isUndefined(obj)) {
    return ''
  }
  let str,
    newobj: any = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (JSON) {
    ;(str = JSON.stringify(obj)), (newobj = JSON.parse(str))
  } else {
    for (const i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]
    }
  }
  return newobj
}

/**
 * @description: 简单的深拷贝
 * @author: wuxh
 * @Date: 2021-09-02 22:33:47
 * @param {any} obj
 * @return {any} obj
 * @example: 
 const person={name:'xiaoming',child:{name:'Jack'}}
 cloneJson(person) => {name:'xiaoming',child:{name:'Jack'}}
 */
export const cloneJson = function (obj: any): any {
  if (typeof obj != 'object') {
    return obj
  }
  if (obj == null) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @description: 深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
 * @author: wuxh
 * @Date: 2020-05-06 12:15:30
 * @param {oldObj}
 * @param {newObj}
 * @param {keys} 强制覆盖属性的key组成的数组
 * @return: Object
 * @example:  
  mergeObj({name: 111}, {name:333, value: 222}, []) => {name: 111, value: 222}
  mergeObj({name: 111}, {name:333, value: 222}, ['name']) => {name: 333, value: 222}
 */
export const mergeObj = function (
  oldObj: { [x: string]: any },
  newObj: { [x: string]: any },
  keys: string | string[]
): { [x: string]: any } {
  for (const key in newObj) {
    if (isObject(newObj[key]) && isObject(oldObj[key])) {
      oldObj[key] = mergeObj(oldObj[key], newObj[key], keys)
    } else if (Object.keys(oldObj).includes(key) && !keys.includes(key)) {
    } else {
      oldObj[key] = newObj[key]
    }
  }

  for (const key in oldObj) {
    if (newObj[key] === undefined) {
      delete oldObj[key]
    }
  }

  return oldObj
}

/**
 * @description: 判断对象是否为空
 * @author: wuxh
 * @Date: 2021-08-21 23:08:42
 * @param {string} obj
 * @return {*} boolean
 * @example: isEmptyObject({}) => true
 */
export const isEmptyObject = function (obj: any): boolean {
  if (obj == null) {
    return true
  }
  if (Array.isArray(obj)) {
    return !obj.length
  }
  for (let i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
      return false
    }
  }
  return true
}

/**
 * @description: cleanObject 去除对象中value为空(null,undefined,'')的属性
 * @author: wuxh
 * @Date: 2021-09-02 22:07:34
 * @param {*} { [k: string]: any }
 * @return {*} { [k: string]: any }
 * @example: 
 cleanObject({
  name: '',
  pageSize: 10,
  page: 1
}) => {
  pageSize: 10,
  page: 1
}
 */
export const cleanObject = function (object: {
  [k: string]: any
}): { [k: string]: any } {
  // Object.assign({}, object)
  if (!object) {
    return {}
  }
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isVoid(value)) {
      delete result[key]
    }
  })
  return result
}

const regexpTag = '[object RegExp]'

/**
 * @description: 深克隆 deepClone
 * @author: wxingheng
 * @Date: 2022-04-10 22:19:43
 * @param {any} value
 * @param {*} stack
 * @return {*}
 * @example: deepClone(obj) => new obj
 */
export const deepClone = function (target: any) {
  // 定义一个变量
  let result: any
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = [] // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {}
      for (let i in target) {
        result[i] = deepClone(target[i])
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target
  }
  // 返回最终结果
  return result
}
