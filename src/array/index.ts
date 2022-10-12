/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2022-10-12 11:26:10
 * @LastEditors: wxingheng
 * @Description: 数组方法 Array
 * @FilePath: /jcommon/src/array/index.ts
 * @https://github.com/wxingheng/jcommon
 */

import { convertDateToStandard } from '../index'

/**
 * @category Array
 */
export type DoubleRankingOption = {
  /**
   * 一级过滤和排序的key
   */
  filterRuleKey: string 
  /**
   * 一级排序规则
   */
  rule: string[]
  /**
   * 二级正常排序的key
   */
  sortKey: string
  sortOrder: number
}
/**
 * @category Array
 * @description: 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
 * @author: wuxh
 * @Date: 2020-05-06 11:37:17
 * @param {arr} 需要处理的数组
 * @param {options} 额外参数
 * @return: {Array} 排序后的数组
 * ```
 * doubleRanking(
 *   [
 *     {education: '本科', age: 26},
 *     {education: '小学', age: 25},
 *     {education: '本科', age: 24},
 *     {education: '小学', age: 23}
 *   ],
 *   {
 *     filterRuleKey: 'education',
 *     rule: ['小学', '本科'],
 *     sortKey: 'age',
 *     sortOrder: 1
 *   }
 * )
 * => [
 *     {education: '小学', age: 24},
 *     {education: '小学', age: 26}
 *     {education: '本科', age: 23},
 *     {education: '本科', age: 25},
 *   ]
 * ```
 */
export const doubleRanking = function (
  arr: { [key: string]: any }[],
  options: DoubleRankingOption
) {
  const defOptions: DoubleRankingOption = {
    filterRuleKey: '', // 一级过滤和排序的key,
    rule: [], // 一级排序规则,
    sortKey: '', // 二级正常排序的key
    sortOrder: 1 // 二级排序规则
  }
  const { sortKey, filterRuleKey, rule, sortOrder } = {
    ...defOptions,
    ...options
  }

  arr = arr.filter((d: any) => !rule || rule.indexOf(d[filterRuleKey]) !== -1)
  const temp: {
    [key: string]: any
  } = {}
  for (let i = 0; i < arr.length; i++) {
    if (temp.hasOwnProperty(arr[i][filterRuleKey])) {
      temp[arr[i][filterRuleKey]].push(arr[i])
    } else {
      temp[arr[i][filterRuleKey]] = [arr[i]]
    }
  }
  for (const k in temp) {
    temp[k] = temp[k].sort(
      (a: { [x: string]: number }, b: { [x: string]: number }) =>
        a[sortKey] > b[sortKey] ? 1 * sortOrder : -1 * sortOrder
    )
  }
  let result: any[] = []
  for (let i = 0; i < rule.length; i++) {
    if (temp.hasOwnProperty(rule[i])) {
      result = result.concat(temp[rule[i]])
    }
  }
  return result
}

/**
 * @category Array 
 * @description: 产生随机数据
 * @author: wxingheng
 * @Date: 2022-10-12 11:08:50
 * @param {number} num 数量
 * @param {Array} arr 每个元素对象的keys
 * @return {*}
  ```
  randomData(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
  ```
 */
export const randomData = function (num: number, arr: Array<string>) {
  const result = []
  for (let i = 0; i < num; i++) {
    const obj: { [key: string]: any } = {}
    for (let j = 0; j < arr.length; j++) {
      obj[arr[j]] = arr[j] + String(Math.random()).substr(15)
    }
    result.push(obj)
  }
  return result
}

/**
 * @category Array
 * @description: 数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
 * @author: wuxh
 * @Date: 2020-05-06 11:51:49
 * @param {object} arr 需要作为转换后对象的key需要转换的数组
 * @param {string} key 需要作为转换后对象的key
 * @param {*} v 对象的value取值，默认是数组的每一个元素作为值
 * @return: Object
 ```
  const arr = arr = [{name: 111, value: 222},{name: 333, value:444}]
  arrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  arrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
 ```
 */
export const arrByObj = function (
  arr: { [key: string]: any }[],
  key: string,
  v = ''
): { [key: string]: any } {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.error('arrByObj 参数错误，请检查：', arr)
    return {}
  }
  const obj: { [key: string]: any } = {}
  arr.forEach(function (d) {
    obj[d[key]] = v ? d[v] : d
  })
  return obj
}

/**
 * @category Array
 * @description: 简单数组去重，Set 处理
 * @author: wxingheng
 * @Date: 2022-10-12 11:16:32
 * @param {string} arr
 * @return {*}
  ```
  uniqueArray([1,1,1,1,1]) => [1]; uniqueArray([1,2,3,4,5]) => [1,2,3,4,5]; 
  ```
 */
export const uniqueArray = function uniqueArray (
  arr: string | Iterable<any> | null | undefined
) {
  if (!Array.isArray(arr)) {
    throw new Error('The first parameter must be an array')
  }
  if (arr.length == 1) {
    return arr
  }
  return [...new Set(arr)]
}

/**
 * @category Array
 * @description: 数组交集
 * @author: wxingheng
 * @Date: 2022-05-18 10:56:47
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {*} Array
 * ```
 * difference([2,3,4,5], [1,2,3,4]) => [5, 1] ;
 * difference([1,2,3,4], [2,3,4,5]) => [1, 5];
 * difference([1,2,3,4], [1,2,3,4]) => [];
 * difference([1,2,3,4], []) => [1, 2, 3, 4]
 * ```
 */

export const difference = function (
  a: Iterable<unknown> | null | undefined,
  b: Iterable<unknown> | null | undefined
): Array<any> {
  const set1 = new Set(a),
    set2 = new Set(b)
  return [
    ...new Set([...set1].filter(x => !set2.has(x))),
    ...new Set([...set2].filter(x => !set1.has(x)))
  ]
}

/**
 * @category Array
 * @description: 数组元素是否相同
 * @author: wxingheng
 * @Date: 2022-05-18 10:56:04
 * @param {any} arr1
 * @param {any} arr2
 * @return {*}
```
 arrayCompare([2,3,4,5], [5,4,3,2]) => true ; 
 arrayCompare([2,3,4,5], [5,4,3,2,1]) => false;
 arrayCompare([2,3,4,5], []) => true;
 arrayCompare([], [1,2,3,4]) => false;
 arrayCompare([1,2,3,4], []) => true;
```
 */

export const arrayCompare = function (arr1: any[], arr2: any[]): boolean {
  return (
    arr1.length === arr2.length &&
    arr1.every((a: any) => arr2.some((b: any) => a === b)) &&
    arr2.every((_b: any) => arr1.some((_a: any) => _a === _b))
  )
}

/**
 * @category Array
 * @description:  数组排序的回调函数，用于sort方法，按照对象的某个属性进行中文排序
 * @author: wxingheng
 * @Date: 2022-09-30 11:43:11
 * @param {string} key 排序的属性
 * @return {*}
 * ```
 *  arr.sort(sortCallBackChinese('name')) => [{name: '张三'}, {name: '李四'}]
 * ```
 */
export const sortCallBackChinese = (key: string): Function => (
  a: { [x: string]: string },
  b: { [x: string]: any }
) => {
  return a[key].localeCompare(b[key], 'zh')
}

/**
 * @category Array
 * @description:
 * @author: wxingheng
 * @Date: 2022-09-30 11:45:04
 * @param {string} key  对象的key
 * @param {boolean} desc 是否倒序, 默认是正序
 * @return {*}
 * ```
 * arr.sort(sortCallBackNumber('age')) => [{age: 18}, {age: 20}]
 * arr.sort(sortCallBackNumber('age', true)) => [{age: 20}, {age: 18}]
 * ```
 */
export const sortCallBackTime = (
  key: string,
  desc: boolean = false
): Function => (
  a: { [x: string]: string | number | Date },
  b: { [x: string]: string | number | Date }
) => {
  const ratio = desc ? 1 : -1
  return new Date(convertDateToStandard(b[key])).getTime() -
    new Date(convertDateToStandard(a[key])).getTime() >
    0
    ? 1 * ratio
    : -1 * ratio
}

/**
 * @category Array
 * @description:  reduce方法，用于数组对象的求和
 * @author: wxingheng
 * @Date: 2022-09-30 11:51:39
 * @param {string} key
 * @return {*}
 * ```
 * arr.reduce(reduceSum('num'), 0) => 10
 * ```
 */
export const reduceCallBackNumber = (key: string): Function => (
  acc: any,
  cur: { [x: string]: number }
) => {
  let value = cur[key] || 0
  if (typeof value === 'string') {
    value = isNaN(Number(value)) ? 0 : Number(value)
  }
  return acc + value
}
