<!--
 * @Author: wuxh
 * @Date: 2020-05-07 10:09:44
 * @LastEditTime: 2020-05-08 09:25:19
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/pack/base.md
 -->

# jcommon

JavaScript 常用纯函数工具库 （当前版本已在项目中使用，后续更新会向前兼容） 持续丰富中...

## 简介

**在日常工作中，会经常用到一些`日期格式化`，`url相关操作`，`浏览器类型判断`，`常用验证格式`等等函数，虽然大部分只需谷歌/百度一下就能找到，但是大多数都存在着一些问题，于是整理了网上和自己平常用到的工具类，方便大家以后的使用，提升开发效率。**

## 安装

### NPM

在 jcommon 应用于大型项目时推荐使用 NPM 安装。NPM 能很好地和 webpack 模块打包器配合使用。`完全的按需引用`。

```bash
# 最新稳定版
$ npm install jcommon

# 比如判断数据类型是不是对象（所有的方法都是这样引用...）
import { isObject, isArray } from 'jcommon'
```

## 项目特点

- [x] 完全的按需引用，我们只导出纯函数
- [x] 不同于传统 js 工具库导出一整个大模块（moment, utils, ...）
- [x] 支持 npm 安装方式
- [ ] 支持 script 标签直接引入（考虑通过全局一个模块的方式，jcommon，避免全局命名空间污染）
- [ ] 持续丰富方法库
- [ ] 集成一些 node 的常用方法（完全的按需引入，可以不用担心库的大小）
- [ ] 对 TS 支持友好

## API 目录

###  数组方法 Array

- [doubleRanking](#doubleRanking)  处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
- [randomData](#randomData)  产生随机数据
- [arrByObj](#arrByObj)  数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
- [arrayToTreeData](#arrayToTreeData)  一维数组转多维树结构数据

###  数据持久化，缓存

- [removeStorage](#removeStorage)  删除
- [saveStorage](#saveStorage)  保存
- [getStorage](#getStorage)  获取
- [isSupportStorage](#isSupportStorage)  是否支持local

###  浏览器相关

- [getBrowserInfo](#getBrowserInfo)  获取浏览器相关信息

###  血液行业相关

- [calCheckChar](#calCheckChar)  根据序列号计算校验位

### 

- [getCookie](#getCookie)  获取cookie值

###  时间相关

- [dateInterval](#dateInterval)  获取两个时间的间隔
- [addZero](#addZero)  字符串补0，目前提供给dateFormat使用
- [dateFormat](#dateFormat)   时间的转换（目前支持 年，月，日，时，分，秒，星期）
- [dateMonthDays](#dateMonthDays)  获取当前月份的天数
- [timeFormat](#timeFormat)  时间个性化输出功能

###  用户设备相关（客户端系统）

- [osInfo](#osInfo)  获取用户系统平台信息

###  数处理相

- [scopeRandom](#scopeRandom)  范围随机整数

###  移动端相关

- [isQQ](#isQQ)  是否是QQ平台
- [isWX](#isWX)  是否是微信平台
- [operattelecom](#operattelecom)  获取手机运营商
- [isAndroidMobileDevice](#isAndroidMobileDevice)  是否是安卓设备
- [isAppleMobileDevice](#isAppleMobileDevice)  是否是苹果设备

###  字符串处理相关

- [trim](#trim)  去除字符串空格, 默认去除前后空格 （常用）
- [getSexByIdNO](#getSexByIdNO)  身份证号码解析性别
- [getBirthdatByIdNo](#getBirthdatByIdNo)  身份证号码解析出生日期
- [hideIdNum](#hideIdNum)  隐藏身份证号码
- [uniqueId](#uniqueId)  随机数时间戳
- [ageFormat](#ageFormat)  出生日期计算年龄
- [compileStr](#compileStr)  对字符串进行加密
- [uncompileStr](#uncompileStr)  字符串进行解密

###  对象相关（Object处理）

- [getV](#getV)  获取多级数据避免出错（超级好用）
- [clone](#clone)  对象克隆（只包含可遍历属性<常用>）
- [mergeObj](#mergeObj)  深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖

###  url处理相关

- [getUrlQuery](#getUrlQuery)  获取浏览器url中的一个参数(兼容browser和hash)
- [objByUrlStr](#objByUrlStr)  格式化GET请求的请求头
- [urlByObj](#urlByObj)  处理url参数(window.location.search)转换为 {key: value}

###  通用工具方法

- [debounce](#debounce)  函数防抖<短时间内多次触发同一事件，只执行最后一次>
- [throttle](#throttle)  函数节流<指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。>
- [promiseTo](#promiseTo)  await 的简单封装（避免重复的 tray catch ）

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

## API 说明

### calCheckChar
             
 根据序列号计算校验位

```javascript
wuxh 
 * @Date: 2020-05-06 11:37:17
 * @param {serialNo} 序列号
 * @return: {CHECK} 校验位
 * @example: 
      calCheckChar('0051117014765') ==> M
      calCheckChar('4401119000060') ==> E
      calCheckChar('4401119000010') ==> Y
```

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

### arrayToTreeData
             
 一维数组转多维树结构数据

```javascript
wuxh
 * @Date: 2020-06-22 17:54:54
 * @param {arr} 一维数组
 * @param {id} 根节点id
 * @return: Array
 * @example:
  const arr = [{id: 1, parentId: 2, name: 111}, {id: 3, parentId: 1, name: 222}]
  arrayToTreeData(arr, 2) => [{id: 1, parentId: 2, name: 111, children: [{id: 3, parentId: 1, name: 222}]}]
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

### getV
             
 获取多级数据避免出错（超级好用）

```javascript
wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {...any} args
 * @return: any
 * @example: 
  getV('', {name: {children: 123}}, 'name', 'children')
  => 123
```

### clone
             
 对象克隆（只包含可遍历属性<常用>）

```javascript
wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example: 
  clone({name: 123})
  => {name: 123}
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
             
 随机数时间戳

```javascript
wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type} 
 * @return: string
 * @example: 
  uniqueId() => '1591667193048544'
```

### ageFormat
             
 出生日期计算年龄

```javascript
wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type} 
 * @return: string
 * @example: 
  ageFormat('1994-09-27') => '25岁'
  ageFormat('2020-02-27') => '4个月'
  ageFormat('2020-06-02') => '15天'
```

### compileStr
             
 对字符串进行加密

```javascript
wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {code} 
 * @return: string
 * @example: 
  compileStr(123) => string
```

### uncompileStr
             
 字符串进行解密

```javascript
wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {code} 
 * @return: string
 * @example: 
  uncompileStr(123) => string
```

### getUrlQuery
             
 获取浏览器url中的一个参数(兼容browser和hash)

```javascript
wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example: 
  getUrlQuery(age)
  => 25
```

### objByUrlStr
             
 格式化GET请求的请求头

```javascript
wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example: 
  objByUrlStr({name: 1, value: 123})
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

### debounce
             
 函数防抖<短时间内多次触发同一事件，只执行最后一次>

```javascript
wuxh
 * @Date: 2020-05-06 13:46:28
 * @param 
 * {func<需要防抖的逻辑方法>, wait<等待时间>, immediate<boolean, 是否需要立即执行一次>}
 * @return: String
 * @example: 
  // 比如搜索框input需要做输入搜索防抖处理
  // 使用debounce方法产生一个防抖方法
  const search = debounce((value) => console.log, 1000, false)
  // 在你需要的地方进行绑定产生的search方法
  // 你的逻辑处理func部分将会按照你设置的防抖参数来执行
  onChange = {search}
```

### throttle
             
 函数节流<指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。>

```javascript
wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {func<需要防抖的逻辑方法>, wait<间隔时间>, type< 1 | 2 >}
 * @return: String
 * @example: 
  // 比如滚动事件需要做节流处理
  // 使用debounce方法产生一个防抖方法
  const scroll = throttle((value) => console.log, 1000, 1)
  // 在你需要的地方进行绑定产生的search方法
  // 你的逻辑处理func部分将会按照你设置的防抖参数来执行
  onScroll = {scroll}
```

### promiseTo
             
 await 的简单封装（避免重复的 tray catch ）

```javascript
wuxh
 * @Date: 2020-08-11 16:15:44
 * @param Promise
 * @return: Array
 * @example: 
  // await 捕获错误则可以这样写
  let [error, data] = await promiseTo(getUsersMonitor())
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

## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com
      