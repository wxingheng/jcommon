/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2021-09-02 22:29:10
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
export const versionCount = function (version: string): string {
  return String(parseInt(version.replace(/\./g, '')) + 1)
    .padStart(version.split('.').length, '0')
    .split('')
    .join('.')
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
