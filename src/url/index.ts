/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:02:02
 * @LastEditTime: 2021-08-21 22:27:55
 * @LastEditors: wuxh
 * @Description: url处理相关
 * @FilePath: /jcommon/src/url/index.ts
 * @https://github.com/wxingheng/jcommon
 */


/**
 * @description: 获取浏览器url中的一个参数
 * @author: wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example: 
  getUrlQuery(age)
  => 25
 */
export const getUrlQuery = function (name: string): string {
  const u = arguments[1] || window.location.search,
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
  return r != null ? r[2] : ''
}

/**
 * @description: 去除值类型为string的前后空格
 * @author: wuxh
 * @Date: 2021-08-21 22:11:23
 * @param {Array} data
 * @return {*}
 * @example: everyTrim({name: '  123  ', arr: [' 33 ']}) => {name: '123': arr: ['33']}
 */
export const everyTrim = function (data: Array<any> | Object) {
  const temp = cloneObj(data)
  for (const key in temp) {
    if (typeof temp[key] === 'object') {
      temp[key] = everyTrim(temp[key])
    } else {
      if (typeof temp[key] === 'string') {
        temp[key] = trim(temp[key])
      }
    }
  }
  return temp
}

/**
 * @description: 格式化GET请求的请求头
 * @author: wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example: 
  formatQueryParam({name: 1, value: 123})
  =>  "name=1&value=123"
 */
export const formatQueryParam = function (obj: {[key: string]: any}) {
  obj = everyTrim(obj)
  let temp = ''
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((elem: any) => {
          temp += `${key}=${elem}&`
        })
      } else {
        if (obj[key] !== null) {
          temp += `${key}=${obj[key]}&`
        }
      }
    }
  }
  if (temp.length > 0) {
    temp = `?${temp}`
    return temp.substring(0, temp.length - 1)
  } else {
    return ''
  }
}

/**
 * @description: 处理url参数(window.location.search)转换为 {key: value}
 * @author: wuxh
 * @Date: 2020-05-06 13:48:36
 * @param {params}
 * @return: Object
 * @example: 
  urlByObj(?ie=UTF-8&wd=asd)
  => {ie: UTF-8, wd: asd}
 */
export const urlByObj = function (params: string) {
  const obj: { [key: string]: string } = {}
  const reg = /[?&][^?&]+=[^?&]+/g // 正则匹配 ?&开始 =拼接  非?&结束  的参数
  const arr = params.match(reg) // match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
  // arr数组形式 ['?id=12345','&a=b']
  if (arr) {
    arr.forEach(item => {
      /**
       * tempArr数组    ['id','12345']和['a','b']
       * 第一个是key，第二个是value
       * */
      const tempArr = item.substring(1).split('=')
      const key = decodeURIComponent(tempArr[0])
      const val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }
  return obj
}
