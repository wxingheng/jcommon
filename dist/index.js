/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2020-05-07 22:16:30
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
   ArrDoubleRanking(
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
export const jArrDoubleRanking = function (arr, options) {
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
  jArrRandomDate(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
 */
export const jArrRandomDate = function (num, arr) {
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
  jArrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  jArrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
 */
export const jArrByObj = function (arr, key, v = '') {
  const obj = {}
  arr.forEach(function (d) {
    obj[d[key]] = v ? d[v] : d
  })
  return obj
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:14:00
 * @LastEditTime: 2020-05-07 22:25:47
 * @LastEditors: wuxh
 * @Description: 浏览器相关
 * @FilePath: /jcommon/src/browser/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取浏览器相关信息
 * @author: wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
  jBroGetInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
 */
export const jBroGetInfo = function () {
  let e,
    t,
    r,
    o = {
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
 * @Date: 2020-05-04 21:24:53
 * @LastEditTime: 2020-05-07 22:27:04
 * @LastEditors: wuxh
 * @Description: 时间相关
 * @FilePath: /jcommon/src/date/index.js
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
  jDateInterval(new Date().getTime(), 1589661011714)
  => 11天13小时46分钟21秒
 */
export const jDateInterval = function (st, et) {
  let timeLeft = [0, 0, 0, 0],
    timeStr = ''
  let ts = et > st ? parseInt((et - st) / 1000) : 0
  timeLeft[0] = ts > 86400 ? parseInt(ts / 86400) : 0
  ts = ts - timeLeft[0] * 86400
  timeLeft[1] = ts > 3600 ? parseInt(ts / 3600) : 0
  ts = ts - timeLeft[1] * 3600
  timeLeft[2] = ts > 60 ? parseInt(ts / 60) : 0
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
 * @description:  时间戳的转换（自定义格式）
 * @author: wuxh
 * @Date: 2020-05-06 12:05:28
 * @param {date}
 * @param {formatStr}
 * @return: String
 * @example: 
  jDateFormat(new Date(), 'YYYY-MM')
  => "2020-05"
 */
export const jDateFormat = function (date, formatStr) {
  function addZero (v, size) {
    for (let i = 0, len = size - (v + '').length; i < len; i++) {
      v = '0' + v
    }
    return v + ''
  }

  const arrWeek = ['日', '一', '二', '三', '四', '五', '六'],
    str = formatStr
      .replace(/yyyy|YYYY/, date.getFullYear())
      .replace(/yy|YY/, addZero(date.getFullYear() % 100, 2))
      .replace(/mm|MM/, addZero(date.getMonth() + 1, 2))
      .replace(/m|M/g, date.getMonth() + 1)
      .replace(/dd|DD/, addZero(date.getDate(), 2))
      .replace(/d|D/g, date.getDate())
      .replace(/hh|HH/, addZero(date.getHours(), 2))
      .replace(/h|H/g, date.getHours())
      .replace(/ii|II/, addZero(date.getMinutes(), 2))
      .replace(/i|I/g, date.getMinutes())
      .replace(/ss|SS/, addZero(date.getSeconds(), 2))
      .replace(/s|S/g, date.getSeconds())
      .replace(/w/g, date.getDay())
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
  jDateMonthDays('2020-05-06')
  => 31
 */
export const jDateMonthDays = function (str) {
  const curDate = str ? new Date(str) : new Date()
  const curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + 1)
  curDate.setDate(0)
  return curDate.getDate()
}




/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:17:39
 * @LastEditTime: 2020-05-07 22:27:43
 * @LastEditors: wuxh
 * @Description: 数据持久化，缓存
 * @FilePath: /jcommon/src/cache/index.js
 * @https://github.com/wxingheng/jcommon
 */


/**
 * @description: 删除
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example: 
  jCaStorage().removeStorage('test')
  => undefined
 */
export const jCaRemoveStorage = function (key) {
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
  jCaStorage().saveStorage('test', '001')
  => undefined
 */
export const jCaSaveStorage = function (key, value, isJson) {
  try {
    window.localStorage.setItem(key, isJson ? JSON.stringify(value) : value)
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
  jCaStorage().getStorage('test')
  => '001'
 */
export const jCaGetStorage = function (key) {
  return window.localStorage.getItem(key)
}
/**
 * @description: 是否支持local
 * @author: wuxh
 * @Date: 2020-05-06 12:01:43
 * @param 
 * @return: Boolean
 * @example: 
  jCaStorage().isSupportStorage()
  => true
 */
export const jCaIsStorage = function () {
  if (!window.localStorage) {
    return false
  }
  try {
    window.localStorage.setItem('JUTILS_STOARGE_TEST', true)
    window.localStorage.removeItem('JUTILS_STOARGE_TEST')
    return true
  } catch (e) {
    return false
  }
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:49:34
 * @LastEditTime: 2020-05-07 22:28:16
 * @LastEditors: wuxh
 * @Description: 用户设备相关（客户端系统）
 * @FilePath: /jcommon/src/devices/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取用户系统平台信息
 * @author: wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
  jOsInfo()
  => {os: "mac", version: "10.15.3"}
 */
export const jOsInfo = function (e) {
  e = e || navigator.userAgent
  let t = {
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
 * @LastEditTime: 2020-05-07 22:28:47
 * @LastEditors: wuxh
 * @Description: 数处理相
 * @FilePath: /jcommon/src/math/index.js
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
  jMathRandom(1, 10)
  => 3
 */
export const jMathRandom = function (str, end) {
  return Math.floor(Math.random() * (end - str) + str)
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 14:52:11
 * @LastEditTime: 2020-05-07 22:29:14
 * @LastEditors: wuxh
 * @Description: 移动端相关
 * @FilePath: /jcommon/src/mobile/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 是否是QQ平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  jMobIsQQ()
  => false
 */
export const jMobIsQQ = function () {
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
  jMobIsWX()
  => false
 */
export const jMobIsWX = function () {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * @description: 获取手机运营商 (开发中)
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return:
 * @example: 
  jMobOperator()
  => 移动
 */
export const jMobOperator = function () {}




/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:09:20
 * @LastEditTime: 2020-05-07 22:32:09
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
  jObjMerge({name: 111}, {name:333, value: 222}, []) => {name: 111, value: 222}
  jObjMerge({name: 111}, {name:333, value: 222}, ['name']) => {name: 333, value: 222}
 */
export const jObjMerge = function (oldObj, newObj, keys) {
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




/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2020-05-07 22:32:33
 * @LastEditors: wuxh
 * @Description: 字符串处理相关
 * @FilePath: /jcommon/src/string/index.js
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
  jStrTrim('   1 1 1   ') => '1 1 1'
  jStrTrim('   1 1 1   ', true) => '111'
 */
export const jStrTrim = function (str, global) {
  let result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (global) {
    result = result.replace(/\s/g, '')
  }
  return result
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:08:11
 * @LastEditTime: 2020-05-07 22:41:32
 * @LastEditors: wuxh
 * @Description: 校验相关
 * @FilePath: /jcommon/src/validate/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 身份证号码校验（精准）
 * @author: wuxh
 * @Date: 2020-05-06 13:49:58
 * @param {e}
 * @return: String<msg> | Boolean
 * @example: 
  jValUserId('421182199409274710') => ''
  jValUserId('421182199409') => '身份证号码长度应该为18位'
 */
export const jValUserId = function (e) {
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
    p = {
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
    ('',
    (s = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2']),
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
    0 ==
      /[1-9]\d{3}\-(0[1-9]|1[0-2])\-([0-2]\d|3[0-1])/.test(
        t + '-' + a + '-' + n
      ))
  )
    return '身份证生日无效。'
  if (
    new Date().getFullYear() - t > 150 ||
    new Date().getTime() - new Date(t, a - 1, n).getTime() < 0
  )
    return '身份证生日不在有效范围'
  if (a > 12 || 0 == a) return '身份证月份无效'
  if (n > 31 || 0 == n) return '身份证日期无效'
  if (!p[i.substring(0, 2)]) return '身份证地区编码错误'
  for (d = 0, r = 0; r < 17; r++) d += i.charAt(r) * o[r]
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
  jValType(123, 'String') => false
  jValType('123', 'String') => true
 */
export const jValType = function (data, type) {
  Object.prototype.toString.call(data) === `[object ${type}]`
}
/**
 * @description: 判断String类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsString(123) => false
  jValIsString('') => true
 */
export const jValIsString = function (data) {
  jValType(data, 'String')
}

/**
 * @description: 判断Number类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsString(123) => true
  jValIsString('') => false
 */
export const jValIsNumber = function (data) {
  jValType(data, 'Number')
}

/**
 * @description: 判断Boolean类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsBoolean(false) => true
  jValIsBoolean('false') => false
 */
export const jValIsBoolean = function (data) {
  jValType(data, 'Boolean')
}

/**
 * @description: 判断Undefined类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsUndefined(undefined) => true
  jValIsUndefined('undefined') => false
 */
export const jValIsUndefined = function (data) {
  jValType(data, 'Undefined')
}

/**
 * @description: 判断Null类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsNull(null) => true
  jValIsNull('null') => false
 */
export const jValIsNull = function (data) {
  jValType(data, 'Null')
}

/**
 * @description: 判断Function类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsFunc(() => 123) => true
  jValIsFunc(123) => false
 */
export const jValIsFunc = function (data) {
  jValType(data, 'Function')
}

/**
 * @description: 判断Date类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsDate(() => new Date()) => false
  jValIsDate(new Date()) => true
 */
export const jValIsDate = function (data) {
  jValType(data, 'Date')
}

/**
 * @description: 判断Array类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsDate([]) => true
  jValIsDate(![]) => false
 */
export const jValIsArray = function (data) {
  jValType(data, 'Array')
}

/**
 * @description: 判断RegExp类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsReg(new RegExp()) => true
  jValIsReg(![]) => false
 */
export const jValIsReg = function (data) {
  jValType(data, 'RegExp')
}

/**
 * @description: 判断Error类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsError(new Error()) => true
  jValIsError(![]) => false
 */
export const jValIsError = function (data) {
  jValType(data, 'Error')
}

/**
 * @description: 判断Object类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsError({}) => true
  jValIsError(![]) => false
 */
export const jValIsObject = function (data) {
  jValType(data, 'Object')
}




/*
 * @Author: wuxh
 * @Date: 2020-05-05 15:02:02
 * @LastEditTime: 2020-05-07 22:33:33
 * @LastEditors: wuxh
 * @Description: url处理相关
 * @FilePath: /jcommon/src/url/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 获取浏览器url中的一个参数
 * @author: wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example: 
  jUrlGetQuery(age)
  => 25
 */
export const jUrlGetQuery = function (name) {
  const u = arguments[1] || window.location.search,
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
  return r != null ? r[2] : ''
}

/**
 * @description: 格式化GET请求的请求头
 * @author: wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example: 
  jObjToQuery({name: 1, value: 123})
  =>  "name=1&value=123"
 */
export const jUrlObjByStr = function (obj) {
  let str = ''
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach(function (elem) {
          str = str + key + '=' + elem + '&'
        })
      } else {
        if (obj[key]) {
          str = str + key + '=' + obj[key] + '&'
        }
      }
    }
  }
  if (str.length > 0) {
    return str.substring(0, str.length - 1)
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
  jUrlByObj(?ie=UTF-8&wd=asd)
  => {ie: UTF-8, wd: asd}
 */
export const jUrlByObj = function (params) {
  const obj = {}
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




