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
export declare const dateInterval: (st: number, et: number) => string;
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
export declare const addZero: (v: string | number, size: number) => string;
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
export declare const dateFormat: (date: Date, formatStr: string) => string;
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
export declare const dateMonthDays: (str: string) => number;
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
export declare const timeFormat: (time: Date) => string;
/**
 * @description: 获取当前月份天数
 * @author: wuxh
 * @Date: 2021-08-21 22:43:58
 * @param {*} str YYYY-MM-DD mm:ss
 * @return {*} number
 * @example:
 */
export declare const getCountDays: (str: string | number | Date) => number;
