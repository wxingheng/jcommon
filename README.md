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

# 所有的方法都是这样引用
import { jBroGetInfo } from 'jcommon'
```

## 项目特点

- [x] 完全的按需引用，我们只导出纯函数
- [x] 不同于传统js工具库导出一整个大模块（moment, utils, ...）
- [x] 支持npm安装方式
- [ ] 支持script标签直接引入（考虑通过全局一个模块的方式，jcommon,已避免全局命名空间污染）
- [ ] 持续丰富方法库
- [ ] 集成一些node的常用方法（完全的按需引入，可以不用担心库的大小）
- [ ] 对TS支持友好

## API 目录

### 浏览器

- [jBroGetInfo](#jBroGetInfo) 获取浏览器信息

### 数组

- [jArrDoubleRanking](#jArrDoubleRanking) 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）

### 日期

- [jDateFormat](#jDateFormat) 时间戳的转换（自定义格式）
- [jDateInterval](#jDateInterval) 获取两个时间的间隔的天、小时、分钟和秒

## API 说明

### jBroGetInfo

获取浏览器信息

```javascript
jBroGetInfo()
//{name: "Chrome", version: "76.0.3809.100"}
```

### jArrDoubleRanking

数组处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）去重

```javascript
jArrDoubleRanking(
  [
    { education: '本科', age: 26 },
    { education: '小学', age: 25 },
    { education: '本科', age: 24 },
    { education: '小学', age: 23 }
  ],
  {
    filterRuleKey: 'education',
    rule: ['小学', '本科'],
    sortKey: 'age',
    sortOrder: 1
  }
)
// => [
//      {education: '小学', age: 24},
//      {education: '小学', age: 26}
//      {education: '本科', age: 23},
//      {education: '本科', age: 25},
//    ]
```

### jDateFormat

时间戳的转换（自定义格式）

> 年、月、日、时、分、秒

```javascript
const date = jDateFormat(new Date(1533686888 * 1000), 'YYYY-MM-DD HH:ii:ss')
console.log(date)
// 2019-07-09 19:44:01
```

### jDateInterval

获取两个时间的间隔，返回间隔的天、小时、分钟和秒。 注意：_结束时间要大于开始时间否则返回空_

```javascript
jDateInterval('开始时间', '结束时间')
//例：
jDateInterval(1567562605000, 1567649014000)
//1天0小时0分钟9秒
```


## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com