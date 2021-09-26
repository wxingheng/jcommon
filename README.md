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


###  血袋相关工具函数


###  数据持久化，缓存


###  浏览器相关


### 


###  防抖


###  用户设备相关（客户端系统）


### 


###  浏览器 DOM 相关


### 


###  时间相关


### 


###  数处理相


###  移动端相关


###  对象相关（Object处理）


###  Queue 队列


###  休眠


###  字符串处理相关


###  节流


###  url处理相关


###  校验相关


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
