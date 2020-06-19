/*
 * @Author: wuxh
 * @Date: 2020-05-06 10:10:41
 * @LastEditTime: 2020-06-17 16:15:57
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
  trim('   1 1 1   ') => '1 1 1'
  trim('   1 1 1   ', true) => '111'
 */
export const trim = function (str, global) {
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
export const getSexByIdNO = function (IdNO) {
  if (IdNO.length == 18) {
    return IdNO.charAt(16) % 2 == 0 ? 'FEMALE' : 'MALE'
  } else if (IdNO.length == 15) {
    return IdNO.charAt(14) % 2 == 0 ? 'FEMALE' : 'MALE'
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
export const getBirthdatByIdNo = function (iIdNo) {
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
export const hideIdNum = function (str) {
  return `${String(str).slice(0, 1)}****************${String(str).slice(17)}`
}

/**
 * @description: 随机数时间戳
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
  return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
}


/**
 * @description: 出生日期计算年龄
 * @author: wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type} 
 * @return: string
 * @example: 
  ageFormat('1994-09-27') => '25岁'
  ageFormat('2020-02-27') => '4个月'
  ageFormat('2020-06-02') => '15天'
 */
export const ageFormat = function (str) {
  const birth = new Date(str);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  const day = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
  if (age === 0) {
    if (month === 0) {
      return day + '天';
    } else if (day >= 31) {
      return month + '个月';
    } else {
      return day + '天';
    }
  }
  if (age === 1) {
    if (month > 0) {
      return age + '岁';
    }
    if (month < 0 && month !== -11) {
      if (day < 0) {
        return month + 11 + '个月';
      } else {
        return month + 12 + '个月';
      }
    }
    if (month === 0) {
      if (day >= 0) {
        return age + '岁';
      } else {
        return month + 12 + '个月';
      }
    }
    if (month === -11) {
      if (day >= 0) {
        return month + 12 + '个月';
      } else {
        return day + 31 + '天';
      }
    }
  }

  if (age > 1) {
    if (month === 0) {
      if (day >= 0) {
        return age + '岁';
      } else {
        return age - 1 + '岁';
      }
    } else if (month > 0) {
      return age + '岁';
    } else if (month < 0) {
      return age - 1 + '岁';
    }
  }
};

undefined
