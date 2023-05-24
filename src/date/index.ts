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
