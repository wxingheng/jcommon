<!--
 * @Author: wuxh
 * @Date: 2020-05-07 10:09:44
 * @LastEditTime: 2020-05-07 22:48:06
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

# 判断数据类型是不是对象（所有的方法都是这样引用）
import { jValIsObject } from 'jcommon'
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

- [jArrDoubleRanking](#jArrDoubleRanking)  处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
- [jArrRandomDate](#jArrRandomDate)  产生随机数据
- [jArrByObj](#jArrByObj)  数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）

###  浏览器相关

- [jBroGetInfo](#jBroGetInfo)  获取浏览器相关信息

###  用户设备相关（客户端系统）

- [jOsInfo](#jOsInfo)  获取用户系统平台信息

###  时间相关

- [jDateInterval](#jDateInterval)  获取两个时间的间隔
- [jDateFormat](#jDateFormat)   时间戳的转换（自定义格式）
- [jDateMonthDays](#jDateMonthDays)  获取当前月份的天数

###  数据持久化，缓存

- [jCaRemoveStorage](#jCaRemoveStorage)  删除
- [jCaSaveStorage](#jCaSaveStorage)  保存
- [jCaGetStorage](#jCaGetStorage)  获取
- [jCaIsStorage](#jCaIsStorage)  是否支持local

###  数处理相

- [jMathRandom](#jMathRandom)  范围随机整数

###  移动端相关

- [jMobIsQQ](#jMobIsQQ)  是否是QQ平台
- [jMobIsWX](#jMobIsWX)  是否是微信平台
- [jMobOperator](#jMobOperator)  获取手机运营商 (开发中)

###  对象相关（Object处理）

- [jObjGetV](#jObjGetV)  获取多级数据避免出错（超级好用）
- [jObjClone](#jObjClone)  对象克隆（只包含可遍历属性<常用>）
- [jObjMerge](#jObjMerge)  深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖

###  字符串处理相关

- [jStrTrim](#jStrTrim)  去除字符串空格, 默认去除前后空格 （常用）

###  url处理相关

- [jUrlGetQuery](#jUrlGetQuery)  获取浏览器url中的一个参数
- [jUrlObjByStr](#jUrlObjByStr)  格式化GET请求的请求头
- [jUrlByObj](#jUrlByObj)  处理url参数(window.location.search)转换为 {key: value}

###  校验相关

- [jValUserId](#jValUserId)  身份证号码校验（精准）
- [jValType](#jValType)  精准判断数据类型
- [jValIsString](#jValIsString)  判断String类型
- [jValIsNumber](#jValIsNumber)  判断Number类型
- [jValIsBoolean](#jValIsBoolean)  判断Boolean类型
- [jValIsUndefined](#jValIsUndefined)  判断Undefined类型
- [jValIsNull](#jValIsNull)  判断Null类型
- [jValIsFunc](#jValIsFunc)  判断Function类型
- [jValIsDate](#jValIsDate)  判断Date类型
- [jValIsArray](#jValIsArray)  判断Array类型
- [jValIsReg](#jValIsReg)  判断RegExp类型
- [jValIsError](#jValIsError)  判断Error类型
- [jValIsObject](#jValIsObject)  判断Object类型

## API 说明

### jArrDoubleRanking
             
 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）

```javascript
wuxh 
 * @Date: 2020-05-06 11:37:17
 * @param {arr} 需要处理的数组
 * @param {options} 额外参数
 * @return: {Array} [排序后的数组]
 * @example: 
   ArrDoubleRanking(
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

### jArrRandomDate
             
 产生随机数据

```javascript
wuxh
 * @Date: 2020-05-06 11:41:08
 * @param {num} 数量
 * @param {arr} 每个元素对象的keys
 * @return: {Array} 
 * @example: 
  jArrRandomDate(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
```

### jArrByObj
             
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
  jArrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  jArrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
```

### jCaRemoveStorage
             
 删除

```javascript
wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example: 
  jCaStorage().removeStorage('test')
  => undefined
```

### jCaSaveStorage
             
 保存

```javascript
wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @param {value}
 * @param {isJson}
 * @return: undefined
 * @example: 
  jCaStorage().saveStorage('test', '001')
  => undefined
```

### jCaGetStorage
             
 获取

```javascript
wuxh
 * @Date: 2020-05-06 12:00:37
 * @param {key}
 * @return: String
 * @example: 
  jCaStorage().getStorage('test')
  => '001'
```

### jCaIsStorage
             
 是否支持local

```javascript
wuxh
 * @Date: 2020-05-06 12:01:43
 * @param 
 * @return: Boolean
 * @example: 
  jCaStorage().isSupportStorage()
  => true
```

### jBroGetInfo
             
 获取浏览器相关信息

```javascript
wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {} 
 * @return: Object
 * @example: 
  jBroGetInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
```

### jDateInterval
             
 获取两个时间的间隔

```javascript
wuxh
 * @Date: 2020-05-06 12:04:39
 * @param {st}
 * @param {et}
 * @return: String
 * @example: 
  jDateInterval(new Date().getTime(), 1589661011714)
  => 11天13小时46分钟21秒
```

### jDateFormat
             
  时间戳的转换（自定义格式）

```javascript
wuxh
 * @Date: 2020-05-06 12:05:28
 * @param {date}
 * @param {formatStr}
 * @return: String
 * @example: 
  jDateFormat(new Date(), 'YYYY-MM')
  => "2020-05"
```

### jDateMonthDays
             
 获取当前月份的天数

```javascript
wuxh
 * @Date: 2020-05-06 12:06:24
 * @param {str}
 * @return: Number
 * @example: 
  jDateMonthDays('2020-05-06')
  => 31
```

### jOsInfo
             
 获取用户系统平台信息

```javascript
wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example: 
  jOsInfo()
  => {os: "mac", version: "10.15.3"}
```

### jMathRandom
             
 范围随机整数

```javascript
wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example: 
  jMathRandom(1, 10)
  => 3
```

### jMobIsQQ
             
 是否是QQ平台

```javascript
wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  jMobIsQQ()
  => false
```

### jMobIsWX
             
 是否是微信平台

```javascript
wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example: 
  jMobIsWX()
  => false
```

### jMobOperator
             
 获取手机运营商 (开发中)

```javascript
wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return:
 * @example: 
  jMobOperator()
  => 移动
```

### jObjGetV
             
 获取多级数据避免出错（超级好用）

```javascript
wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {...any} args
 * @return: any
 * @example: 
  getV({name: {children: 123}}, 'name', 'children')
  => 123
```

### jObjClone
             
 对象克隆（只包含可遍历属性<常用>）

```javascript
wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example: 
  jObjClone({name: 123})
  => {name: 123}
```

### jObjMerge
             
 深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖

```javascript
wuxh
 * @Date: 2020-05-06 12:15:30
 * @param {oldObj}
 * @param {newObj}
 * @param {keys} 强制覆盖属性的key组成的数组
 * @return: Object
 * @example:  
  jObjMerge({name: 111}, {name:333, value: 222}, []) => {name: 111, value: 222}
  jObjMerge({name: 111}, {name:333, value: 222}, ['name']) => {name: 333, value: 222}
```

### jStrTrim
             
 去除字符串空格, 默认去除前后空格 （常用）

```javascript
wuxh
 * @Date: 2020-05-06 13:43:52
 * @param {str} String
 * @param {global} Boolean
 * @return: String
 * @example: 
  jStrTrim('   1 1 1   ') => '1 1 1'
  jStrTrim('   1 1 1   ', true) => '111'
```

### jUrlGetQuery
             
 获取浏览器url中的一个参数

```javascript
wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example: 
  jUrlGetQuery(age)
  => 25
```

### jUrlObjByStr
             
 格式化GET请求的请求头

```javascript
wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example: 
  jObjToQuery({name: 1, value: 123})
  =>  "name=1&value=123"
```

### jUrlByObj
             
 处理url参数(window.location.search)转换为 {key: value}

```javascript
wuxh
 * @Date: 2020-05-06 13:48:36
 * @param {params}
 * @return: Object
 * @example: 
  jUrlByObj(?ie=UTF-8&wd=asd)
  => {ie: UTF-8, wd: asd}
```

### jValUserId
             
 身份证号码校验（精准）

```javascript
wuxh
 * @Date: 2020-05-06 13:49:58
 * @param {e}
 * @return: String<msg> | Boolean
 * @example: 
  jValUserId('421182199409274710') => ''
  jValUserId('421182199409') => '身份证号码长度应该为18位'
```

### jValType
             
 精准判断数据类型

```javascript
wuxh
 * @Date: 2020-05-06 13:51:50
 * @param {data} any
 * @param {type} type  'String' | 'Number' | 'Boolean' | 'Undefined' | 'Null' | 'Function' | 'Date' | 'Array' | 'RegExp' | 'Error' | 'Object'
 * @return: Boolean
 * @example: 
  jValType(123, 'String') => false
  jValType('123', 'String') => true
```

### jValIsString
             
 判断String类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsString(123) => false
  jValIsString('') => true
```

### jValIsNumber
             
 判断Number类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsString(123) => true
  jValIsString('') => false
```

### jValIsBoolean
             
 判断Boolean类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsBoolean(false) => true
  jValIsBoolean('false') => false
```

### jValIsUndefined
             
 判断Undefined类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsUndefined(undefined) => true
  jValIsUndefined('undefined') => false
```

### jValIsNull
             
 判断Null类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsNull(null) => true
  jValIsNull('null') => false
```

### jValIsFunc
             
 判断Function类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsFunc(() => 123) => true
  jValIsFunc(123) => false
```

### jValIsDate
             
 判断Date类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsDate(() => new Date()) => false
  jValIsDate(new Date()) => true
```

### jValIsArray
             
 判断Array类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsDate([]) => true
  jValIsDate(![]) => false
```

### jValIsReg
             
 判断RegExp类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsReg(new RegExp()) => true
  jValIsReg(![]) => false
```

### jValIsError
             
 判断Error类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsError(new Error()) => true
  jValIsError(![]) => false
```

### jValIsObject
             
 判断Object类型

```javascript
wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  jValIsError({}) => true
  jValIsError(![]) => false
```

## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com
      