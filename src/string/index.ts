/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2022-07-25 18:19:41
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
  var result = ''
  for (var i = length; i > 0; --i)
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
export const endWith = function(str: string, endStr: string):boolean {
  var d = str.length - endStr.length
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
 export const similar = function(s: string, t: string, f = 2): number {
  if (!s || !t) {
    return 0;
  }
  if (s === t) {
    return 100;
  }
  var l = s.length > t.length ? s.length : t.length;
  var n = s.length;
  var m = t.length;
  var d: any = [];
  var min = function (a: number, b: number, c: string | number) {
    return a < b ? (a < c ? a : c) : b < c ? b : c;
  };
  let i: number, j: number, si: any, tj: any, cost: number;
  if (n === 0) return m;
  if (m === 0) return n;
  for (i = 0; i <= n; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (j = 0; j <= m; j++) {
    d[0][j] = j;
  }
  for (i = 1; i <= n; i++) {
    si = s.charAt(i - 1);
    for (j = 1; j <= m; j++) {
      tj = t.charAt(j - 1);
      if (si === tj) {
        cost = 0;
      } else {
        cost = 1;
      }
      d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }
  let res = (1 - d[n][m] / l) * 100;

  return Number(res.toFixed(f));
};
