/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2020-05-08 09:20:12
 * @LastEditors: wuxh
 * @Description: 对象相关（Object处理）
 * @FilePath: /jcommon/src/object/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取多级数据避免出错（超级好用）
 * @author: wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {...any} args
 * @return: any
 * @example: 
  getV({name: {children: 123}}, 'name', 'children')
  => 123
 */
export const jObjGetV = function (...args) {
  return args.length >= 2
    ? args.reduce((a, b) => (a && a.hasOwnProperty(b) ? a[b] : ''))
    : ''
}

/**
 * @description: 对象克隆（只包含可遍历属性<常用>）
 * @author: wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example: 
  jObjClone({name: 123})
  => {name: 123}
 */
export const jObjClone = function (obj) {
  let str,
    newobj = obj.constructor === Array ? [] : {}
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
export const mergeObj = function (oldObj, newObj, keys) {
  keys = keys || []
  for (const key in newObj) {
    if (jValIsObject(newObj[key]) && jValIsObject(oldObj[key])) {
      oldObj[key] = jObjMerge(oldObj[key], newObj[key], keys)
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
