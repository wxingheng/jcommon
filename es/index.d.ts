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
    filterRuleKey: string;
    rule: string[];
    sortKey: string;
    sortOrder: number;
}
export declare const doubleRanking: (arr: {
    [key: string]: any;
}[], options: DoubleRankingOption) => any[];
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
export declare const randomData: (num: number, arr: any[]) => {
    [key: string]: any;
}[];
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
export declare const arrByObj: (arr: {
    [key: string]: any;
}[], key: string, v?: string) => {
    [key: string]: any;
};
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
    name: string | RegExp;
    version: string;
}
export declare const getBrowserInfo: () => getBrowserInfoResult;
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
export declare const removeStorage: (key: any) => void;
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
export declare const saveStorage: (key: string, value: string) => void;
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
export declare const getStorage: (key: string) => string | null;
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
export declare const isSupportStorage: () => boolean;
/**
 * @description: 获取cookie值
 * @author: wuxh
 * @Date: 2020-06-09 09:28:06
 * @param {type}
 * @return: string
 * @example:
  getCookie('name') => 123
 */
export declare const getCookie: (name: string) => string | null;
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
    os: string | RegExp;
    version: string;
}
export declare const osInfo: (e: string) => osInfoResult;
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
export declare const scopeRandom: (str: number, end: number) => number;
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
export declare const isQQ: () => boolean;
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
export declare const isWX: () => boolean;
/**
 * @description: 获取手机运营商
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return: '移动' | '电信' | '联通' | '未知'
 * @example:
  operattelecom('13419595634') => 移动
 */
export declare const operattelecom: (e: string) => string | false;
/**
 * @description: 是否是安卓设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:04
 * @param {type}
 * @return: boolean
 * @example:
  isAndroidMobileDevice() => false
 */
export declare const isAndroidMobileDevice: () => boolean;
/**
 * @description: 是否是苹果设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:55
 * @param {type}
 * @return: boolean
 * @example:
  isAppleMobileDevice() => true
 */
export declare const isAppleMobileDevice: () => boolean;
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
export declare function getV<T>(defaultResult: T, ...args: any): any;
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
export declare const cloneObj: (obj: any) => any;
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
export declare const mergeObj: (oldObj: {
    [x: string]: any;
}, newObj: {
    [x: string]: any;
}, keys: string | string[]) => {
    [x: string]: any;
};
/**
 * @description: 判断对象是否为空
 * @author: wuxh
 * @Date: 2021-08-21 23:08:42
 * @param {string} obj
 * @return {*} boolean
 * @example: isEmptyObject({}) => true
 */
export declare const isEmptyObject: (obj: any) => boolean;
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
export declare const trim: (str: string, global?: boolean) => string;
/**
 * @description: 身份证号码解析性别
 * @author: wuxh
 * @Date: 2020-06-09 09:16:28
 * @param {type}
 * @return: 'FEMALE' ｜ 'MALE'
 * @example:
   getSexByIdNO('421182199409274710') => MALE
 */
export declare const getSexByIdNO: (IdNO: string) => 'FEMALE' | 'MALE' | '';
/**
 * @description: 身份证号码解析出生日期
 * @author: wuxh
 * @Date: 2020-06-09 09:17:50
 * @param {type}
 * @return: string
 * @example:
  getBirthdatByIdNo('421182199409274710') => '1994-09-27'
 */
export declare const getBirthdatByIdNo: (iIdNo: string) => string;
/**
 * @description: 隐藏身份证号码
 * @author: wuxh
 * @Date: 2020-06-09 09:19:26
 * @param {type}
 * @return: string
 * @example:
  hideIdNum('421182199409274710') => 4****************0
 */
export declare const hideIdNum: (str: string) => string;
/**
 * @description: 随机数 + 时间戳
 * @author: wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type}
 * @return: string
 * @example:
  uniqueId() => '1591667193048544'
 */
export declare const uniqueId: () => string;
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
export declare const getUrlQuery: (name: string) => string;
/**
 * @description: 去除值类型为string的前后空格
 * @author: wuxh
 * @Date: 2021-08-21 22:11:23
 * @param {Array} data
 * @return {*}
 * @example: everyTrim({name: '  123  ', arr: [' 33 ']}) => {name: '123': arr: ['33']}
 */
export declare const everyTrim: (data: Array<any> | Object) => any;
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
export declare const formatQueryParam: (obj: {
    [key: string]: any;
}) => string;
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
export declare const urlByObj: (params: string) => {
    [key: string]: string;
};
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
export declare const isUserId: (e: string) => "" | "身份证号码不能为空" | "身份证号码长度应该为18位" | "身份证格式错误" | "身份证生日无效。" | "身份证生日不在有效范围" | "身份证月份无效" | "身份证日期无效" | "身份证地区编码错误" | "不是合法的身份证号码";
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
export declare const isType: (data: any, type: string) => boolean;
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
export declare const isString: (data: any) => boolean;
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
export declare const isNumber: (data: any) => boolean;
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
export declare const isBoolean: (data: any) => boolean;
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
export declare const isUndefined: (data: any) => boolean;
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
export declare const isNull: (data: string) => boolean;
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
export declare const isFunc: (data: any) => boolean;
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
export declare const isDate: (data: any) => boolean;
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
export declare const isArray: (data: any) => boolean;
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
export declare const isReg: (data: any) => boolean;
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
export declare const isError: (data: any) => boolean;
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
export declare const isObject: (data: any) => boolean;
/**
 * @description: 手机号校验
 * @author: wuxh
 * @Date: 2020-06-09 09:21:15
 * @param {type}
 * @return: boolean
 * @example:
  isPhone('13419595634') => true
 */
export declare const isPhone: (phone: string) => boolean;
/**
 * @description: 校验是否为邮箱地址
 * @author: wuxh
 * @Date: 2020-06-09 09:49:29
 * @param {type}
 * @return: boolean
 * @example:
  isEmail('wxingheng@outlook.com') => true
 */
export declare const isEmail: (str: string) => boolean;
export {};
