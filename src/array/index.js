/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2020-06-22 18:31:38
 * @LastEditors: wuxh
 * @Description: 数组方法 Array
 * @FilePath: /jcommon/src/array/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
 * @author: wuxh 
 * @Date: 2020-05-06 11:37:17
 * @param {arr} 需要处理的数组
 * @param {options} 额外参数
 * @return: {Array} [排序后的数组]
 * @example: 
   doubleRanking(
      [
        {education: '本科', age: 26},
        {education: '小学', age: 25},
        {education: '本科', age: 24},
        {education: '小学', age: 23}
      ],
      {
        filterRuleKey: 'education',
        rule: ['小学', '本科'],
        sortKey: 'age',
        sortOrder: 1
      }
    )
    => [
        {education: '小学', age: 24},
        {education: '小学', age: 26}
        {education: '本科', age: 23},
        {education: '本科', age: 25},
      ]
*/
export const doubleRanking = function (arr, options) {
  const defOptions = {
    filterRuleKey: '', // 一级过滤和排序的key,
    rule: [], // 一级排序规则,
    sortKey: '', // 二级正常排序的key
    sortOrder: 1 // 二级排序规则
  }
  const { sortKey, filterRuleKey, rule, sortOrder } = {
    ...defOptions,
    ...options
  }

  arr = arr.filter(d => !rule || rule.indexOf(d[filterRuleKey]) !== -1)
  const temp = {}
  for (let i = 0; i < arr.length; i++) {
    if (temp.hasOwnProperty(arr[i][filterRuleKey])) {
      temp[arr[i][filterRuleKey]].push(arr[i])
    } else {
      temp[arr[i][filterRuleKey]] = [arr[i]]
    }
  }
  for (const k in temp) {
    temp[k] = temp[k].sort((a, b) =>
      a[sortKey] > b[sortKey] ? 1 * sortOrder : -1 * sortOrder
    )
  }
  let result = []
  for (let i = 0; i < rule.length; i++) {
    if (temp.hasOwnProperty(rule[i])) {
      result = result.concat(temp[rule[i]])
    }
  }
  return result
}

/**
 * @description: 产生随机数据
 * @author: wuxh
 * @Date: 2020-05-06 11:41:08
 * @param {num} 数量
 * @param {arr} 每个元素对象的keys
 * @return: {Array} 
 * @example: 
  randomData(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
 */
export const randomData = function (num, arr) {
  const result = []
  for (let i = 0; i < num; i++) {
    const obj = {}
    for (let j = 0; j < arr.length; j++) {
      obj[arr[j]] = arr[j] + String(Math.random()).substr(15)
    }
    result.push(obj)
  }
  return result
}

/**
 * @description: 数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
 * @author: wuxh
 * @Date: 2020-05-06 11:51:49
 * @param {arr} 需要转换的数组
 * @param {key} 需要作为转换后对象的key
 * @param {v} 对象的value取值，默认是数组的每一个元素作为值
 * @return: Object
 * @example: 
  const arr = arr = [{name: 111, value: 222},{name: 333, value:444}]
  arrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  arrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
 */
export const arrByObj = function (arr, key, v = '') {
  const obj = {}
  arr.forEach(function (d) {
    obj[d[key]] = v ? d[v] : d
  })
  return obj
}

/**
 * @description: 一维数组转多维树结构数据
 * @author: wuxh
 * @Date: 2020-06-22 17:54:54
 * @param {arr} 一维数组
 * @param {id} 根节点id
 * @return: Array
 * @example:
  const arr = [{id: 1, parentId: 2, name: 111}, {id: 3, parentId: 1, name: 222}]
  arrayToTreeData(arr, 2) => [{id: 1, parentId: 2, name: 111, children: [{id: 3, parentId: 1, name: 222}]}]
 */
export const arrayToTreeData = function (arr, id) {
  if (!arr.length) return []
  const result = clone(arr)
  let obj = {}
  result.map((v, i) => {
    if (obj[v.parentId]) {
      if (obj[v.parentId].children) {
        obj[v.parentId].children.push(v)
      } else {
        obj[v.parentId].children = [v]
      }
    } else {
      obj[v.parentId] = {
        children: [v]
      }
    }
    obj[v.id] = v
  })
  return obj[id]['children']
}
