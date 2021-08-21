/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2021-08-21 23:13:04
 * @LastEditors: wuxh
 * @Description: 数组方法 Array
 * @FilePath: /jcommon/src/array/index.ts
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
interface DoubleRankingOption {
  filterRuleKey: string // 一级过滤和排序的key,
  rule: string[] // 一级排序规则,
  sortKey: string // 二级正常排序的key
  sortOrder: number
}
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
export const randomData = function (num: number, arr: any[]) {
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




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:14:00
 * @LastEditTime: 2021-08-21 19:37:30
 * @LastEditors: wuxh
 * @Description: 浏览器相关
 * @FilePath: /jcommon/src/browser/index.ts
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取浏览器相关信息
 * @author: wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
  getBrowserInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
 */
interface getBrowserInfoResult {
  name: string | RegExp
  version: string
}
export const getBrowserInfo = function (): getBrowserInfoResult {
  let e,
    t,
    r,
    o: getBrowserInfoResult = {
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
      ;(o.name = t[e][0]), (o.version = r[1] || '0')
      break
    }
  return o
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:17:39
 * @LastEditTime: 2021-08-21 20:00:11
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
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e)
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
export const getStorage = function (key: string): string | null {
  return window.localStorage.getItem(key)
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
 * @LastEditTime: 2021-08-21 20:02:34
 * @LastEditors: wuxh
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
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:49:34
 * @LastEditTime: 2021-08-21 20:17:01
 * @LastEditors: wuxh
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
  osInfo()
  => {os: "mac", version: "10.15.3"}
 */
interface osInfoResult {
  os: string | RegExp
  version: string
}
export const osInfo = function (e: string) {
  e = e || navigator.userAgent
  let t: osInfoResult = {
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
    ],
    o = 0
  for (; o < r.length; o++) {
    const i = r[o],
      a = e.match(i[1])
    if (a) {
      ;(t.os = i[0]), (t.version = (a[1] || '').replace(/_/g, '.'))
      break
    }
  }
  return t
}




/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:16:25
 * @LastEditTime: 2021-08-21 20:17:27
 * @LastEditors: wuxh
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




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:24:53
 * @LastEditTime: 2021-08-21 22:46:31
 * @LastEditors: wuxh
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
  let timeLeft = [0, 0, 0, 0],
    timeStr = ''
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
  for (let i = 0, len = size - (v + '').length; i < len; i++) {
    v = '0' + v
  }
  return v + ''
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
export const dateFormat = function (date: Date, formatStr: string) {
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
  var date: Date = new Date(time),
    curDate: Date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 10,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours(),
    timeStr

  if (year < curYear) {
    timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute
  } else {
    var pastTime = curDate.getTime() - date.getTime(),
      pastH = pastTime / 3600000

    if (pastH > curHour) {
      timeStr = month + '月' + day + '日 ' + hour + ':' + minute
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute + '分'
    } else {
      var pastM = curDate.getMinutes() - minute
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
 * @Date: 2020-05-05 14:52:11
 * @LastEditTime: 2021-08-21 20:18:34
 * @LastEditors: wuxh
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
  var i =
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
 * @LastEditTime: 2021-08-21 23:25:36
 * @LastEditors: wuxh
 * @Description: 对象相关（Object处理）
 * @FilePath: /jcommon/src/object/index.ts
 * @https://github.com/wxingheng/jcommon
 */

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
export function getV<T> (defaultResult: T, ...args: any): any {
  return args.length >= 2
    ? args.reduce((a: any, b: any) =>
        a && a.hasOwnProperty(b) ? a[b] : defaultResult
      )
    : defaultResult
}

/**
 * @description: 对象克隆（只包含可遍历属性<常用>）
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




/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2021-08-21 22:25:47
 * @LastEditors: wuxh
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
export const trim = function (str: string, global: boolean = false) {
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
  var a = Math.random,
    b = parseInt
  return (
    Number(new Date()).toString() +
    b((10 * a()).toString()) +
    b((10 * a()).toString()) +
    b((10 * a()).toString())
  )
}




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




/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:08:11
 * @LastEditTime: 2021-08-21 21:42:54
 * @LastEditors: wuxh
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
    c,
    p: { [key: string]: string } = {
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
      /[1-9]\d{3}\-(0[1-9]|1[0-2])\-([0-2]\d|3[0-1])/.test(
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




