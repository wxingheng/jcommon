/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2023-05-24 15:36:20
 * @LastEditors: wxingheng
 * @Description: 对象相关（Object处理）
 * @FilePath: /jcommon/src/object/index.ts
 * @https://github.com/wxingheng/jcommon
 */

import { isNull, isObject, isUndefined, isVoid } from '../validate/index'

/**
 * @description: 获取嵌套数据,处理空值异常
 * @author: wuxh
 * @Date: 2020-05-06 12:13:59
 * @param defaultResult 默认值 
 * @param args 属性访问路径
 * @returns 目标值或默认值
 * @example: 
  getV('', {name: {children: 123}}, 'name', 'children')
  => 123
 */
export const getV = function getV<T> (
  defaultResult: T,
  ...args: any[]
): T | any {
  if (!args.length) return defaultResult
  return args.reduce((a, b) => a?.[b] ?? defaultResult)
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
    newObj: any = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (JSON) {
    (str = JSON.stringify(obj)), (newObj = JSON.parse(str))
  } else {
    for (const i in obj) {
      newObj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]
    }
  }
  return newObj
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
      continue
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
  for (const i in obj) {
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
export const cleanObject = function (object: { [k: string]: any }): {
  [k: string]: any
} {
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
      for (const i in target) {
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
      for (const i in target) {
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

/**
 * @description: 判断两个对象是否相等
 * @author: wxingheng
 * @Date: 2022-05-13 16:35:33
 * @param {any} a
 * @param {any} b
 * @return {*}
 * @example: isEqual({a: 1}, {a: 1}) => true; isEqual({a: 1}, {a: 2}) => false; isEqual({a: 1}, {b: 1}) => false
 */

export const isEqual = function (a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

/**
 * @description: 将list转换为树结构
 * @author: wxingheng
 * @Date: 2022-09-30 11:37:32
 * @return {*}
 * @example: convertDataToTree(data) => treeData
 */
export const convertDataToTree = (
  data: any[],
  id = 'id',
  pid = 'pid',
  children = 'children'
): any[] => {
  const result: any[] = []
  if (!Array.isArray(data)) {
    return result
  }
  const map: any = {}
  data.forEach(item => {
    map[item[id]] = item
  })
  data.forEach(item => {
    const parent = map[item[pid]]
    if (parent) {
      (parent[children] || (parent[children] = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

/**
 * @description: 将树结构转换为list
 * @author: wxingheng
 * @Date: 2022-09-30 11:40:43
 * @param {any} tree 树结构
 * @param {string} children 子节点字段
 * @return {*}
 * @example: convertTreeToList (treeData) => listData
 */
export const convertTreeToList = (
  tree: any[],
  children = 'children'
): any[] => {
  const list: any[] = []
  let index = 1
  function loop (tree: any[]) {
    tree.forEach(item => {
      list.push({ ...item, [children]: undefined, index })
      index++
      if (item[children]) {
        loop(item[children])
      }
    })
  }
  loop(tree)
  return list
}

/**
 * @description:  数组的分类，根据某个字段分类，返回一个对象，key为字段值，value为数组
 * @author: wxingheng
 * @Date: 2022-09-30 11:53:38
 * @param {any} arr
 * @param {string} key
 * @return {*}
 * @example:
 * const arr = [
 * {type: 1, name: 'a'},
 * {type: 2, name: 'b'},
 * {type: 1, name: 'c'},
 * {type: 2, name: 'd'},
 * {type: 1, name: 'e'},
 * {type: 2, name: 'f'},
 * ]
 * groupBy(arr, 'type') => {1: [{type: 1, name: 'a'}, {type: 1, name: 'c'}, {type: 1, name: 'e'}], 2: [{type: 2, name: 'b'}, {type: 2, name: 'd'}, {type: 2, name: 'f'}]}
 */
export const groupBy = (arr: any[], key: string): any => {
  return arr.reduce((prev, cur) => {
    (prev[cur[key]] = prev[cur[key]] || []).push(cur)
    return prev
  }, {})
}
