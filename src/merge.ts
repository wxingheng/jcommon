/**
 * @description:
 * @author: wxingheng
 * @Date: 2023-06-13 16:08:46
 * @param {*} private
 * @param {*} private
 * @return {*}
 * @example:
 */

export class Typewriter {
  private queue: string[] = []
  private consuming = false
  private timer: any
  private strTemp = ''
  constructor (
    private onConsume: (str: string) => void,
    private onDone: (str: string) => void
  ) {}
  dynamicSpeed () {
    const speed = 2000 / this.queue.length
    if (speed > 200) {
      return 200
    } else {
      return speed
    }
  }
  add (str: string) {
    if (!str) return
    this.queue.push(...str.split(''))
  }
  consume () {
    if (this.queue.length > 0) {
      const str = this.queue.shift()
      if (str) {
        this.strTemp += str
        this.onConsume(this.strTemp)
      }
    }
  }
  next () {
    this.consume()
    this.timer = setTimeout(() => {
      this.consume()
      if (this.consuming) {
        this.next()
      }
    }, this.dynamicSpeed())
  }
  start () {
    this.consuming = true
    this.next()
  }
  done () {
    this.consuming = false
    clearTimeout(this.timer)
    this.strTemp += this.queue.join('')
    this.onConsume(this.strTemp)
    this.onDone(this.strTemp)
    this.queue = []
  }
}




/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2023-05-24 15:50:11
 * @LastEditors: wxingheng
 * @Description: 数组方法 Array
 * @FilePath: /jcommon/src/array/index.ts
 * @https://github.com/wxingheng/jcommon
 */



/**
 * @category Array
 */
export type DoubleRankingOption = {
  /**
   * 一级过滤和排序的key
   */
  filterRuleKey?: string
  /**
   * 一级排序规则
   */
  rule?: string[]
  /**
   * 二级正常排序的key
   */
  sortKey?: string
  sortOrder?: number
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
  const {
    sortKey = '',
    filterRuleKey = '',
    rule = [],
    sortOrder = 1
  } = {
    ...defOptions,
    ...options
  }

  if (rule.length === 0) {
    return arr
  }

  arr = arr.filter((d: any) => !rule || rule.indexOf(d[filterRuleKey]) !== -1)
  const temp: {
    [key: string]: any
  } = {}
  for (const element of arr) {
    if (Object.prototype.hasOwnProperty.call(temp, element[filterRuleKey])) {
      temp[element[filterRuleKey]].push(element)
    } else {
      temp[element[filterRuleKey]] = [element]
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
    if (Object.prototype.hasOwnProperty.call(temp, rule[i])) {
      result = result.concat(temp[rule[i]])
    }
  }
  return result;
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
export const randomData =  (num: number, arr: Array<string>): Array<any> => {
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
export const sortCallBackChinese =
  (key: string): ((a: any, b: any) => void) =>
  (a: any, b: any) => {
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
export const sortCallBackTime =
  (key: string, desc = false): (a: any, b: any) => void =>
  (
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
export const reduceCallBackNumber =
  (key: string): (acc: any, cur: any) => void =>
  (acc: any, cur: { [x: string]: number }) => {
    let value = cur[key] || 0
    if (typeof value === 'string') {
      value = isNaN(Number(value)) ? 0 : Number(value)
    }
    return acc + value
  }




/*
 * @Author: wuxh
 * @Date: 2021-08-21 22:30:51
 * @LastEditTime: 2022-01-17 23:57:42
 * @LastEditors: wuxh
 * @Description: 血袋相关工具函数
 * @FilePath: /jcommon/src/blood/index.ts
 * @https://github.com/wxingheng/jcommon
 */



/**
 * @description: 转换Rh血型
 * @author: wuxh
 * @Date: 2021-09-07 13:44:36
 * @param {*}
 * @return {*}
 * @example:  formatRhBloodGroup('**D**') => 阳性
 * formatRhBloodGroup('+') => 阳性
 *
 */
export const formatRhBloodGroup = function (
  input: string, // 输入值(后台返回值)
  optiongs?: {
    format?: [string | number | boolean, string | number | boolean]
    default?: string | number | boolean
    negative?: Array<string>
    positive?: Array<string>
  }
) {
  const defaultOptiongs = {
    format: ['阴性', '阳性'], // 自定义返回格式
    default: '未知', // 默认返回值
    negative: ['阴性', '-'], // 阴性可能性
    positive: ['阳性', '+'] // 阳性可能性
  }
  const { negative, positive, format, default: def } = {
    ...defaultOptiongs,
    ...optiongs
  }
  if (negative.includes(input)) {
    return format[0]
  } else if (positive.includes(input)) {
    return format[1]
  } else {
    if (input.includes('d')) {
      return format[0]
    } else if (input.includes('D')) {
      return format[1]
    } else {
      return def
    }
  }
}

/**
 * @description: 是否阴性
 * @author: wuxh
 * @Date: 2022-01-17 23:57:31
 * @param {string} input
 * @return {*}
 * @example: 
 */
export const isRhNegative = function (input: string) {
  return formatRhBloodGroup(input, {
    format: [true, false]
  })
}


/**
 * @description: 是否阳性
 * @author: wuxh
 * @Date: 2022-01-17 23:57:19
 * @param {string} input
 * @return {*}
 * @example: 
 */
export const isRhPositive = function (input: string) {
  return formatRhBloodGroup(input, {
    format: [false, true]
  })
}


/**
 * @description: sort []
 * @author: wuxh
 * @Date: 2021-09-07 14:12:06
 * @param {string} key
 * @return {*}
 * @example:
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sorterCallBackString('name') => [{name: '333'}, {name: '666'}]
 * arr.sorterCallBackString('name', false) => [{name: '666'}, {name: '333'}]
 */
export const sorterCallBack = function (key: string, isAscend = true) {
  return (a: any, b: any) =>
    a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:14:00
 * @LastEditTime: 2023-05-19 23:25:47
 * @LastEditors: wxingheng
 * @Description: 浏览器相关
 * @FilePath: /jcommon/src/browser/index.ts
 * @https://github.com/wxingheng/jcommon
 */

export type getBrowserInfoResult = {
  name: string | RegExp
  version: string
}
/**
 * @description: 获取浏览器相关信息
 * @author: wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
```
  getBrowserInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
```
 */
export const getBrowserInfo = function (): getBrowserInfoResult {
  let e, t, r
  const o: getBrowserInfoResult = {
      name: 'other',
      version: '0'
    },
    i = navigator.userAgent.toLowerCase()
  for (
    t = [
      ['WeiXin', /micromessenger\/([^\s]+)/],
      ['QQ', /qq\/([^\s]+)/],
      ['QQBrowser', /(?:qqbrowser|qqlivebrowser)\/([^\s]+)/],
      ['JDAPP', /jdapp;/],
      ['QIHU', /qihu|360se/],
      ['LieBao', /(?:lbbrowser|liebaofast)\/?([\d\.]+)?/],
      ['Sogou', /(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/],
      ['Opera', /(?:opera|opr|oupeng)\/([\d\.]+)/],
      ['BaiduBrowser', /(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/],
      ['BaiduBox', /baiduboxapp|baiduboxpad/],
      ['UC', /(?:ucweb|ucbrowser)\/?([\d\.]+)/],
      ['Maxthon', /maxthon\/([\d\.]+)/],
      ['Samsung', /samsungbrowser\/([\d\.]+)/],
      ['Dolphin', /aphone|apad/],
      ['2345', /2345/],
      ['Miui', /miuibrowser\/([\d\.]+)/],
      ['OppoBrowser', /oppobrowser\/([\d\.]+)/],
      ['MeiZu', /mz-/],
      ['Weibo', /weibo/],
      ['Youku', /youku/],
      ['NewsApp', /newsapp/],
      ['AliApp', /aliapp/],
      ['Firefox', /firefox\/([\d\.\w]+)/],
      ['Chrome', /chrome\/([\d\.]+)/],
      ['IE', /msie[ ](\d+\.\d+)/],
      ['Safari', /safari\/([\d\.]+)/]
    ],
      e = 0;
    e < t.length;
    e++
  )
    if ((r = i.match(t[e][1]))) {
      (o.name = t[e][0]), (o.version = r[1] || '0')
      break
    }
  return o
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:17:39
 * @LastEditTime: 2021-09-07 16:45:27
 * @LastEditors: wuxh
 * @Description: 数据持久化，缓存
 * @FilePath: /jcommon/src/cache/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 删除
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example: 
  removeStorage('test')
  => undefined
 */
export const removeStorage = function (key: any) {
  window.localStorage.removeItem(key)
}
/**
 * @description: 保存
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @param {value}
 * @param {isJson}
 * @return: undefined
 * @example: 
  saveStorage('test', '001')
  => undefined
 */
export const saveStorage = function (key: string, value: string): void {
  if (typeof value === 'undefined' || typeof value === 'function') {
    window.localStorage.setItem(key, '')
  } else {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }
}
/**
 * @description: 获取
 * @author: wuxh
 * @Date: 2020-05-06 12:00:37
 * @param {key}
 * @return: String
 * @example: 
  getStorage('test')
  => '001'
 */
export const getStorage = function (key: string): any {
  const value = window.localStorage.getItem(key) || ''
  if (typeof value === 'undefined' || typeof value === 'function') {
    return ''
  } else {
    return JSON.parse(value)
  }
}
/**
 * @description: 是否支持local
 * @author: wuxh
 * @Date: 2020-05-06 12:01:43
 * @param 
 * @return: Boolean
 * @example: 
  isSupportStorage()
  => true
 */
export const isSupportStorage = function () {
  if (!window.localStorage) {
    return false
  }
  try {
    window.localStorage.setItem('JUTILS_STOARGE_TEST', 'true')
    window.localStorage.removeItem('JUTILS_STOARGE_TEST')
    return true
  } catch (e) {
    return false
  }
}




/*
 * @Author: wuxh
 * @Date: 2020-06-09 09:27:33
 * @LastEditTime: 2023-05-24 15:07:09
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/src/cookie/index.ts
 */

/**
 * @description: 获取cookie值
 * @author: wuxh
 * @Date: 2020-06-09 09:28:06
 * @param {type} 
 * @return: string
 * @example: 
  getCookie('name') => 123
 */

export const getCookie = function (name: string): string | null {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:24:53
 * @LastEditTime: 2023-05-19 23:28:35
 * @LastEditors: wxingheng
 * @Description: 时间相关
 * @FilePath: /jcommon/src/date/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取两个时间的间隔
 * @author: wuxh
 * @Date: 2020-05-06 12:04:39
 * @param {st}
 * @param {et}
 * @return: String
 * @example: 
  dateInterval(new Date().getTime(), 1589661011714)
  => 11天13小时46分钟21秒
 */
export const dateInterval = function (st: number, et: number) {
  const timeLeft: number[] = [0, 0, 0, 0];
    let timeStr = '';
  let ts = et > st ? parseInt(((et - st) / 1000).toString()) : 0
  timeLeft[0] = ts > 86400 ? parseInt((ts / 86400).toString()) : 0
  ts = ts - timeLeft[0] * 86400
  timeLeft[1] = ts > 3600 ? parseInt((ts / 3600).toString()) : 0
  ts = ts - timeLeft[1] * 3600
  timeLeft[2] = ts > 60 ? parseInt((ts / 60).toString()) : 0
  timeLeft[3] = ts - timeLeft[2] * 60
  timeStr = timeLeft[0] > 0 ? timeLeft[0] + '天' : ''
  timeStr += timeLeft[0] <= 0 && timeLeft[1] <= 0 ? '' : timeLeft[1] + '小时'
  timeStr +=
    timeLeft[0] <= 0 && timeLeft[1] <= 0 && timeLeft[2] <= 0
      ? ''
      : timeLeft[2] + '分钟'
  timeStr +=
    timeLeft[0] <= 0 && timeLeft[1] <= 0 && timeLeft[2] <= 0 && timeLeft[3] <= 0
      ? ''
      : timeLeft[3] + '秒'
  return timeStr
}

/**
 * @description: 字符串补0，目前提供给dateFormat使用
 * @author: wuxh
 * @Date: 2020-05-11 14:01:20
 * @param {v} 需要处理的数据 String | Number
 * @param {size} 期望得到的总位数
 * @return: String
 * @example: 
  addZero(12, 1) => 12
  addZero(12, 2) => 12
  addZero(12, 3) => 012 
 */
export const addZero = function addZero (v: string | number, size: number) {
  return v.toString().padStart(size, '0')
}

/**
 * @description:  时间的转换（目前支持 年，月，日，时，分，秒，星期）
 * @author: wuxh
 * @Date: 2020-05-06 12:05:28
 * @param {date}
 * @param {formatStr}
 * @return: String
 * @example: 
  dateFormat(new Date(), '当前时间 YY-MM-DD HH:II:SS 星期W')
  => "当前时间 20-05-11 14:07:02 星期一"
 */
export const dateFormat = function (date: Date, formatStr: string): string {
  const arrWeek = ['日', '一', '二', '三', '四', '五', '六'],
    str = formatStr
      .replace(/yyyy|YYYY/, date.getFullYear().toString())
      .replace(/yy|YY/, addZero(date.getFullYear() % 100, 2))
      .replace(/mm|MM/, addZero(date.getMonth() + 1, 2))
      .replace(/m|M/g, (date.getMonth() + 1).toString())
      .replace(/dd|DD/, addZero(date.getDate(), 2))
      .replace(/d|D/g, date.getDate().toString())
      .replace(/hh|HH/, addZero(date.getHours(), 2))
      .replace(/h|H/g, date.getHours().toString())
      .replace(/ii|II/, addZero(date.getMinutes(), 2))
      .replace(/i|I/g, date.getMinutes().toString())
      .replace(/ss|SS/, addZero(date.getSeconds(), 2))
      .replace(/s|S/g, date.getSeconds().toString())
      .replace(/w/g, date.getDay().toString())
      .replace(/W/g, arrWeek[date.getDay()])
  return str
}

/**
 * @description:  时间的转换（目前支持 年，月，日，时，分，秒，星期）, 与dateFormat的区别是，这个方法可以传入时间戳
 * @author: wxingheng
 * @Date: 2022-09-30 11:46:22
 * @return {date} 
 * @example:  convertDateToView(new Date(), '当前时间 YY-MM-DD HH:II:SS 星期W')
 */
export const convertDateToView = (
  date: string | Date | number,
  template = "YYYY-MM-DD HH:II:SS",
  defaultResult = ""
): string => {
  if (!date) return defaultResult;
  try {
    if (typeof date === "string") {
      date = isNaN(Number(date)) ? new Date(date) : Number(date);
    }
    if (typeof date === "number") {
      date = new Date(date);
    }
    if (date instanceof Date) {
      return dateFormat(date, template);
    }
    return "";
  } catch (error) {
    return "";
  }
};

/**
 * @description:  时间的转换 "YYYY-MM-DD HH:II:SS"
 * @author: wxingheng
 * @Date: 2022-09-30 11:48:15
 * @param {string} date
 * @return {*}
 * @example: convertDateToStandard(new Date()) => "2021-09-30 11:48:15"
 */
export const convertDateToStandard = (date: string | Date | number): string => convertDateToView(date);

/**
 * @description:  时间的转换 "YYYY-MM-DD"
 * @author: wxingheng
 * @Date: 2022-09-30 11:49:14
 * @param {string} date
 * @return {*}
 * @example: convertDateToStandardDay(new Date()) => "2021-09-30"
 */
export const convertDateToStandardDay = (date: string | Date | number): string => convertDateToView(date, "YYYY-MM-DD");

/**
 * @description: 时间的转换 "YYYY-MM-DD HH"
 * @author: wxingheng
 * @Date: 2022-09-30 11:49:37
 * @param {string} date
 * @return {*}
 * @example: convertDateToStandardHours(new Date()) => "2021-09-30 11"
 */
export const convertDateToStandardHours = (date: string | Date | number): string =>
  convertDateToView(date, "YYYY-MM-DD HH");

/**
 * @description: 获取当前月份的天数
 * @author: wuxh
 * @Date: 2020-05-06 12:06:24
 * @param {str}
 * @return: Number
 * @example: 
  dateMonthDays('2020-05-06')
  => 31
 */
export const dateMonthDays = function (str: string) {
  const curDate = str ? new Date(str) : new Date()
  const curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + 1)
  curDate.setDate(0)
  return curDate.getDate()
}

/**
 * @description: 时间个性化输出功能
 * @author: wuxh
 * @Date: 2020-06-09 09:44:23
 * @param {type} 
 * @return: string
 * @example: 
  1、< 60s, 显示为“刚刚”
  2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
  3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
  4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
  5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
  timeFormat(new Date()) => '刚刚'
 */
export const timeFormat = function (time: Date): string {
  const date: Date = new Date(time),
    curDate: Date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 10,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours();

    let timeStr;

  if (year < curYear) {
    timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute
  } else {
    const pastTime = curDate.getTime() - date.getTime(),
      pastH = pastTime / 3600000

    if (pastH > curHour) {
      timeStr = month + '月' + day + '日 ' + hour + ':' + minute
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute + '分'
    } else {
      const pastM = curDate.getMinutes() - minute
      if (pastM > 1) {
        timeStr = pastM + '分钟前'
      } else {
        timeStr = '刚刚'
      }
    }
  }
  return timeStr
}


/**
 * @description: 获取当前月份天数
 * @author: wuxh
 * @Date: 2021-08-21 22:43:58
 * @param {*} str YYYY-MM-DD mm:ss
 * @return {*} number
 * @example:
 */
export const getCountDays = function (str: string | number | Date): number {
  const curDate = new Date(str)
  const curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + 1)
  curDate.setDate(0)
  return curDate.getDate()
}




/*
 * @Author: wuxh
 * @Date: 2021-09-02 21:21:04
 * @LastEditTime: 2023-09-13 11:14:51
 * @LastEditors: wxingheng
 * @Description: 防抖
 * @FilePath: /jcommon/src/debounce/index.ts
 */

/**
 * @description: debounce 防抖, 固定时间内持续触发，只执行最后一次
 * @author: wuxh
 * @Date: 2021-09-02 21:30:44
 * @param {*} Function 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 * @return {*} Function 
 * @example: 
 * function onInput() {
                console.log('1111')
            }
            const debounceOnInput = debounce(onInput)
            document
                .getElementById('input')
                .addEventListener('input', debounceOnInput)
 * 
 */
export const debounce = function (
  func: (...rest: any) => void,
  wait = 500,
  immediate = false
) {
  let timeout: any = null;

  const debouncedFunc = function (...args: any) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func(...args);
    } else {
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    }
  };

  debouncedFunc.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debouncedFunc;
};




/*
 * @Author: wuxh
 * @Date: 2021-09-22 23:13:40
 * @LastEditTime: 2023-05-19 19:58:57
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/src/decorator/index.ts
 */


/**
 * @description: decoratorNonenumerable
 * @author: wuxh
 * @Date: 2021-11-10 11:43:45
 * @param {*}
 * @return {*}
 * @example: 
 */
export const decoratorNonenumerable = function (
  _target: any,
  _name: any,
  descriptor: any
) {
  descriptor.enumerable = false
  return descriptor
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:49:34
 * @LastEditTime: 2023-05-19 23:49:17
 * @LastEditors: wxingheng
 * @Description: 用户设备相关（客户端系统）
 * @FilePath: /jcommon/src/devices/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取用户系统平台信息
 * @author: wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
```
  osInfo()
  => {os: "mac", version: "10.15.3"}
```
 */
export type osInfoResult =  {
  os: string | RegExp
  version: string
}
export const osInfo = function (e: string) {
  e = e || navigator.userAgent
  const t: osInfoResult = {
      os: 'other',
      version: ''
    },
    r = [
      ['android', /Android;?[\s\/]+([\d.]+)?/],
      ['android', /jdapp;android;[\d.]+;([\d.]+);/],
      ['android', /[aA]ndroid;/],
      ['ipad', /iPad;.*?OS\s([\d_]+)/],
      ['ipod', /iPod(?:\stouch)?;.*?\sOS\s([\d_]+)?/],
      ['iphone', /CPU\siPhone\s(?:OS\s)?([\d_]+)/],
      ['windows', /Windows NT/],
      ['mac', /Macintosh;.*?Mac OS X\s([\d._]+)/],
      ['windows phone', /Windows Phone\s([\d.]+)?/],
      ['symbianos', /SymbianOS\/([\d.]+)?/],
      ['bb', /BlackBerry|BB10|RIM Tablet OS\s([\d.]+)?/],
      ['linux', /linux/i]
    ];
    let o = 0
  for (; o < r.length; o++) {
    const i = r[o],
      a = e.match(i[1])
    if (a) {
      (t.os = i[0]), (t.version = (a[1] || '').replace(/_/g, '.'))
      break
    }
  }
  return t
}




/*
 * @Author: wuxh
 * @Date: 2021-09-01 23:24:46
 * @LastEditTime: 2023-05-19 23:50:44
 * @LastEditors: wxingheng
 * @Description: 浏览器 DOM 相关
 * @FilePath: /jcommon/src/dom/index.ts
 */

/**
 * @description: 下载一个链接文档
 * @author: wuxh
 * @Date: 2021-09-01 23:27:00
 * @param {string} link
 * @param {string} name
 * @return {*}
 * @example:
 * download('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F04%2F20200804215427_fc3ff.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633102668&t=5f2cf4e9273be91527efb91ecd5cb6dd')
 * 下载后端返回的流
 *
 */
export const download = function (link: string, name: string): any {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1)
  }
  const eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = link
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

/**
 * @description: 在浏览器中自定义下载一些内容
 * @author: wuxh
 * @Date: 2021-09-01 23:32:30
 * @param {string} name
 * @param {BlobPart} content
 * @return {*}
 * @example: 场景：我想下载一些DOM内容，我想下载一个JSON文件
 * 
 * downloadFile('1.txt','lalalallalalla')
   downloadFile('1.json',JSON.stringify({name:'hahahha'}))
 */
export const downloadFile = function (name: string, content: BlobPart): any {
  if (typeof name == 'undefined') {
    throw new Error('The first parameter name is a must')
  }
  if (typeof content == 'undefined') {
    throw new Error('The second parameter content is a must')
  }
  if (!(content instanceof Blob)) {
    content = new Blob([content])
  }
  const link = URL.createObjectURL(content)
  download(link, name)
}

/**
 * @description: 复制内容到剪贴板
 * @author: wuxh
 * @Date: 2021-09-02 22:22:03
 * @param {string} value
 * @return {*} boolean
 * @example: 
 copyToBoard('lalallala') => true // 如果复制成功返回true
 */
export const copyToBoar = function (value: string): boolean {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }
  document.body.removeChild(element)
  return false
}


/**
 * @description: 拖拽滚动
 * @author: wxingheng
 * @Date: 2022-07-15 18:16:15
 * @param {*} scrollDom
 * @return {*}
 * @example: 待增加惯性效果
 */
 export const dragScroll = function(scrollDom: any): object {
  let startX = 0;
  let startY = 0;
  let gapX = 0;
  let gapY = 0;
  scrollDom.addEventListener("mousedown", start);
  function start(event: { button: number; clientX: number; clientY: number }) {
    if (event.button === 0) {
      gapX = event.clientX;
      gapY = event.clientY;
      startX = scrollDom.scrollLeft || 0;
      startY = scrollDom.scrollTop || 0;
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
      scrollDom.style.cursor = "grab";
    }
    return false;
  }
  function move(event: { clientX: number; clientY: number }) {
    scrollDom.scrollTo(startX - (event.clientX - gapX), startY - (event.clientY - gapY));
    return false;
  }
  function stop() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", stop);
  }
  return {
    destroy: () => {
      scrollDom.removeEventListener("mousedown", start);
      scrollDom.style.cursor = "";
    },
  };
};

/**
 * @description: 获取图片的 base64
 * @author: wxingheng
 * @Date: 2022-09-30 10:53:33
 * @param {File} file
 * @return {*}
 * @example: getBase64(file).then(res => console.log(res))
 */
export const getBase64 = function(file: File): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * @description: 前端文件导入，JSON文件导入
 * @author: wxingheng
 * @Date: 2022-09-30 10:57:58
 * @param {*} Object
 * @return {*}
 * @example: importJson() => {name: 'wxh'}
 */
export const importJson = function(): object{
return new Promise((resolve) => {
  let input: any = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.onchange = (event: any) => {
    const files = event.target.files;
    if (!files || !files.length) {
      input = null;
      throw new Error("No files");
    }
    const reader = new FileReader();
    reader.onload = (event: any) => {
      try {
        const config = JSON.parse(event.target.result);
        console.log(config);
        input = null;
        resolve(config);
      } catch (e) {
        input = null;
        resolve(false);
      }
    };
    reader.readAsText(files[0]);
  };
  input.click();
});
}
  


  /**
   * @description: JSON 对象导出为.json文件
   * @author: wxingheng
   * @Date: 2022-09-30 11:00:54
   * @param {any} data
   * @param {*} name
   * @return {*}
   * @example: 
   */
  export const exportJson = function(data: any, name = "data"): any {
    let a: any = document.createElement("a");
    try {
      a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "application/json" }));
      a.download = `${name}.json`;
      a.click();
      a = null;
    } catch (error) {
      a = null;
    }
  }



/*
 * @Author: wuxh
 * @Date: 2021-09-01 22:49:28
 * @LastEditTime: 2023-05-24 15:10:30
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/src/eventBus/index.ts
 */



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
  addListener (event: string, cb: (...args: any[]) => any) {
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
  emit (event: string, ...args: any[]) {
    this.listeners[event].forEach((cb: (...args: any[]) => any) => {
      cb(...args)
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
  removeListener (event: string, listener: (...args: any[]) => any) {
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
  once (event: string, cb: (...args: any[]) => any) {
    (() => {
      const fn =  (...args: any[]) => {
        cb(...args)
        this.removeListener(event, fn)  // 使用this而不是self
      }
      this.addListener(event, fn)
    })()  // 立即执行函数表达式(IIFE)
  }
}

// console.log('EventBus', new EventBus().emit)




/*
 * @Author: wuxh
 * @Date: 2021-09-02 22:49:06
 * @LastEditTime: 2021-09-02 22:53:28
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/form/index.ts
 */

/**
 * @description: 对象转化为FormData对象
 * @author: wuxh
 * @Date: 2021-09-02 22:52:34
 * @param {object} object
 * @return {FormData}
 * @example: 
 let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
 */
export const getFormData = function (object: {
  [x: string]: string | Blob
}): FormData {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue))
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}




/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:16:25
 * @LastEditTime: 2023-05-24 15:11:02
 * @LastEditors: wxingheng
 * @Description: 数处理相
 * @FilePath: /jcommon/src/math/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 范围随机整数
 * @author: wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example: 
  scopeRandom(1, 10)
  => 3
 */
export const scopeRandom = function (str: number, end: number) {
  return Math.floor(Math.random() * (end - str) + str)
}

/**
 * @description: 保留到小数点以后n位
 * @author: wuxh
 * @Date: 2021-09-02 22:54:36
 * @param {number} number
 * @param {*} no
 * @return {*} Number
 * @example: 
 cutNumber('3123.22312') => 3123.22
 */
export const cutNumber = function (number: number, no = 2): number {
  if (typeof number != 'number') {
    number = Number(number)
  }
  return Number(number.toFixed(no))
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:52:11
 * @LastEditTime: 2023-05-24 15:12:14
 * @LastEditors: wxingheng
 * @Description: 移动端相关
 * @FilePath: /jcommon/src/mobile/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 是否是QQ平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  isQQ()
  => false
 */
export const isQQ = function (): boolean {
  if (/qq\/([\d\.]+)*/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 是否是微信平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  isWX()
  => false
 */
export const isWX = function (): boolean {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 获取手机运营商
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return: '移动' | '电信' | '联通' | '未知'
 * @example: 
  operattelecom('13419595634') => 移动
 */
export const operattelecom = function (e: string) {
  const i =
      '134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178',
    n = '130,131,132,155,156,185,186,145,176',
    a = '133,153,180,181,189,177,173,170',
    o = e || '',
    r = o.substring(0, 3),
    d = o.substring(0, 4),
    s =
      !!/^1\d{10}$/.test(o) &&
      (n.indexOf(r) >= 0
        ? '联通'
        : a.indexOf(r) >= 0
        ? '电信'
        : '1349' == d
        ? '电信'
        : i.indexOf(r) >= 0
        ? '移动'
        : '未知')
  return s
}

/**
 * @description: 是否是安卓设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:04
 * @param {type} 
 * @return: boolean
 * @example: 
  isAndroidMobileDevice() => false
 */
export const isAndroidMobileDevice = function (): boolean {
  return /android/i.test(navigator.userAgent.toLowerCase())
}

/**
 * @description: 是否是苹果设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:55
 * @param {type} 
 * @return: boolean
 * @example: 
  isAppleMobileDevice() => true
 */
export const isAppleMobileDevice = function (): boolean {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}




/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2023-05-24 15:36:20
 * @LastEditors: wxingheng
 * @Description: 对象相关（Object处理）
 * @FilePath: /jcommon/src/object/index.ts
 * @https://github.com/wxingheng/jcommon
 */



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




/*
 * @Author: wxingheng
 * @Date: 2022-05-04 11:40:27
 * @LastEditTime: 2023-06-13 16:14:18
 * @LastEditors: wxingheng
 * @Description: 暂时未归类的方法
 * @FilePath: /jcommon/src/other/index.ts
 */



/**
 * @description: 单击事件转换为多击事件
 * @author: wxingheng
 * @Date: 2022-05-04 14:20:22
 * @param {*} wait
 * @param {array} events
 * @return {*}
 * @example: 
 *    // 连续点击一次触发，连续点击两次触发，连续点击三次触发
        var oneClickToMoreClickCallBack = jcommon.oneClickToMoreClick(300, () => {
            console.log(111)
        }, () => {
            console.log(222)
        }, ()=> {
            console.log(333)
        })
        dom.addEventListener('click', oneClickToMoreClickCallBack);
 */
export const oneClickToMoreClick = function (
  wait = 300,
  ...events: Array<(...args: any[]) => void>
): () => void {
  let timer: any = null
  let lastTime = 0
  let count = 0
  return (...args: any[]) => {
    clearTimeout(timer)
    const currentTime = new Date().getTime()
    count = currentTime - lastTime < wait ? count + 1 : 0
    lastTime = new Date().getTime()
    events.forEach((event, i) => {
      if (i === count) {
        timer = setTimeout(() => {
          count = 0
          lastTime = 0
          if (isFunc(event)) {
            event(...args)
          }
        }, wait)
      }
    })
  }
}

/**
 * @description: 单击事件转换为多击事件
 * @author: wxingheng
 * @Date: 2022-08-09 14:03:34
 * @param {Function} fun 回调函数
 * @param {*} n 连续几次触发才触发回调函数
 * @param {*} wait 两次之间的间隔时间
 * @return {*}
 * @example:  const dobuleClick = moreClick(handleClick)
    // 连续点击三次触发
        var moreClickCallBack = jcommon.moreClick(() => {
            console.log("moreClickCallBack")
        }, 3)
        dom.addEventListener('click', moreClickCallBack);
 */
export const moreClick = function (
  fun: (...args: any) => void,
  n = 2,
  wait = 300
) {
  let timer: any = null
  let lastTime = 0
  let count = 0
  return (...args: any[]) => {
    clearTimeout(timer)
    const currentTime = new Date().getTime()
    count = currentTime - lastTime < wait ? count + 1 : 0
    lastTime = new Date().getTime()
    if (count === n) {
      timer = setTimeout(() => {
        count = 0
        lastTime = 0
        if (isFunc(fun)) {
          fun(...args)
        }
      }, wait)
    }
  }
}

/**
 * @description: 产生一个随机颜色
 * @author: wxingheng
 * @Date: 2022-09-30 11:13:13
 * @return {*}
 * @example: randomColor() => "rgba(107, 35, 72, 1)";
 */
export const randomColor = function (): any {
  return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 1)`
}

/**
 * @description: 比例计算
 * @author: wxingheng
 * @Date: 2022-09-30 11:13:27
 * @param {number} value 当前值
 * @param {number} source  当前值所在的区间
 * @param {number} target 目标区间
 * @param {any} toFixedLength 保留小数位数
 * @return {*}
 * @example:  scaleLinear(50, 100, 10, 2) => 5; scaleLinear(50, 100, 10, 0) => 5;
 */
export const scaleLinear = function (
  value: number,
  source: number,
  target: number,
  toFixedLength: any = 2
): any {
  return ((value / source) * target).toFixed(toFixedLength)
}

/**
 * @description: 转换请求为慢响应
 * @param {*} func 请求函数
 * @param {*} fastestTime 最快响应时间
 * @return {*}
 * @example: const data = await fetchToSlow(1000 * 2)(getKgDetail(kg_id));
 */
export const fetchToSlow = function (
  fastestTime: number | undefined
): (func: any) => any {
  return (func: any): any =>
    new Promise(resolve => {
      Promise.all([func, sleep(fastestTime)]).then(args => {
        resolve(args[0])
      })
    })
}

/**
 * @description:  处理流响应数据
 * @author: wxingheng
 * @Date: 2023-06-13 16:14:34
 * @param {any} response
 * @param {object} typewriter
 * @return {*}
 * @example:
 */
export const processStreamResponse = async (
  response: any,
  typewriter: { start: () => void; done: () => void; add: (arg0: any) => void }
) => {
  const decoder = new TextDecoder('utf-8')
  const reader = response.body.getReader()

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        typewriter.done()
        break
      }
      const chunk = decoder.decode(value)

      const lines = chunk.split(/(\n){2}/)

      const parsedLines = lines
        .map(line => line.replace(/(\n)?^data:\s*/, '').trim())
        .filter(line => line !== '' && line !== '[DONE]')
        .map(line => {
          try {
            return JSON.parse(line)
          } catch (error) {
            console.log(error)
            return {
              choices: [
                {
                  delta: {
                    content: ''
                  }
                }
              ]
            }
          }
        })
      for (const parsedLine of parsedLines) {
        let chunkContent = parsedLine.choices[0].delta.content ?? ''
        chunkContent = chunkContent.replace(/^`\s*/, '`')
        typewriter.add(chunkContent)
      }
    }
  } catch (error) {
    console.log(error)
  }
}




/*
 * @Author: wuxh
 * @Date: 2021-08-31 23:08:54
 * @LastEditTime: 2021-09-02 23:04:22
 * @LastEditors: wuxh
 * @Description: Queue 队列
 * @FilePath: /jcommon/src/queue/index.ts
 */



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




/*
 * @Author: wuxh
 * @Date: 2021-09-02 22:24:01
 * @LastEditTime: 2021-09-02 23:11:09
 * @LastEditors: wuxh
 * @Description: 休眠
 * @FilePath: /jcommon/src/sleep/index.ts
 */



/**
 * @description: 休眠多少毫秒
 * @author: wuxh
 * @Date: 2021-09-02 23:08:19
 * @param {number} milliseconds
 * @return {*}
 * @example: 
  fetchData = async () => {
    await sleep(1000)
  }
 */
export const sleep = function (milliseconds: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}




/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2023-05-24 15:29:53
 * @LastEditors: wxingheng
 * @Description: 字符串处理相关
 * @FilePath: /jcommon/src/string/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 去除字符串空格, 默认去除前后空格 （常用）
 * @author: wuxh
 * @Date: 2020-05-06 13:43:52
 * @param {str} String
 * @param {global} Boolean
 * @return: String
 * @example: 
  trim('   1 1 1   ') => '1 1 1'
  trim('   1 1 1   ', true) => '111'
 */
export const trim = function (str: string, global = false) {
  let result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (global) {
    result = result.replace(/\s/g, '')
  }
  return result
}

/**
 * @description: 身份证号码解析性别
 * @author: wuxh
 * @Date: 2020-06-09 09:16:28
 * @param {type} 
 * @return: 'FEMALE' ｜ 'MALE'
 * @example: 
   getSexByIdNO('421182199409274710') => MALE
 */
export const getSexByIdNO = function (IdNO: string): 'FEMALE' | 'MALE' | '' {
  if (IdNO.length == 18) {
    return Number(IdNO.charAt(16)) % 2 == 0 ? 'FEMALE' : 'MALE'
  } else if (IdNO.length == 15) {
    return Number(IdNO.charAt(14)) % 2 == 0 ? 'FEMALE' : 'MALE'
  } else {
    return ''
  }
}

/**
 * @description: 身份证号码解析出生日期
 * @author: wuxh
 * @Date: 2020-06-09 09:17:50
 * @param {type} 
 * @return: string
 * @example: 
  getBirthdatByIdNo('421182199409274710') => '1994-09-27'
 */
export const getBirthdatByIdNo = function (iIdNo: string): string {
  let tmpStr = ''
  if (iIdNo.length == 15) {
    tmpStr = iIdNo.substring(6, 12)
    tmpStr = '19' + tmpStr
    tmpStr =
      tmpStr.substring(0, 4) +
      '-' +
      tmpStr.substring(4, 6) +
      '-' +
      tmpStr.substring(6)
    return tmpStr
  } else {
    tmpStr = iIdNo.substring(6, 14)
    tmpStr =
      tmpStr.substring(0, 4) +
      '-' +
      tmpStr.substring(4, 6) +
      '-' +
      tmpStr.substring(6)
    return tmpStr
  }
}

/**
 * @description: 隐藏身份证号码
 * @author: wuxh
 * @Date: 2020-06-09 09:19:26
 * @param {type} 
 * @return: string
 * @example: 
  hideIdNum('421182199409274710') => 4****************0
 */
export const hideIdNum = function (str: string) {
  return `${String(str).slice(0, 1)}****************${String(str).slice(17)}`
}

/**
 * @description: 随机数 + 时间戳
 * @author: wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type} 
 * @return: string
 * @example: 
  uniqueId() => '1591667193048544'
 */
export const uniqueId = function () {
  const a = Math.random,
    b = parseInt
  return (
    Number(new Date()).toString() +
    b((10 * a()).toString()) +
    b((10 * a()).toString()) +
    b((10 * a()).toString())
  )
}

/**
 * @description: 版本号累加
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @param {*} version : string
 * @return {*} string
 * @example: versionCount('0.0.1') => '0.0.2'
 * versionCount('0.2.9') => '0.3.0'
 * versionCount('0.2.9.1') => '0.2.9.2'
 */
export const versionCount = function (version: string, maxNum = 99): string {
  let s = version.split('.').map(v => Number(v))
  const nan = s.some(v => isNaN(v))
  let c = true
  if (nan) {
    return version
  }
  s = s.reverse()
  s.forEach((v, i) => {
    if (c) {
      if (v >= maxNum) {
        s[i] = 0
      } else {
        c = false
        s[i] = s[i] + 1
      }
    }
  })
  return s.reverse().join('.')
}

/**
 * @description: 获取文件后缀名
 * @author: wuxh
 * @Date: 2021-09-02 22:17:57
 * @param {string} filename
 * @return {*}
 * @example: 
 getExt("1.mp4") => mp4
 */
export const getExt = function (filename: string) {
  if (typeof filename == 'string') {
    return filename.split('.').pop()
  } else {
    throw new Error('filename must be a string type')
  }
}

/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */

/**
 * @description: 生成随机字符串,第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
 * @author: wuxh
 * @Date: 2021-09-02 22:29:02
 * @param {number} length
 * @param {string} chars
 * @return {string}
 * @example: 
 uuid() => 'ghijklmn'
 */
export const uuid = function (length: number, chars: string | any[]): string {
  chars =
    chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  length = length || 8
  let result = ''
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

/**
 * @description: 字符串判断结尾
 * @author: wuxh
 * @Date: 2021-11-10 11:35:30
 * @param {string} str
 * @param {string} endStr
 * @return {*}
 * @example: endWith('1231231', '21') => false ;  endWith('1231231', '31') => true
 */
export const endWith = function (str: string, endStr: string): boolean {
  const d = str.length - endStr.length
  return d >= 0 && str.lastIndexOf(endStr) == d
}

/**
 * @description: 计算两个字符串相似度
 * @author: wxingheng
 * @Date: 2022-07-25 10:07:23
 * @param s 文本1
 * @param t 文本2
 * @param f 小数位精确度，默认2位
 * @returns {string|number|*} 百分数前的数值，最大100. 比如 ：90.32
 * @example: similar("12", "12") => 100 ; similar("12", "123") => 75 ; similar("12", "1234") => 50
 */
export const similar = function (s: string, t: string, f = 2): number {
  if (!s || !t) {
    return 0
  }
  if (s === t) {
    return 100
  }
  const l = s.length > t.length ? s.length : t.length
  const n = s.length
  const m = t.length
  const d: number[][] = []
  const min = function (a: number, b: number, c: number) {
    return a < b ? (a < c ? a : c) : b < c ? b : c
  }
  let i: number, j: number, si: string, tj: string, cost: number
  if (n === 0) return m
  if (m === 0) return n
  for (i = 0; i <= n; i++) {
    d[i] = []
    d[i][0] = i
  }
  for (j = 0; j <= m; j++) {
    d[0][j] = j
  }
  for (i = 1; i <= n; i++) {
    si = s.charAt(i - 1)
    for (j = 1; j <= m; j++) {
      tj = t.charAt(j - 1)
      if (si === tj) {
        cost = 0
      } else {
        cost = 1
      }
      d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
    }
  }
  const res = (1 - d[n][m] / l) * 100

  return Number(res.toFixed(f))
}

/**
 * @description: 计算文本长度（中文算两个字符，英文算一个字符）
 * @author: wxingheng
 * @Date: 2022-09-30 10:49:41
 * @param {string} str
 * @return {number}
 * @example: getStringLen("阿斯顿发123") => 11 ; getStringLen("asd123") => 6 ; getStringLen("asd123顿发") => 10
 */
export const getStringLen = function (str: string): number {
  if (!str) {
    return 0
  }
  const len = str.length
  str = str.toString()
  let realLen = 0
  for (let i = 0; i < len; i++) {
    realLen += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1
  }
  return realLen
}




/*
 * @Author: wuxh
 * @Date: 2021-09-02 21:46:22
 * @LastEditTime: 2023-05-24 15:43:06
 * @LastEditors: wxingheng
 * @Description: 节流
 * @FilePath: /jcommon/src/throttle/index.ts
 */

/**
 * @description: 节流 多次调用方法，按照一定的时间间隔执行
 * @author: wuxh
 * @Date: 2021-09-02 21:46:38
 * @param {*} func
 * @param {*} wait
 * @param {*} options: { leading: boolean; trailing: boolean }
 * @return {*} Function
 * @example: 
 *
leading，函数在每个等待时延的开始被调用，默认值为false
trailing，函数在每个等待时延的结束被调用，默认值是true
可以根据不同的值来设置不同的效果：
leading-false，trailing-true：默认情况，即在延时结束后才会调用函数
leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用
leading-true, trailing-false：只在延时开始时调用
 */
export const throttle = (
  func: () => void,
  wait = 500,
  options: { leading: boolean; trailing: boolean }
): (() => void) => {
  let timeout: NodeJS.Timeout | null, context: null, args: any
  let previous = 0
  if (!options) options = { leading: false, trailing: true }

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  const throttled = function (...args: any) {
    const now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    context = null
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:02:02
 * @LastEditTime: 2023-05-19 23:03:24
 * @LastEditors: wxingheng
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
  const u =  window.location.search,
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
export const everyTrim = function (data: Array<any> | object) {
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




/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:08:11
 * @LastEditTime: 2023-05-19 22:57:22
 * @LastEditors: wxingheng
 * @Description: 校验相关
 * @FilePath: /jcommon/src/validate/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 身份证号码校验（精准）
 * @author: wuxh
 * @Date: 2020-05-06 13:49:58
 * @param {e}
 * @return: String<msg> | Boolean
 * @example: 
  isUserId('421182199409274710') => ''
  isUserId('421182199409') => '身份证号码长度应该为18位'
 */
export const isUserId = function (e: string) {
  let i,
    t,
    a,
    n,
    s,
    o,
    r,
    d,
    l,
    c;
    const p: { [key: string]: string } = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    }
  if (
    ((s = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2']),
    (o = [
      '7',
      '9',
      '10',
      '5',
      '8',
      '4',
      '2',
      '1',
      '6',
      '3',
      '7',
      '9',
      '10',
      '5',
      '8',
      '4',
      '2'
    ]),
    (i = ''),
    !e)
  )
    return '身份证号码不能为空'
  if (18 != e.length) return '身份证号码长度应该为18位'
  if (
    (18 == e.length
      ? (i = e.substring(0, 17))
      : 15 == e.length && (i = e.substring(0, 6) + '19' + e.substring(6, 15)),
    !/^\d+$/.test(i))
  )
    return '身份证格式错误'
  if (
    ((t = i.substring(6, 10)),
    (a = i.substring(10, 12)),
    (n = i.substring(12, 14)),
    false ===
      /[1-9]\d{3}-(0[1-9]|1[0-2])-([0-2]\d|3[0-1])/.test(
        t + '-' + a + '-' + n
      ))
  )
    return '身份证生日无效。'
  if (
    new Date().getFullYear() - Number(t) > 150 ||
    new Date().getTime() -
      new Date(Number(t), Number(a) - 1, Number(n)).getTime() <
      0
  )
    return '身份证生日不在有效范围'
  if (Number(a) > 12 || 0 === Number(a)) return '身份证月份无效'
  if (Number(n) > 31 || 0 == Number(n)) return '身份证日期无效'
  if (!p[i.substring(0, 2)]) return '身份证地区编码错误'

  for (d = 0, r = 0; r < 17; r++) d += Number(i.charAt(r)) * Number(o[r])
  return (
    (l = d % 11),
    (c = s[l]),
    (i += c),
    18 != e.length ? '' : i != e.toLowerCase() ? '不是合法的身份证号码' : ''
  )
}

/**
 * @description: 精准判断数据类型
 * @author: wuxh
 * @Date: 2020-05-06 13:51:50
 * @param {data} any
 * @param {type} type  'String' | 'Number' | 'Boolean' | 'Undefined' | 'Null' | 'Function' | 'Date' | 'Array' | 'RegExp' | 'Error' | 'Object'
 * @return: Boolean
 * @example: 
  isType(123, 'String') => false
  isType('123', 'String') => true
 */
export const isType = function (data: any, type: string): boolean {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}
/**
 * @description: 判断String类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isString(123) => false
  isString('') => true
 */
export const isString = function (data: any): boolean {
  return isType(data, 'String')
}

/**
 * @description: 判断Number类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNumber(123) => true
  isNumber('') => false
 */
export const isNumber = function (data: any): boolean {
  return isType(data, 'Number')
}

/**
 * @description: 判断Boolean类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isBoolean(false) => true
  isBoolean('false') => false
 */
export const isBoolean = function (data: any): boolean {
  return isType(data, 'Boolean')
}

/**
 * @description: 判断Undefined类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isUndefined(undefined) => true
  isUndefined('undefined') => false
 */
export const isUndefined = function (data: any): boolean {
  return isType(data, 'Undefined')
}

/**
 * @description: 判断Null类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNull(null) => true
  isNull('null') => false
 */
export const isNull = function (data: string): boolean {
  return isType(data, 'Null')
}

/**
 * @description: 判断Function类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isFunc(() => 123) => true
  isFunc(123) => false
 */
export const isFunc = function (data: any): boolean {
  return isType(data, 'Function')
}

/**
 * @description: 判断Date类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isDate(() => new Date()) => false
  isDate(new Date()) => true
 */
export const isDate = function (data: any): boolean {
  return isType(data, 'Date')
}

/**
 * @description: 判断Array类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isArray([]) => true
  isArray(![]) => false
 */
export const isArray = function (data: any): boolean {
  return isType(data, 'Array')
}

/**
 * @description: 判断RegExp类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isReg(new RegExp()) => true
  isReg(![]) => false
 */
export const isReg = function (data: any): boolean {
  return isType(data, 'RegExp')
}

/**
 * @description: 判断Error类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isError(new Error()) => true
  isError(![]) => false
 */
export const isError = function (data: any): boolean {
  return isType(data, 'Error')
}

/**
 * @description: 判断Object类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isObject({}) => true
  isObject(![]) => false
 */
export const isObject = function (data: any): boolean {
  return isType(data, 'Object')
}

/**
 * @description: 手机号校验
 * @author: wuxh
 * @Date: 2020-06-09 09:21:15
 * @param {type} 
 * @return: boolean
 * @example: 
  isPhone('13419595634') => true
 */
export const isPhone = function (phone: string): boolean {
  if (!phone) {
    return false
  }
  const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
  return phoneReg.test(phone)
}

/**
 * @description: 校验是否为邮箱地址
 * @author: wuxh
 * @Date: 2020-06-09 09:49:29
 * @param {type} 
 * @return: boolean
 * @example: 
  isEmail('wxingheng@outlook.com') => true
 */
export const isEmail = function (str: string): boolean {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
}

/**
 * @description: 判断 js是否是false， 0除外。
 * @author: wuxh
 * @Date: 2021-09-02 22:01:50
 * @param {any} value
 * @return {*} value === 0 ? false : !value
 * @example: 
 isFalsy('') => true
 isFalsy(0) => false
 isFalsy(null) => true
 isFalsy(undefined) => true
 */
export const isFalsy = function (value: any): boolean {
  return value === 0 ? false : !value
}

/**
 * @description: 判断是否为空 undefined || null || ""
 * @author: wuxh
 * @Date: 2021-09-02 22:03:36
 * @param {any} value
 * @return {*} boolean
 * @example: 
 isVoid(0) => false
 isVoid(undefined) => true
 isVoid('') => true
 isVoid(null) => true
 isVoid() => true
 */
export const isVoid = (value: any) =>
  value === undefined || value === null || value === ''




