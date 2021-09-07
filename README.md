<!--
 * @Author: wuxh
 * @Date: 2020-05-07 10:09:44
 * @LastEditTime: 2021-08-22 12:35:46
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/jcommon/pack/base.md
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
- [ ] dom 

## API 目录

###  数组方法 Array

- [doubleRanking](#doubleRanking)  处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
- [randomData](#randomData)  产生随机数据
- [arrByObj](#arrByObj)  数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
- [uniqueArray](#uniqueArray) undefined

###  浏览器相关

- [getBrowserInfo](#getBrowserInfo)  获取浏览器相关信息

###  血袋相关工具函数

- [formatRhBloodGroup](#formatRhBloodGroup)  转换Rh血型
- [sorterCallBack](#sorterCallBack)  sort []

### 

- [getCookie](#getCookie)  获取cookie值

###  数据持久化，缓存

- [removeStorage](#removeStorage)  删除
- [saveStorage](#saveStorage)  保存
- [getStorage](#getStorage)  获取
- [isSupportStorage](#isSupportStorage)  是否支持local

###  时间相关

- [dateInterval](#dateInterval)  获取两个时间的间隔
- [addZero](#addZero)  字符串补0，目前提供给dateFormat使用
- [dateFormat](#dateFormat)   时间的转换（目前支持 年，月，日，时，分，秒，星期）
- [dateMonthDays](#dateMonthDays)  获取当前月份的天数
- [timeFormat](#timeFormat)  时间个性化输出功能
- [getCountDays](#getCountDays)  获取当前月份天数

###  防抖

- [debounce](#debounce)  debounce 防抖, 固定时间内持续触发，只执行最后一次

###  用户设备相关（客户端系统）

- [osInfo](#osInfo)  获取用户系统平台信息

### 

- [getFormData](#getFormData)  对象转化为FormData对象

###  浏览器 DOM 相关

- [download](#download)  下载一个链接文档
- [downloadFile](#downloadFile)  在浏览器中自定义下载一些内容
- [copyToBoar](#copyToBoar)  复制内容到剪贴板

### 


###  移动端相关

- [isQQ](#isQQ)  是否是QQ平台
- [isWX](#isWX)  是否是微信平台
- [operattelecom](#operattelecom)  获取手机运营商
- [isAndroidMobileDevice](#isAndroidMobileDevice)  是否是安卓设备
- [isAppleMobileDevice](#isAppleMobileDevice)  是否是苹果设备

###  数处理相

- [scopeRandom](#scopeRandom)  范围随机整数
- [cutNumber](#cutNumber)  保留到小数点以后n位

###  对象相关（Object处理）

- [getV](#getV)  获取多级数据避免出错（超级好用）
- [cloneObj](#cloneObj)  深拷贝，克隆（只包含可遍历属性<常用>）
- [cloneJson](#cloneJson)  简单的深拷贝
- [mergeObj](#mergeObj)  深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
- [isEmptyObject](#isEmptyObject)  判断对象是否为空
- [cleanObject](#cleanObject)  cleanObject 去除对象中value为空(null,undefined,'')的属性

###  Queue 队列


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

## API 说明

### doubleRanking
               
   处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
  
  ```javascript
  wuxh 
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
```

### randomData
               
   产生随机数据
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:41:08
 * @param {num} 数量
 * @param {arr} 每个元素对象的keys
 * @return: {Array} 
 * @example: 
  randomData(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
```

### arrByObj
               
   数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:51:49
 * @param {arr} 需要转换的数组
 * @param {key} 需要作为转换后对象的key
 * @param {v} 对象的value取值，默认是数组的每一个元素作为值
 * @return: Object
 * @example: 
  const arr = arr = [{name: 111, value: 222},{name: 333, value:444}]
  arrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  arrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
```

### uniqueArray
               
  undefined
  
  ```javascript
  wuxh
  * @Date: 2021-09-02 22:41:08
  * @param {string} arr
  * @return {*}
  * @example: 
  uniqueArray([1,1,1,1,1]) => [1]
```

### formatRhBloodGroup
               
   转换Rh血型
  
  ```javascript
  wuxh
 * @Date: 2021-09-07 13:44:36
 * @param {*}
 * @return {*}
 * @example:  formatRhBloodGroup('**D**') => 阳性
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

### getBrowserInfo
               
   获取浏览器相关信息
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
  getBrowserInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
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

### dateMonthDays
               
   获取当前月份的天数
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:06:24
 * @param {str}
 * @return: Number
 * @example: 
  dateMonthDays('2020-05-06')
  => 31
```

### timeFormat
               
   时间个性化输出功能
  
  ```javascript
  wuxh
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
```

### getCountDays
               
   获取当前月份天数
  
  ```javascript
  wuxh
 * @Date: 2021-08-21 22:43:58
 * @param {*} str YYYY-MM-DD mm:ss
 * @return {*} number
 * @example:
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

### osInfo
               
   获取用户系统平台信息
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
  osInfo()
  => {os: "mac", version: "10.15.3"}
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

### sleep
               
   休眠多少毫秒
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 23:08:19
 * @param {number} milliseconds
 * @return {*}
 * @example: 
  fetchData = async () => {
    await sleep(1000)
  }
```

### trim
               
   去除字符串空格, 默认去除前后空格 （常用）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:43:52
 * @param {str} String
 * @param {global} Boolean
 * @return: String
 * @example: 
  trim('   1 1 1   ') => '1 1 1'
  trim('   1 1 1   ', true) => '111'
```

### getSexByIdNO
               
   身份证号码解析性别
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:16:28
 * @param {type} 
 * @return: 'FEMALE' ｜ 'MALE'
 * @example: 
   getSexByIdNO('421182199409274710') => MALE
```

### getBirthdatByIdNo
               
   身份证号码解析出生日期
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:17:50
 * @param {type} 
 * @return: string
 * @example: 
  getBirthdatByIdNo('421182199409274710') => '1994-09-27'
```

### hideIdNum
               
   隐藏身份证号码
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:19:26
 * @param {type} 
 * @return: string
 * @example: 
  hideIdNum('421182199409274710') => 4****************0
```

### uniqueId
               
   随机数 + 时间戳
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type} 
 * @return: string
 * @example: 
  uniqueId() => '1591667193048544'
```

### versionCount
               
   版本号累加
  
  ```javascript
  wuxh
 * @Date: 2021-08-24 11:19:07
 * @param {*} version : string
 * @return {*} string
 * @example: versionCount('0.0.1') => '0.0.2'
 * versionCount('0.2.9') => '0.3.0'
 * versionCount('0.2.9.1') => '0.2.9.2'
```

### getExt
               
   获取文件后缀名
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:17:57
 * @param {string} filename
 * @return {*}
 * @example: 
 getExt("1.mp4") => mp4
```

### uuid
               
   生成随机字符串,第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:29:02
 * @param {number} length
 * @param {string} chars
 * @return {string}
 * @example: 
 uuid() => 'ghijklmn'
```

### throttle
               
   节流 多次调用方法，按照一定的时间间隔执行
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 21:46:38
 * @param {*} func
 * @param {*} wait
 * @param {*} options: { leading: boolean; trailing: boolean }
 * @return {*} Function
 * @example: 
 *
leading，函数在每个等待时延的开始被调用，默认值为false
trailing，函数在每个等待时延的结束被调用，默认值是true
可以根据不同的值来设置不同的效果：
leading-false，trailing-true：默认情况，即在延时结束后才会调用函数
leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用
leading-true, trailing-false：只在延时开始时调用
```

### getUrlQuery
               
   获取浏览器url中的一个参数
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example: 
  getUrlQuery(age)
  => 25
```

### everyTrim
               
   去除值类型为string的前后空格
  
  ```javascript
  wuxh
 * @Date: 2021-08-21 22:11:23
 * @param {Array} data
 * @return {*}
 * @example: everyTrim({name: '  123  ', arr: [' 33 ']}) => {name: '123': arr: ['33']}
```

### formatQueryParam
               
   格式化GET请求的请求头
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example: 
  formatQueryParam({name: 1, value: 123})
  =>  "name=1&value=123"
```

### urlByObj
               
   处理url参数(window.location.search)转换为 {key: value}
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:48:36
 * @param {params}
 * @return: Object
 * @example: 
  urlByObj(?ie=UTF-8&wd=asd)
  => {ie: UTF-8, wd: asd}
```

### isUserId
               
   身份证号码校验（精准）
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:49:58
 * @param {e}
 * @return: String<msg> | Boolean
 * @example: 
  isUserId('421182199409274710') => ''
  isUserId('421182199409') => '身份证号码长度应该为18位'
```

### isType
               
   精准判断数据类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:51:50
 * @param {data} any
 * @param {type} type  'String' | 'Number' | 'Boolean' | 'Undefined' | 'Null' | 'Function' | 'Date' | 'Array' | 'RegExp' | 'Error' | 'Object'
 * @return: Boolean
 * @example: 
  isType(123, 'String') => false
  isType('123', 'String') => true
```

### isString
               
   判断String类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isString(123) => false
  isString('') => true
```

### isNumber
               
   判断Number类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNumber(123) => true
  isNumber('') => false
```

### isBoolean
               
   判断Boolean类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isBoolean(false) => true
  isBoolean('false') => false
```

### isUndefined
               
   判断Undefined类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isUndefined(undefined) => true
  isUndefined('undefined') => false
```

### isNull
               
   判断Null类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNull(null) => true
  isNull('null') => false
```

### isFunc
               
   判断Function类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isFunc(() => 123) => true
  isFunc(123) => false
```

### isDate
               
   判断Date类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isDate(() => new Date()) => false
  isDate(new Date()) => true
```

### isArray
               
   判断Array类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isArray([]) => true
  isArray(![]) => false
```

### isReg
               
   判断RegExp类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isReg(new RegExp()) => true
  isReg(![]) => false
```

### isError
               
   判断Error类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isError(new Error()) => true
  isError(![]) => false
```

### isObject
               
   判断Object类型
  
  ```javascript
  wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isObject({}) => true
  isObject(![]) => false
```

### isPhone
               
   手机号校验
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:21:15
 * @param {type} 
 * @return: boolean
 * @example: 
  isPhone('13419595634') => true
```

### isEmail
               
   校验是否为邮箱地址
  
  ```javascript
  wuxh
 * @Date: 2020-06-09 09:49:29
 * @param {type} 
 * @return: boolean
 * @example: 
  isEmail('wxingheng@outlook.com') => true
```

### isFalsy
               
   判断 js是否是false， 0除外。
  
  ```javascript
  wuxh
 * @Date: 2021-09-02 22:01:50
 * @param {any} value
 * @return {*} value === 0 ? false : !value
 * @example: 
 isFalsy('') => true
 isFalsy(0) => false
 isFalsy(null) => true
 isFalsy(undefined) => true
```

## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com
      