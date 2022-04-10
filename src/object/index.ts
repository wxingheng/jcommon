/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2022-04-10 22:22:25
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
export const deepClone = function(value: any, stack = new WeakMap()) {
  if (!iSObject(value)) {
    return value
  }

  let result: any = Array.isArray(value) ? [] : {}

  // 函数直接返回
  if (typeof value === 'function') {
    return value
  }

  // 处理引用类型的拷贝
  result = initCloneByTag(value, getTag(value))

  // 处理循环引用
  if (stack.has(value)) {
    return stack.get(value)
  }
  stack.set(value, result)

  // 这里没有处理key是Symbol的情况
  // for in 不会枚举Symbol的key
  // 可以通过Object.getOwnPropertySymbols获取所有Symbol的key
  for (let key in value) {
    result[key] = deepClone(value[key], stack)
  }
  return result
}

function iSObject (value: any) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

function getTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return Object.prototype.toString.call(value)
}

function cloneRegExp(regexp: any) {
  const result = new regexp.constructor(regexp.source, /\w*$/.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

function initCloneByTag(object: any, tag: any) {
  const Ctor = object.constructor
  // 可以在这里处理
  // arrayBuffer, int32array, dataview等情况
  switch (tag) {
    case regexpTag:
      return cloneRegExp(object)

    default:
      return {}
  }
}
