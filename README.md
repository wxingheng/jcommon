<!--
 * @Author: wuxh
 * @Date: 2020-05-07 10:09:44
 * @LastEditTime: 2023-05-19 22:29:44
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/README.md
 -->

# jcommon

JavaScript 常用纯函数工具库 （当前版本已在项目中使用，后续更新会向前兼容） 持续丰富中...

## 简介

**在日常工作中，会经常用到一些`日期格式化`，`url相关操作`，`浏览器类型判断`，`常用验证格式`等等函数，虽然大部分只需谷歌/百度一下就能找到，但是大多数都存在着一些问题，于是整理了网上和自己平常用到的工具类，方便大家以后的使用，提升开发效率。**

## 安装

### 使用


```bash
# 安装
$ npm install jcommon
```

```bash
# 引入

import { isObject, isArray } from 'jcommon'

or

const { isObject, isArray } = require('jcommon')

or

<script type="text/javascript" src="./dist/jcommon.js"></script>

<script>
    jcommon.isObject({})
</script>

```

## 项目特点

- [x] 完全的按需引用，我们只导出纯函数
- [x] 不同于传统 js 工具库导出一整个大模块（moment, utils, ...）
- [x] 支持 npm 安装方式
- [x] 支持 script 标签直接引入（考虑通过全局一个模块的方式，jcommon，避免全局命名空间污染）
- [x] TypeScript支持
- [x] dom
- [x] 增加单元测试
- [x] 根据 .d.ts 文件自动生成文档
- [ ] lint
- [x] typedoc
- [ ] 文档自动部署，Github page


## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com
## API 目录

###  数组方法 Array

- [doubleRanking](#doubleRanking)  处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
- [randomData](#randomData)  产生随机数据
- [arrByObj](#arrByObj)  数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
- [uniqueArray](#uniqueArray)  简单数组去重，Set 处理
- [difference](#difference)  数组交集
- [arrayCompare](#arrayCompare)  数组元素是否相同

###  血袋相关工具函数

- [formatRhBloodGroup](#formatRhBloodGroup)  转换Rh血型
- [isRhNegative](#isRhNegative)  是否阴性
- [isRhPositive](#isRhPositive)  是否阳性
- [sorterCallBack](#sorterCallBack)  sort []

###  浏览器相关

- [getBrowserInfo](#getBrowserInfo)  获取浏览器相关信息

###  数据持久化，缓存

- [removeStorage](#removeStorage)  删除
- [saveStorage](#saveStorage)  保存
- [getStorage](#getStorage)  获取
- [isSupportStorage](#isSupportStorage)  是否支持local

### 

- [getCookie](#getCookie)  获取cookie值

###  时间相关

- [dateInterval](#dateInterval)  获取两个时间的间隔
- [addZero](#addZero)  字符串补0，目前提供给dateFormat使用
- [dateFormat](#dateFormat)   时间的转换（目前支持 年，月，日，时，分，秒，星期）
- [convertDateToView = (
  date: string | Date | number,
  template = "YYYY-MM-DD HH:II:SS",
  defaultResult = ""
): string => {
  if (!!!date) return defaultResult;
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
export const dateMonthDays](#convertDateToView = (
  date: string | Date | number,
  template = "YYYY-MM-DD HH:II:SS",
  defaultResult = ""
): string => {
  if (!!!date) return defaultResult;
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
export const dateMonthDays)   时间的转换（目前支持 年，月，日，时，分，秒，星期）, 与dateFormat的区别是，这个方法可以传入时间戳
- [timeFormat](#timeFormat)   时间的转换 "YYYY-MM-DD HH:II:SS"
- [getCountDays](#getCountDays)   时间的转换 "YYYY-MM-DD"

###  防抖

- [debounce](#debounce)  debounce 防抖, 固定时间内持续触发，只执行最后一次

### 

- [decoratorNonenumerable](#decoratorNonenumerable)  decoratorNonenumerable

###  用户设备相关（客户端系统）

- [osInfo](#osInfo)  获取用户系统平台信息

###  浏览器 DOM 相关

- [download](#download)  下载一个链接文档
- [downloadFile](#downloadFile)  在浏览器中自定义下载一些内容
- [copyToBoar](#copyToBoar)  复制内容到剪贴板
- [dragScroll](#dragScroll)  拖拽滚动
- [getBase64](#getBase64)  获取图片的 base64
- [importJson](#importJson)  前端文件导入，JSON文件导入
- [exportJson](#exportJson) undefined

### 


### 

- [getFormData](#getFormData)  对象转化为FormData对象

###  数处理相

- [scopeRandom](#scopeRandom)  范围随机整数
- [cutNumber](#cutNumber)  保留到小数点以后n位

###  移动端相关

- [isQQ](#isQQ)  是否是QQ平台
- [isWX](#isWX)  是否是微信平台
- [operattelecom](#operattelecom)  获取手机运营商
- [isAndroidMobileDevice](#isAndroidMobileDevice)  是否是安卓设备
- [isAppleMobileDevice](#isAppleMobileDevice)  是否是苹果设备

###  对象相关（Object处理）

- [getV](#getV)  获取多级数据避免出错（超级好用）
- [cloneObj](#cloneObj)  深拷贝，克隆（只包含可遍历属性<常用>）
- [cloneJson](#cloneJson)  简单的深拷贝
- [mergeObj](#mergeObj)  深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
- [isEmptyObject](#isEmptyObject)  判断对象是否为空
- [cleanObject](#cleanObject)  cleanObject 去除对象中value为空(null,undefined,'')的属性
- [deepClone](#deepClone)  深克隆 deepClone
- [isEqual](#isEqual)  判断两个对象是否相等

###  暂时未归类的方法

- [oneClickToMoreClick](#oneClickToMoreClick)  单击事件转换为多击事件
- [moreClick](#moreClick)  单击事件转换为多击事件
- [randomColor](#randomColor)  产生一个随机颜色
- [scaleLinear](#scaleLinear)  比例计算
- [fetchToSlow](#fetchToSlow) undefined

###  Queue 队列


###  休眠

- [sleep](#sleep)  休眠多少毫秒

###  字符串处理相关

- [trim](#trim)  去除字符串空格, 默认去除前后空格 （常用）
- [getSexByIdNO](#getSexByIdNO)  身份证号码解析性别
- [getBirthdatByIdNo](#getBirthdatByIdNo)  身份证号码解析出生日期
- [hideIdNum](#hideIdNum)  隐藏身份证号码
- [uniqueId](#uniqueId)  随机数 + 时间戳
- [versionCount](#versionCount)  版本号累加
- [getExt](#getExt)  获取文件后缀名
- [uuid](#uuid)  生成随机字符串,第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
- [endWith](#endWith)  字符串判断结尾
- [similar](#similar)  计算两个字符串相似度
- [getStringLen](#getStringLen)  计算文本长度（中文算两个字符，英文算一个字符）

###  节流

- [throttle](#throttle)  节流 多次调用方法，按照一定的时间间隔执行

###  url处理相关

- [getUrlQuery](#getUrlQuery)  获取浏览器url中的一个参数
- [everyTrim](#everyTrim)  去除值类型为string的前后空格
- [formatQueryParam](#formatQueryParam)  格式化GET请求的请求头
- [urlByObj](#urlByObj)  处理url参数(window.location.search)转换为 {key: value}

###  校验相关

- [isUserId](#isUserId)  身份证号码校验（精准）
- [isType](#isType)  精准判断数据类型
- [isString](#isString)  判断String类型
- [isNumber](#isNumber)  判断Number类型
- [isBoolean](#isBoolean)  判断Boolean类型
- [isUndefined](#isUndefined)  判断Undefined类型
- [isNull](#isNull)  判断Null类型
- [isFunc](#isFunc)  判断Function类型
- [isDate](#isDate)  判断Date类型
- [isArray](#isArray)  判断Array类型
- [isReg](#isReg)  判断RegExp类型
- [isError](#isError)  判断Error类型
- [isObject](#isObject)  判断Object类型
- [isPhone](#isPhone)  手机号校验
- [isEmail](#isEmail)  校验是否为邮箱地址
- [isFalsy](#isFalsy)  判断 js是否是false， 0除外。

## API 说明

### doubleRanking
               
   处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:37:17
 * @param {arr} 需要处理的数组
 * @param {options} 额外参数
 * @return: {Array} 排序后的数组
 * ```
 * doubleRanking(
 *   [
 *     {education: '本科', age: 26},
 *     {education: '小学', age: 25},
 *     {education: '本科', age: 24},
 *     {education: '小学', age: 23}
 *   ],
 *   {
 *     filterRuleKey: 'education',
 *     rule: ['小学', '本科'],
 *     sortKey: 'age',
 *     sortOrder: 1
 *   }
 * )
 * => [
 *     {education: '小学', age: 24},
 *     {education: '小学', age: 26}
 *     {education: '本科', age: 23},
 *     {education: '本科', age: 25},
 *   ]
 * ```
```

### randomData
               
   产生随机数据
  
  ```javascript
  wxingheng
 * @Date: 2022-10-12 11:08:50
 * @param {number} num 数量
 * @param {Array} arr 每个元素对象的keys
 * @return {*}
  ```
  randomData(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
  ```
```

### arrByObj
               
   数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:51:49
 * @param {object} arr 需要作为转换后对象的key需要转换的数组
 * @param {string} key 需要作为转换后对象的key
 * @param {*} v 对象的value取值，默认是数组的每一个元素作为值
 * @return: Object
 ```
  const arr = arr = [{name: 111, value: 222},{name: 333, value:444}]
  arrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  arrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
 ```
```

### uniqueArray
               
   简单数组去重，Set 处理
  
  ```javascript
  wxingheng
 * @Date: 2022-10-12 11:16:32
 * @param {string} arr
 * @return {*}
  ```
  uniqueArray([1,1,1,1,1]) => [1]; uniqueArray([1,2,3,4,5]) => [1,2,3,4,5]; 
  ```
```

### difference
               
   数组交集
  
  ```javascript
  wxingheng
 * @Date: 2022-05-18 10:56:47
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {*} Array
 * ```
 * difference([2,3,4,5], [1,2,3,4]) => [5, 1] ;
 * difference([1,2,3,4], [2,3,4,5]) => [1, 5];
 * difference([1,2,3,4], [1,2,3,4]) => [];
 * difference([1,2,3,4], []) => [1, 2, 3, 4]
 * ```
```

### arrayCompare
               
   数组元素是否相同
  
  ```javascript
  wxingheng
 * @Date: 2022-05-18 10:56:04
 * @param {any} arr1
 * @param {any} arr2
 * @return {*}
```
 arrayCompare([2,3,4,5], [5,4,3,2]) => true ; 
 arrayCompare([2,3,4,5], [5,4,3,2,1]) => false;
 arrayCompare([2,3,4,5], []) => true;
 arrayCompare([], [1,2,3,4]) => false;
 arrayCompare([1,2,3,4], []) => true;
```
```

### formatRhBloodGroup
               
   转换Rh血型
  
  ```javascript
  wuxh
 * @Date: 2021-09-07 13:44:36
 * @param {*}
 * @return {*}
 * @example:  formatRhBloodGroup('**D**') => 阳性
 * formatRhBloodGroup('+') => 阳性
 *
```

### isRhNegative
               
   是否阴性
  
  ```javascript
  wuxh
 * @Date: 2022-01-17 23:57:31
 * @param {string} input
 * @return {*}
 * @example:
```

### isRhPositive
               
   是否阳性
  
  ```javascript
  wuxh
 * @Date: 2022-01-17 23:57:19
 * @param {string} input
 * @return {*}
 * @example:
```

### sorterCallBack
               
   sort []
  
  ```javascript
  wuxh
 * @Date: 2021-09-07 14:12:06
 * @param {string} key
 * @return {*}
 * @example:
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sorterCallBackString('name') => [{name: '333'}, {name: '666'}]
 * arr.sorterCallBackString('name', false) => [{name: '666'}, {name: '333'}]
```

### getBrowserInfo
               
   获取浏览器相关信息
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
```
  getBrowserInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
```
```

### removeStorage
               
   删除
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example: 
  removeStorage('test')
  => undefined
```

### saveStorage
               
   保存
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @param {value}
 * @param {isJson}
 * @return: undefined
 * @example: 
  saveStorage('test', '001')
  => undefined
```

### getStorage
               
   获取
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:00:37
 * @param {key}
 * @return: String
 * @example: 
  getStorage('test')
  => '001'
```

### isSupportStorage
               
   是否支持local
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:01:43
 * @param 
 * @return: Boolean
 * @example: 
  isSupportStorage()
  => true
```

### getCookie
               
   获取cookie值
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:28:06
 * @param {type} 
 * @return: string
 * @example: 
  getCookie('name') => 123
```

### dateInterval
               
   获取两个时间的间隔
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:04:39
 * @param {st}
 * @param {et}
 * @return: String
 * @example: 
  dateInterval(new Date().getTime(), 1589661011714)
  => 11天13小时46分钟21秒
```

### addZero
               
   字符串补0，目前提供给dateFormat使用
  
  ```javascript
  wuxh
 * @Date: 2020-05-11 14:01:20
 * @param {v} 需要处理的数据 String | Number
 * @param {size} 期望得到的总位数
 * @return: String
 * @example: 
  addZero(12, 1) => 12
  addZero(12, 2) => 12
  addZero(12, 3) => 012
```

### dateFormat
               
    时间的转换（目前支持 年，月，日，时，分，秒，星期）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:05:28
 * @param {date}
 * @param {formatStr}
 * @return: String
 * @example: 
  dateFormat(new Date(), '当前时间 YY-MM-DD HH:II:SS 星期W')
  => "当前时间 20-05-11 14:07:02 星期一"
```

### convertDateToView = (
  date: string | Date | number,
  template = "YYYY-MM-DD HH:II:SS",
  defaultResult = ""
): string => {
  if (!!!date) return defaultResult;
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
export const dateMonthDays
               
    时间的转换（目前支持 年，月，日，时，分，秒，星期）, 与dateFormat的区别是，这个方法可以传入时间戳
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 11:46:22
 * @return {date} 
 * @example:  convertDateToView(new Date(), '当前时间 YY-MM-DD HH:II:SS 星期W')
```

### timeFormat
               
    时间的转换 "YYYY-MM-DD HH:II:SS"
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 11:48:15
 * @param {string} date
 * @return {*}
 * @example: convertDateToStandard(new Date()) => "2021-09-30 11:48:15"
```

### getCountDays
               
    时间的转换 "YYYY-MM-DD"
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 11:49:14
 * @param {string} date
 * @return {*}
 * @example: convertDateToStandardDay(new Date()) => "2021-09-30"
```

### debounce
               
   debounce 防抖, 固定时间内持续触发，只执行最后一次
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 21:30:44
 * @param {*} Function 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 * @return {*} Function
 * @example: 
 * function onInput() {
                console.log('1111')
            }
            const debounceOnInput = debounce(onInput)
            document
                .getElementById('input')
                .addEventListener('input', debounceOnInput)
 *
```

### decoratorNonenumerable
               
   decoratorNonenumerable
  
  ```javascript
  wuxh
 * @Date: 2021-11-10 11:43:45
 * @param {*}
 * @return {*}
 * @example:
```

### osInfo
               
   获取用户系统平台信息
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
```
  osInfo()
  => {os: "mac", version: "10.15.3"}
```
```

### download
               
   下载一个链接文档
  
  ```javascript
  wuxh
 * @Date: 2021-09-01 23:27:00
 * @param {string} link
 * @param {string} name
 * @return {*}
 * @example:
 * download('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F04%2F20200804215427_fc3ff.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633102668&t=5f2cf4e9273be91527efb91ecd5cb6dd')
 * 下载后端返回的流
 *
```

### downloadFile
               
   在浏览器中自定义下载一些内容
  
  ```javascript
  wuxh
 * @Date: 2021-09-01 23:32:30
 * @param {string} name
 * @param {BlobPart} content
 * @return {*}
 * @example: 场景：我想下载一些DOM内容，我想下载一个JSON文件
 * 
 * downloadFile('1.txt','lalalallalalla')
   downloadFile('1.json',JSON.stringify({name:'hahahha'}))
```

### copyToBoar
               
   复制内容到剪贴板
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:22:03
 * @param {string} value
 * @return {*} boolean
 * @example: 
 copyToBoard('lalallala') => true // 如果复制成功返回true
```

### dragScroll
               
   拖拽滚动
  
  ```javascript
  wxingheng
 * @Date: 2022-07-15 18:16:15
 * @param {*} scrollDom
 * @return {*}
 * @example: 待增加惯性效果
```

### getBase64
               
   获取图片的 base64
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 10:53:33
 * @param {File} file
 * @return {*}
 * @example: getBase64(file).then(res => console.log(res))
```

### importJson
               
   前端文件导入，JSON文件导入
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 10:57:58
 * @param {*} Object
 * @return {*}
 * @example: importJson() => {name: 'wxh'}
```

### exportJson
               
  undefined
  
  ```javascript
  wxingheng
   * @Date: 2022-09-30 11:00:54
   * @param {any} data
   * @param {*} name
   * @return {*}
   * @example:
```

### getFormData
               
   对象转化为FormData对象
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:52:34
 * @param {object} object
 * @return {FormData}
 * @example: 
 let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
```

### scopeRandom
               
   范围随机整数
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example: 
  scopeRandom(1, 10)
  => 3
```

### cutNumber
               
   保留到小数点以后n位
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:54:36
 * @param {number} number
 * @param {*} no
 * @return {*} Number
 * @example: 
 cutNumber('3123.22312') => 3123.22
```

### isQQ
               
   是否是QQ平台
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  isQQ()
  => false
```

### isWX
               
   是否是微信平台
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  isWX()
  => false
```

### operattelecom
               
   获取手机运营商
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return: '移动' | '电信' | '联通' | '未知'
 * @example: 
  operattelecom('13419595634') => 移动
```

### isAndroidMobileDevice
               
   是否是安卓设备
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:31:04
 * @param {type} 
 * @return: boolean
 * @example: 
  isAndroidMobileDevice() => false
```

### isAppleMobileDevice
               
   是否是苹果设备
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:31:55
 * @param {type} 
 * @return: boolean
 * @example: 
  isAppleMobileDevice() => true
```

### getV
               
   获取多级数据避免出错（超级好用）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {defaultResult, ...any} args
 * @return: any
 * @example: 
  getV('', {name: {children: 123}}, 'name', 'children')
  => 123
```

### cloneObj
               
   深拷贝，克隆（只包含可遍历属性<常用>）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example: 
  clone({name: 123})
  => {name: 123}
```

### cloneJson
               
   简单的深拷贝
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:33:47
 * @param {any} obj
 * @return {any} obj
 * @example: 
 const person={name:'xiaoming',child:{name:'Jack'}}
 cloneJson(person) => {name:'xiaoming',child:{name:'Jack'}}
```

### mergeObj
               
   深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:15:30
 * @param {oldObj}
 * @param {newObj}
 * @param {keys} 强制覆盖属性的key组成的数组
 * @return: Object
 * @example:  
  mergeObj({name: 111}, {name:333, value: 222}, []) => {name: 111, value: 222}
  mergeObj({name: 111}, {name:333, value: 222}, ['name']) => {name: 333, value: 222}
```

### isEmptyObject
               
   判断对象是否为空
  
  ```javascript
  wuxh
 * @Date: 2021-08-21 23:08:42
 * @param {string} obj
 * @return {*} boolean
 * @example: isEmptyObject({}) => true
```

### cleanObject
               
   cleanObject 去除对象中value为空(null,undefined,'')的属性
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:07:34
 * @param {*} { [k: string]: any }
 * @return {*} { [k: string]: any }
 * @example: 
 cleanObject({
  name: '',
  pageSize: 10,
  page: 1
}) => {
  pageSize: 10,
  page: 1
}
```

### deepClone
               
   深克隆 deepClone
  
  ```javascript
  wxingheng
 * @Date: 2022-04-10 22:19:43
 * @param {any} value
 * @param {*} stack
 * @return {*}
 * @example: deepClone(obj) => new obj
```

### isEqual
               
   判断两个对象是否相等
  
  ```javascript
  wxingheng
 * @Date: 2022-05-13 16:35:33
 * @param {any} a
 * @param {any} b
 * @return {*}
 * @example: isEqual({a: 1}, {a: 1}) => true; isEqual({a: 1}, {a: 2}) => false; isEqual({a: 1}, {b: 1}) => false
```

### oneClickToMoreClick
               
   单击事件转换为多击事件
  
  ```javascript
  wxingheng
 * @Date: 2022-05-04 14:20:22
 * @param {*} wait
 * @param {array} events
 * @return {*}
 * @example: 
 *    // 连续点击一次触发，连续点击两次触发，连续点击三次触发
        var oneClickToMoreClickCallBack = jcommon.oneClickToMoreClick(300, () => {
            console.log(111)
        }, () => {
            console.log(222)
        }, ()=> {
            console.log(333)
        })
        dom.addEventListener('click', oneClickToMoreClickCallBack);
```

### moreClick
               
   单击事件转换为多击事件
  
  ```javascript
  wxingheng
 * @Date: 2022-08-09 14:03:34
 * @param {Function} fun 回调函数
 * @param {*} n 连续几次触发才触发回调函数
 * @param {*} wait 两次之间的间隔时间
 * @return {*}
 * @example:  const dobuleClick = moreClick(handleClick)
    // 连续点击三次触发
        var moreClickCallBack = jcommon.moreClick(() => {
            console.log("moreClickCallBack")
        }, 3)
        dom.addEventListener('click', moreClickCallBack);
```

### randomColor
               
   产生一个随机颜色
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 11:13:13
 * @return {*}
 * @example: randomColor() => "rgba(107, 35, 72, 1)";
```

### scaleLinear
               
   比例计算
  
  ```javascript
  wxingheng
 * @Date: 2022-09-30 11:13:27
 * @param {number} value 当前值
 * @param {number} source  当前值所在的区间
 * @param {number} target 目标区间
 * @param {any} toFixedLength 保留小数位数
 * @return {*}
 * @example:  scaleLinear(50, 100, 10, 2) => 5; scaleLinear(50, 100, 10, 0) => 5;
```
