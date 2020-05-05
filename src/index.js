/** --------------------数组方法----------------------------- */

/**
  * 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
  * @param {*} arr 需要处理的数组
  * @param {*} options 额外参数
      
    jArrDoubleRanking(
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

    result :
      [
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




/** --------------------浏览器方法----------------------------- */

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




/** --------------------本地缓存----------------------------- */

export const jCaStorage = {
  removeStorage: function (key) {
    window.localStorage.removeItem(key)
  },
  saveStorage: function (key, value, isJson) {
    try {
      window.localStorage.setItem(key, isJson ? JSON.stringify(value) : value)
    } catch (e) {
      console.error(e)
    }
  },
  getStorage: function (key) {
    return window.localStorage.getItem(key)
  },
  isSupportStorage: function () {
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
}




/** --------------------时间方法----------------------------- */

function addZero (v, size) {
  for (let i = 0, len = size - (v + '').length; i < len; i++) {
    v = '0' + v
  }
  return v + ''
}

/**
 * 获取两个时间的间隔
 * @param {*} st
 * @param {*} et
 * jDateInterval(new Date().getTime(), 1589661011714)
 * 11天13小时46分钟21秒
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
 * 时间戳的转换（自定义格式）
 * @param {*} date
 * @param {*} formatStr
 * jDateFormat(new Date(), 'YYYY-MM')
 *  "2020-05"
 */
export const jDateFormat = function (date, formatStr) {
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




/** --------------------用户设备相关----------------------------- */


/**
 * 获取用户系统平台信息
 * @param {*} e 
 */
export const jOsInfo = function (e) {
  e = e || navigator.userAgent
  for (
    const t = {
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
      o = 0;
    o < r.length;
    o++
  ) {
    const i = r[o],
      a = e.match(i[1])
    if (a) {
      ;(t.os = i[0]), (t.version = (a[1] || '').replace(/_/g, '.'))
      break
    }
  }
  return t
}




/** --------------------模版----------------------------- */

/**
 * 是否是QQ平台
 */
export const jMobIsQQ = function () {
  if (/qq\/([\d\.]+)*/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * 是否是微信平台
 */
export const jMobIsWX = function () {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * 获取手机运营商
 * 
 */
export const jMobOperator = function(){

}





/** --------------------对象方法----------------------------- */

/**
 *
 */
export const jObjDoubleRanking = function () {}




/** --------------------模版----------------------------- */


export const jTempFunc = function(){
    console.log('模版文件')
}



/** --------------------url处理相关----------------------------- */

/**
 * 获取url中的一个参数
 * @param {*} name
 * jUrlGetQuery('ie')
 * 'utf-8'
 */
export const jUrlGetQuery = function (name) {
  const u = arguments[1] || window.location.search,
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
  return r != null ? r[2] : ''
}




/** --------------------校验相关----------------------------- */

/**
 * 身份证号码校验
 * @param {*} e
 * jValUserId('421182199409274710')
 *  ''
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




