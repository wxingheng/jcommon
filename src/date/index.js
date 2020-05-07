/*
 * @Author: wuxh
 * @Date: 2020-05-04 21:24:53
 * @LastEditTime: 2020-05-06 21:26:31
 * @LastEditors: wuxh
 * @Description: 处理时间相关
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
 * @example: jDateInterval(new Date().getTime(), 1589661011714)
 * => 11天13小时46分钟21秒
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
 * @example: jDateFormat(new Date(), 'YYYY-MM')
 * => "2020-05"
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
 * @example: jDateMonthDays('2020-05-06')
 * => 31
 */

export const jDateMonthDays = str => {
  const curDate = str ? new Date(str) : new Date()
  const curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + 1)
  curDate.setDate(0)
  return curDate.getDate()
}
