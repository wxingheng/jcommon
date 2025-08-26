jcommon文档库 / [Exports](https://wxingheng.github.io/jcommon)

<!--
 * @Author: wuxh
 * @Date: 2020-05-07 10:09:44
 * @LastEditTime: 2023-05-19 22:30:58
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/pack/base.md
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




[jcommon文档库 - v1.9.40](README.md) / Exports

# jcommon文档库 - v1.9.40

## Table of contents

### Classes

- [EventBus](classes/EventBus.md)
- [Queue](classes/Queue.md)
- [Typewriter](classes/Typewriter.md)

### Array Type Aliases

- [DoubleRankingOption](modules.md#doublerankingoption)

### Other Type Aliases

- [getBrowserInfoResult](modules.md#getbrowserinforesult)
- [osInfoResult](modules.md#osinforesult)

### Variables

- [globalCache](modules.md#globalcache)

### Array
@description:
@author: wxingheng
@Date: 2022-09-30 11:45:04 Functions

- [sortCallBackTime](modules.md#sortcallbacktime)

### Array
@description:  reduce方法，用于数组对象的求和
@author: wxingheng
@Date: 2022-09-30 11:51:39 Functions

- [reduceCallBackNumber](modules.md#reducecallbacknumber)

### Array
@description:  数组排序的回调函数，用于sort方法，按照对象的某个属性进行中文排序
@author: wxingheng
@Date: 2022-09-30 11:43:11 Functions

- [sortCallBackChinese](modules.md#sortcallbackchinese)

### Array
@description: 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
@author: wuxh
@Date: 2020-05-06 11:37:17 Functions

- [doubleRanking](modules.md#doubleranking)

### Array
@description: 数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
@author: wuxh
@Date: 2020-05-06 11:51:49 Functions

- [arrByObj](modules.md#arrbyobj)

### Array
@description: 数组交集
@author: wxingheng
@Date: 2022-05-18 10:56:47 Functions

- [difference](modules.md#difference)

### Array
@description: 数组元素是否相同
@author: wxingheng
@Date: 2022-05-18 10:56:04 Functions

- [arrayCompare](modules.md#arraycompare)

### Array
@description: 简单数组去重，Set 处理
@author: wxingheng
@Date: 2022-10-12 11:16:32 Functions

- [uniqueArray](modules.md#uniquearray)

### Array 
@description: 产生随机数据
@author: wxingheng
@Date: 2022-10-12 11:08:50 Functions

- [randomData](modules.md#randomdata)

### Other Functions

- [addZero](modules.md#addzero)
- [cleanObject](modules.md#cleanobject)
- [cloneJson](modules.md#clonejson)
- [cloneObj](modules.md#cloneobj)
- [convertDataToTree](modules.md#convertdatatotree)
- [convertDateToStandard](modules.md#convertdatetostandard)
- [convertDateToStandardDay](modules.md#convertdatetostandardday)
- [convertDateToStandardHours](modules.md#convertdatetostandardhours)
- [convertDateToView](modules.md#convertdatetoview)
- [convertTreeToList](modules.md#converttreetolist)
- [copyToBoar](modules.md#copytoboar)
- [cutNumber](modules.md#cutnumber)
- [dateFormat](modules.md#dateformat)
- [dateInterval](modules.md#dateinterval)
- [dateMonthDays](modules.md#datemonthdays)
- [debounce](modules.md#debounce)
- [deepClone](modules.md#deepclone)
- [download](modules.md#download)
- [downloadFile](modules.md#downloadfile)
- [dragScroll](modules.md#dragscroll)
- [endWith](modules.md#endwith)
- [everyTrim](modules.md#everytrim)
- [exportJson](modules.md#exportjson)
- [fetchToSlow](modules.md#fetchtoslow)
- [formatQueryParam](modules.md#formatqueryparam)
- [formatRhBloodGroup](modules.md#formatrhbloodgroup)
- [getBase64](modules.md#getbase64)
- [getBirthdatByIdNo](modules.md#getbirthdatbyidno)
- [getBrowserInfo](modules.md#getbrowserinfo)
- [getCookie](modules.md#getcookie)
- [getCountDays](modules.md#getcountdays)
- [getExt](modules.md#getext)
- [getFormData](modules.md#getformdata)
- [getSexByIdNO](modules.md#getsexbyidno)
- [getStorage](modules.md#getstorage)
- [getStringLen](modules.md#getstringlen)
- [getUrlQuery](modules.md#geturlquery)
- [getV](modules.md#getv)
- [groupBy](modules.md#groupby)
- [hideIdNum](modules.md#hideidnum)
- [importJson](modules.md#importjson)
- [isAndroidMobileDevice](modules.md#isandroidmobiledevice)
- [isAppleMobileDevice](modules.md#isapplemobiledevice)
- [isArray](modules.md#isarray)
- [isBoolean](modules.md#isboolean)
- [isDate](modules.md#isdate)
- [isEmail](modules.md#isemail)
- [isEmptyObject](modules.md#isemptyobject)
- [isEqual](modules.md#isequal)
- [isError](modules.md#iserror)
- [isFalsy](modules.md#isfalsy)
- [isFunc](modules.md#isfunc)
- [isNull](modules.md#isnull)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isPhone](modules.md#isphone)
- [isQQ](modules.md#isqq)
- [isReg](modules.md#isreg)
- [isRhNegative](modules.md#isrhnegative)
- [isRhPositive](modules.md#isrhpositive)
- [isString](modules.md#isstring)
- [isSupportStorage](modules.md#issupportstorage)
- [isType](modules.md#istype)
- [isUndefined](modules.md#isundefined)
- [isUserId](modules.md#isuserid)
- [isVoid](modules.md#isvoid)
- [isWX](modules.md#iswx)
- [mergeObj](modules.md#mergeobj)
- [moreClick](modules.md#moreclick)
- [oneClickToMoreClick](modules.md#oneclicktomoreclick)
- [operattelecom](modules.md#operattelecom)
- [osInfo](modules.md#osinfo)
- [processStreamResponse](modules.md#processstreamresponse)
- [randomColor](modules.md#randomcolor)
- [removeStorage](modules.md#removestorage)
- [saveStorage](modules.md#savestorage)
- [scaleLinear](modules.md#scalelinear)
- [scopeRandom](modules.md#scoperandom)
- [similar](modules.md#similar)
- [sleep](modules.md#sleep)
- [sorterCallBack](modules.md#sortercallback)
- [throttle](modules.md#throttle)
- [timeFormat](modules.md#timeformat)
- [trim](modules.md#trim)
- [uniqueId](modules.md#uniqueid)
- [urlByObj](modules.md#urlbyobj)
- [uuid](modules.md#uuid)
- [versionCount](modules.md#versioncount)

## Array Type Aliases

### DoubleRankingOption

Ƭ **DoubleRankingOption**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterRuleKey?` | `string` | 一级过滤和排序的key |
| `rule?` | `string`[] | 一级排序规则 |
| `sortKey?` | `string` | 二级正常排序的key |
| `sortOrder?` | `number` | - |

___

## Other Type Aliases

### getBrowserInfoResult

Ƭ **getBrowserInfoResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `RegExp` |
| `version` | `string` |

___

### osInfoResult

Ƭ **osInfoResult**: `Object`

@description: 获取用户系统平台信息
@author: wuxh
@Date: 2020-05-06 12:07:03

**`Param`**

{os: "mac", version: "10.15.3"}
@example: 
```
 osInfo()
 => {os: "mac", version: "10.15.3"}
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `os` | `string` \| `RegExp` |
| `version` | `string` |

## Variables

### globalCache

• `Const` **globalCache**: `GlobalCache`

## Array
@description:
@author: wxingheng
@Date: 2022-09-30 11:45:04 Functions

### sortCallBackTime

▸ **sortCallBackTime**(`key`, `desc?`): (`a`: `any`, `b`: `any`) => `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 对象的key |
| `desc` | `boolean` | `false` | 是否倒序, 默认是正序 |

#### Returns

`fn`

```
arr.sort(sortCallBackNumber('age')) => [{age: 18}, {age: 20}]
arr.sort(sortCallBackNumber('age', true)) => [{age: 20}, {age: 18}]
```

▸ (`a`, `b`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`void`

___

## Array
@description:  reduce方法，用于数组对象的求和
@author: wxingheng
@Date: 2022-09-30 11:51:39 Functions

### reduceCallBackNumber

▸ **reduceCallBackNumber**(`key`): (`acc`: `any`, `cur`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

```
arr.reduce(reduceSum('num'), 0) => 10
```

▸ (`acc`, `cur`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `any` |
| `cur` | `any` |

##### Returns

`void`

___

## Array
@description:  数组排序的回调函数，用于sort方法，按照对象的某个属性进行中文排序
@author: wxingheng
@Date: 2022-09-30 11:43:11 Functions

### sortCallBackChinese

▸ **sortCallBackChinese**(`key`): (`a`: `any`, `b`: `any`) => `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 排序的属性 |

#### Returns

`fn`

```
 arr.sort(sortCallBackChinese('name')) => [{name: '张三'}, {name: '李四'}]
```

▸ (`a`, `b`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`void`

___

## Array
@description: 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
@author: wuxh
@Date: 2020-05-06 11:37:17 Functions

### doubleRanking

▸ **doubleRanking**(`arr`, `options`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | \{ `[key: string]`: `any`;  }[] |
| `options` | [`DoubleRankingOption`](modules.md#doublerankingoption) |

#### Returns

`any`[]

___

## Array
@description: 数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
@author: wuxh
@Date: 2020-05-06 11:51:49 Functions

### arrByObj

▸ **arrByObj**(`arr`, `key`, `v?`): `Object`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | \{ `[key: string]`: `any`;  }[] | `undefined` | 需要作为转换后对象的key需要转换的数组 |
| `key` | `string` | `undefined` | 需要作为转换后对象的key |
| `v` | `string` | `''` | 对象的value取值，默认是数组的每一个元素作为值 @return: Object ``` const arr = arr = [{name: 111, value: 222},{name: 333, value:444}] arrByObj(arr, 'name') => {"111":{"name":111,"value":222},"333":{"name":333,"value":444}} arrByObj(arr, 'name', value) => {"111":222,"333":444} ``` |

#### Returns

`Object`

___

## Array
@description: 数组交集
@author: wxingheng
@Date: 2022-05-18 10:56:47 Functions

### difference

▸ **difference**(`a`, `b`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| ``null`` \| `Iterable`\<`unknown`\> |
| `b` | `undefined` \| ``null`` \| `Iterable`\<`unknown`\> |

#### Returns

`any`[]

Array
```
difference([2,3,4,5], [1,2,3,4]) => [5, 1] ;
difference([1,2,3,4], [2,3,4,5]) => [1, 5];
difference([1,2,3,4], [1,2,3,4]) => [];
difference([1,2,3,4], []) => [1, 2, 3, 4]
```

___

## Array
@description: 数组元素是否相同
@author: wxingheng
@Date: 2022-05-18 10:56:04 Functions

### arrayCompare

▸ **arrayCompare**(`arr1`, `arr2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr1` | `any`[] |
| `arr2` | `any`[] |

#### Returns

`boolean`

```
arrayCompare([2,3,4,5], [5,4,3,2]) => true ; 
arrayCompare([2,3,4,5], [5,4,3,2,1]) => false;
arrayCompare([2,3,4,5], []) => true;
arrayCompare([], [1,2,3,4]) => false;
arrayCompare([1,2,3,4], []) => true;
```

___

## Array
@description: 简单数组去重，Set 处理
@author: wxingheng
@Date: 2022-10-12 11:16:32 Functions

### uniqueArray

▸ **uniqueArray**(`arr`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `undefined` \| ``null`` \| `string` \| `Iterable`\<`any`\> |

#### Returns

`any`[]

```
 uniqueArray([1,1,1,1,1]) => [1]; uniqueArray([1,2,3,4,5]) => [1,2,3,4,5]; 
 ```

___

## Array 
@description: 产生随机数据
@author: wxingheng
@Date: 2022-10-12 11:08:50 Functions

### randomData

▸ **randomData**(`num`, `arr`): `any`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | 数量 |
| `arr` | `string`[] | 每个元素对象的keys |

#### Returns

`any`[]

```
 randomData(2, ['name', 'value'])
 => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
 ```

___

## Other Functions

### addZero

▸ **addZero**(`v`, `size`): `string`

@description: 字符串补0，目前提供给dateFormat使用
@author: wuxh
@Date: 2020-05-11 14:01:20

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` |
| `size` | `number` |

#### Returns

`string`

___

### cleanObject

▸ **cleanObject**(`object`): `Object`

@description: cleanObject 去除对象中value为空(null,undefined,'')的属性
@author: wuxh
@Date: 2021-09-02 22:07:34

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

`Object`

{ [k: string]: any }
@example: 
cleanObject({
 name: '',
 pageSize: 10,
 page: 1
}) => {
 pageSize: 10,
 page: 1
}

___

### cloneJson

▸ **cloneJson**(`obj`): `any`

@description: 简单的深拷贝
@author: wuxh
@Date: 2021-09-02 22:33:47

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

obj
@example: 
const person={name:'xiaoming',child:{name:'Jack'}}
cloneJson(person) => {name:'xiaoming',child:{name:'Jack'}}

___

### cloneObj

▸ **cloneObj**(`obj`): `any`

@description: 深拷贝，克隆（只包含可遍历属性<常用>）
@author: wuxh
@Date: 2020-05-06 12:14:45

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

___

### convertDataToTree

▸ **convertDataToTree**(`data`, `id?`, `pid?`, `children?`): `any`[]

@description: 将list转换为树结构
@author: wxingheng
@Date: 2022-09-30 11:37:32

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any`[] | `undefined` |
| `id` | `string` | `'id'` |
| `pid` | `string` | `'pid'` |
| `children` | `string` | `'children'` |

#### Returns

`any`[]

@example: convertDataToTree(data) => treeData

___

### convertDateToStandard

▸ **convertDateToStandard**(`date`): `string`

@description:  时间的转换 "YYYY-MM-DD HH:II:SS"
@author: wxingheng
@Date: 2022-09-30 11:48:15

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

@example: convertDateToStandard(new Date()) => "2021-09-30 11:48:15"

___

### convertDateToStandardDay

▸ **convertDateToStandardDay**(`date`): `string`

@description:  时间的转换 "YYYY-MM-DD"
@author: wxingheng
@Date: 2022-09-30 11:49:14

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

@example: convertDateToStandardDay(new Date()) => "2021-09-30"

___

### convertDateToStandardHours

▸ **convertDateToStandardHours**(`date`): `string`

@description: 时间的转换 "YYYY-MM-DD HH"
@author: wxingheng
@Date: 2022-09-30 11:49:37

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

@example: convertDateToStandardHours(new Date()) => "2021-09-30 11"

___

### convertDateToView

▸ **convertDateToView**(`date`, `template?`, `defaultResult?`): `string`

@description:  时间的转换（目前支持 年，月，日，时，分，秒，星期）, 与dateFormat的区别是，这个方法可以传入时间戳
@author: wxingheng
@Date: 2022-09-30 11:46:22

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `string` \| `number` \| `Date` | `undefined` |
| `template` | `string` | `"YYYY-MM-DD HH:II:SS"` |
| `defaultResult` | `string` | `""` |

#### Returns

`string`

@example:  convertDateToView(new Date(), '当前时间 YY-MM-DD HH:II:SS 星期W')

___

### convertTreeToList

▸ **convertTreeToList**(`tree`, `children?`): `any`[]

@description: 将树结构转换为list
@author: wxingheng
@Date: 2022-09-30 11:40:43

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tree` | `any`[] | `undefined` | 树结构 |
| `children` | `string` | `'children'` | 子节点字段 |

#### Returns

`any`[]

@example: convertTreeToList (treeData) => listData

___

### copyToBoar

▸ **copyToBoar**(`value`): `boolean`

@description: 复制内容到剪贴板
@author: wuxh
@Date: 2021-09-02 22:22:03

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

boolean
@example: 
copyToBoard('lalallala') => true // 如果复制成功返回true

___

### cutNumber

▸ **cutNumber**(`number`, `no?`): `number`

@description: 保留到小数点以后n位
@author: wuxh
@Date: 2021-09-02 22:54:36

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `number` | `number` | `undefined` |
| `no` | `number` | `2` |

#### Returns

`number`

Number
@example: 
cutNumber('3123.22312') => 3123.22

___

### dateFormat

▸ **dateFormat**(`date`, `formatStr`): `string`

@description:  时间的转换（目前支持 年，月，日，时，分，秒，星期）
@author: wuxh
@Date: 2020-05-06 12:05:28

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `formatStr` | `string` |

#### Returns

`string`

___

### dateInterval

▸ **dateInterval**(`st`, `et`): `string`

@description: 获取两个时间的间隔
@author: wuxh
@Date: 2020-05-06 12:04:39

#### Parameters

| Name | Type |
| :------ | :------ |
| `st` | `number` |
| `et` | `number` |

#### Returns

`string`

___

### dateMonthDays

▸ **dateMonthDays**(`str`): `number`

@description: 获取当前月份的天数
@author: wuxh
@Date: 2020-05-06 12:06:24

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

___

### debounce

▸ **debounce**(`func`, `wait?`, `immediate?`): (...`args`: `any`) => `void`

@description: debounce 防抖, 固定时间内持续触发，只执行最后一次
@author: wuxh
@Date: 2021-09-02 21:30:44

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (...`rest`: `any`) => `void` | `undefined` | - |
| `wait` | `number` | `500` | 等待时间,默认500ms |
| `immediate` | `boolean` | `false` | 是否立即执行 |

#### Returns

`fn`

Function 
@example: 
function onInput() {
               console.log('1111')
           }
           const debounceOnInput = debounce(onInput)
           document
               .getElementById('input')
               .addEventListener('input', debounceOnInput)

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

| Name | Type |
| :------ | :------ |
| `cancel` | () => `void` |

___

### deepClone

▸ **deepClone**(`target`): `any`

@description: 深克隆 deepClone
@author: wxingheng
@Date: 2022-04-10 22:19:43

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`any`

@example: deepClone(obj) => new obj

___

### download

▸ **download**(`link`, `name`): `any`

@description: 下载一个链接文档
@author: wuxh
@Date: 2021-09-01 23:27:00

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |
| `name` | `string` |

#### Returns

`any`

@example:
download('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F04%2F20200804215427_fc3ff.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633102668&t=5f2cf4e9273be91527efb91ecd5cb6dd')
下载后端返回的流

___

### downloadFile

▸ **downloadFile**(`name`, `content`): `any`

@description: 在浏览器中自定义下载一些内容
@author: wuxh
@Date: 2021-09-01 23:32:30

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `BlobPart` |

#### Returns

`any`

@example: 场景：我想下载一些DOM内容，我想下载一个JSON文件

downloadFile('1.txt','lalalallalalla')
  downloadFile('1.json',JSON.stringify({name:'hahahha'}))

___

### dragScroll

▸ **dragScroll**(`scrollDom`): `object`

@description: 拖拽滚动
@author: wxingheng
@Date: 2022-07-15 18:16:15

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollDom` | `any` |

#### Returns

`object`

@example: 待增加惯性效果

___

### endWith

▸ **endWith**(`str`, `endStr`): `boolean`

@description: 字符串判断结尾
@author: wuxh
@Date: 2021-11-10 11:35:30

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `endStr` | `string` |

#### Returns

`boolean`

@example: endWith('1231231', '21') => false ;  endWith('1231231', '31') => true

___

### everyTrim

▸ **everyTrim**(`data`): `any`

@description: 去除值类型为string的前后空格
@author: wuxh
@Date: 2021-08-21 22:11:23

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` \| `any`[] |

#### Returns

`any`

@example: everyTrim({name: '  123  ', arr: [' 33 ']}) => {name: '123': arr: ['33']}

___

### exportJson

▸ **exportJson**(`data`, `name?`): `any`

@description: JSON 对象导出为.json文件
@author: wxingheng
@Date: 2022-09-30 11:00:54

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `name` | `string` | `"data"` |

#### Returns

`any`

@example:

___

### fetchToSlow

▸ **fetchToSlow**(`fastestTime`): (`func`: `any`) => `any`

@description: 转换请求为慢响应

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fastestTime` | `undefined` \| `number` | 最快响应时间 |

#### Returns

`fn`

@example: const data = await fetchToSlow(1000 * 2)(getKgDetail(kg_id));

▸ (`func`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `any` |

##### Returns

`any`

___

### formatQueryParam

▸ **formatQueryParam**(`obj`): `string`

@description: 格式化GET请求的请求头
@author: wuxh
@Date: 2020-05-06 13:47:40

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

`string`

___

### formatRhBloodGroup

▸ **formatRhBloodGroup**(`input`, `optiongs?`): `string` \| `number` \| `boolean`

@description: 转换Rh血型
@author: wuxh
@Date: 2021-09-07 13:44:36

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `optiongs?` | `Object` |
| `optiongs.default?` | `string` \| `number` \| `boolean` |
| `optiongs.format?` | [`string` \| `number` \| `boolean`, `string` \| `number` \| `boolean`] |
| `optiongs.negative?` | `string`[] |
| `optiongs.positive?` | `string`[] |

#### Returns

`string` \| `number` \| `boolean`

@example:  formatRhBloodGroup('**D**') => 阳性
formatRhBloodGroup('+') => 阳性

___

### getBase64

▸ **getBase64**(`file`): `Promise`\<`any`\>

@description: 获取图片的 base64
@author: wxingheng
@Date: 2022-09-30 10:53:33

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`Promise`\<`any`\>

@example: getBase64(file).then(res => console.log(res))

___

### getBirthdatByIdNo

▸ **getBirthdatByIdNo**(`iIdNo`): `string`

@description: 身份证号码解析出生日期
@author: wuxh
@Date: 2020-06-09 09:17:50

#### Parameters

| Name | Type |
| :------ | :------ |
| `iIdNo` | `string` |

#### Returns

`string`

___

### getBrowserInfo

▸ **getBrowserInfo**(): [`getBrowserInfoResult`](modules.md#getbrowserinforesult)

@description: 获取浏览器相关信息
@author: wuxh
@Date: 2020-05-06 11:53:35

#### Returns

[`getBrowserInfoResult`](modules.md#getbrowserinforesult)

___

### getCookie

▸ **getCookie**(`name`): ``null`` \| `string`

@description: 获取cookie值
@author: wuxh
@Date: 2020-06-09 09:28:06

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

___

### getCountDays

▸ **getCountDays**(`str`): `number`

@description: 获取当前月份天数
@author: wuxh
@Date: 2021-08-21 22:43:58

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` \| `number` \| `Date` | YYYY-MM-DD mm:ss |

#### Returns

`number`

number
@example:

___

### getExt

▸ **getExt**(`filename`): `undefined` \| `string`

@description: 获取文件后缀名
@author: wuxh
@Date: 2021-09-02 22:17:57

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`undefined` \| `string`

@example: 
getExt("1.mp4") => mp4

___

### getFormData

▸ **getFormData**(`object`): `FormData`

@description: 对象转化为FormData对象
@author: wuxh
@Date: 2021-09-02 22:52:34

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

`FormData`

@example: 
let req={
   file:xxx,
   userId:1,
   phone:'15198763636',
   //...
}
fetch(getFormData(req))

___

### getSexByIdNO

▸ **getSexByIdNO**(`IdNO`): ``""`` \| ``"FEMALE"`` \| ``"MALE"``

@description: 身份证号码解析性别
@author: wuxh
@Date: 2020-06-09 09:16:28

#### Parameters

| Name | Type |
| :------ | :------ |
| `IdNO` | `string` |

#### Returns

``""`` \| ``"FEMALE"`` \| ``"MALE"``

___

### getStorage

▸ **getStorage**(`key`): `any`

@description: 获取
@author: wuxh
@Date: 2020-05-06 12:00:37

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

___

### getStringLen

▸ **getStringLen**(`str`): `number`

@description: 计算文本长度（中文算两个字符，英文算一个字符）
@author: wxingheng
@Date: 2022-09-30 10:49:41

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

@example: getStringLen("阿斯顿发123") => 11 ; getStringLen("asd123") => 6 ; getStringLen("asd123顿发") => 10

___

### getUrlQuery

▸ **getUrlQuery**(`name`): `string`

@description: 获取浏览器url中的一个参数
@author: wuxh
@Date: 2020-05-06 13:46:28

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### getV

▸ **getV**\<`T`\>(`defaultResult`, `...args`): `any`

@description: 获取嵌套数据,处理空值异常
@author: wuxh
@Date: 2020-05-06 12:13:59

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultResult` | `T` | 默认值 |
| `...args` | `any`[] | 属性访问路径 |

#### Returns

`any`

目标值或默认值
@example: 
 getV('', {name: {children: 123}}, 'name', 'children')
 => 123

___

### groupBy

▸ **groupBy**(`arr`, `key`): `any`

@description:  数组的分类，根据某个字段分类，返回一个对象，key为字段值，value为数组
@author: wxingheng
@Date: 2022-09-30 11:53:38

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |
| `key` | `string` |

#### Returns

`any`

@example:
const arr = [
{type: 1, name: 'a'},
{type: 2, name: 'b'},
{type: 1, name: 'c'},
{type: 2, name: 'd'},
{type: 1, name: 'e'},
{type: 2, name: 'f'},
]
groupBy(arr, 'type') => {1: [{type: 1, name: 'a'}, {type: 1, name: 'c'}, {type: 1, name: 'e'}], 2: [{type: 2, name: 'b'}, {type: 2, name: 'd'}, {type: 2, name: 'f'}]}

___

### hideIdNum

▸ **hideIdNum**(`str`): `string`

@description: 隐藏身份证号码
@author: wuxh
@Date: 2020-06-09 09:19:26

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### importJson

▸ **importJson**(): `object`

@description: 前端文件导入，JSON文件导入
@author: wxingheng
@Date: 2022-09-30 10:57:58

#### Returns

`object`

@example: importJson() => {name: 'wxh'}

___

### isAndroidMobileDevice

▸ **isAndroidMobileDevice**(): `boolean`

@description: 是否是安卓设备
@author: wuxh
@Date: 2020-06-09 09:31:04

#### Returns

`boolean`

___

### isAppleMobileDevice

▸ **isAppleMobileDevice**(): `boolean`

@description: 是否是苹果设备
@author: wuxh
@Date: 2020-06-09 09:31:55

#### Returns

`boolean`

___

### isArray

▸ **isArray**(`data`): `boolean`

@description: 判断Array类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isBoolean

▸ **isBoolean**(`data`): `boolean`

@description: 判断Boolean类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isDate

▸ **isDate**(`data`): `boolean`

@description: 判断Date类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isEmail

▸ **isEmail**(`str`): `boolean`

@description: 校验是否为邮箱地址
@author: wuxh
@Date: 2020-06-09 09:49:29

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

___

### isEmptyObject

▸ **isEmptyObject**(`obj`): `boolean`

@description: 判断对象是否为空
@author: wuxh
@Date: 2021-08-21 23:08:42

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean`

boolean
@example: isEmptyObject({}) => true

___

### isEqual

▸ **isEqual**(`a`, `b`): `boolean`

@description: 判断两个对象是否相等
@author: wxingheng
@Date: 2022-05-13 16:35:33

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

@example: isEqual({a: 1}, {a: 1}) => true; isEqual({a: 1}, {a: 2}) => false; isEqual({a: 1}, {b: 1}) => false

___

### isError

▸ **isError**(`data`): `boolean`

@description: 判断Error类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isFalsy

▸ **isFalsy**(`value`): `boolean`

@description: 判断 js是否是false， 0除外。
@author: wuxh
@Date: 2021-09-02 22:01:50

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

value === 0 ? false : !value
@example: 
isFalsy('') => true
isFalsy(0) => false
isFalsy(null) => true
isFalsy(undefined) => true

___

### isFunc

▸ **isFunc**(`data`): `boolean`

@description: 判断Function类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isNull

▸ **isNull**(`data`): `boolean`

@description: 判断Null类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`boolean`

___

### isNumber

▸ **isNumber**(`data`): `boolean`

@description: 判断Number类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isObject

▸ **isObject**(`data`): `boolean`

@description: 判断Object类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isPhone

▸ **isPhone**(`phone`): `boolean`

@description: 手机号校验
@author: wuxh
@Date: 2020-06-09 09:21:15

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`boolean`

___

### isQQ

▸ **isQQ**(): `boolean`

@description: 是否是QQ平台
@author: wuxh
@Date: 2020-05-06 12:10:41

#### Returns

`boolean`

___

### isReg

▸ **isReg**(`data`): `boolean`

@description: 判断RegExp类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isRhNegative

▸ **isRhNegative**(`input`): `string` \| `number` \| `boolean`

@description: 是否阴性
@author: wuxh
@Date: 2022-01-17 23:57:31

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string` \| `number` \| `boolean`

@example:

___

### isRhPositive

▸ **isRhPositive**(`input`): `string` \| `number` \| `boolean`

@description: 是否阳性
@author: wuxh
@Date: 2022-01-17 23:57:19

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string` \| `number` \| `boolean`

@example:

___

### isString

▸ **isString**(`data`): `boolean`

@description: 判断String类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isSupportStorage

▸ **isSupportStorage**(): `boolean`

@description: 是否支持local
@author: wuxh
@Date: 2020-05-06 12:01:43

#### Returns

`boolean`

___

### isType

▸ **isType**(`data`, `type`): `boolean`

@description: 精准判断数据类型
@author: wuxh
@Date: 2020-05-06 13:51:50

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | - |
| `type` | `string` | 'String' \| 'Number' \| 'Boolean' \| 'Undefined' \| 'Null' \| 'Function' \| 'Date' \| 'Array' \| 'RegExp' \| 'Error' \| 'Object' @return: Boolean @example: isType(123, 'String') => false isType('123', 'String') => true |

#### Returns

`boolean`

___

### isUndefined

▸ **isUndefined**(`data`): `boolean`

@description: 判断Undefined类型
@author: wuxh
@Date: 2020-05-06 13:53:16

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isUserId

▸ **isUserId**(`e`): ``""`` \| ``"身份证号码不能为空"`` \| ``"身份证号码长度应该为18位"`` \| ``"身份证格式错误"`` \| ``"身份证生日无效。"`` \| ``"身份证生日不在有效范围"`` \| ``"身份证月份无效"`` \| ``"身份证日期无效"`` \| ``"身份证地区编码错误"`` \| ``"不是合法的身份证号码"``

@description: 身份证号码校验（精准）
@author: wuxh
@Date: 2020-05-06 13:49:58

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

``""`` \| ``"身份证号码不能为空"`` \| ``"身份证号码长度应该为18位"`` \| ``"身份证格式错误"`` \| ``"身份证生日无效。"`` \| ``"身份证生日不在有效范围"`` \| ``"身份证月份无效"`` \| ``"身份证日期无效"`` \| ``"身份证地区编码错误"`` \| ``"不是合法的身份证号码"``

___

### isVoid

▸ **isVoid**(`value`): `boolean`

@description: 判断是否为空 undefined || null || ""
@author: wuxh
@Date: 2021-09-02 22:03:36

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

boolean
@example: 
isVoid(0) => false
isVoid(undefined) => true
isVoid('') => true
isVoid(null) => true
isVoid() => true

___

### isWX

▸ **isWX**(): `boolean`

@description: 是否是微信平台
@author: wuxh
@Date: 2020-05-06 12:10:41

#### Returns

`boolean`

___

### mergeObj

▸ **mergeObj**(`oldObj`, `newObj`, `keys`): `Object`

@description: 深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
@author: wuxh
@Date: 2020-05-06 12:15:30

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldObj` | `Object` |
| `newObj` | `Object` |
| `keys` | `string` \| `string`[] |

#### Returns

`Object`

___

### moreClick

▸ **moreClick**(`fun`, `n?`, `wait?`): (...`args`: `any`[]) => `void`

@description: 单击事件转换为多击事件
@author: wxingheng
@Date: 2022-08-09 14:03:34

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fun` | (...`args`: `any`) => `void` | `undefined` | 回调函数 |
| `n` | `number` | `2` | 连续几次触发才触发回调函数 |
| `wait` | `number` | `300` | 两次之间的间隔时间 |

#### Returns

`fn`

@example:  const dobuleClick = moreClick(handleClick)
   // 连续点击三次触发
       var moreClickCallBack = jcommon.moreClick(() => {
           console.log("moreClickCallBack")
       }, 3)
       dom.addEventListener('click', moreClickCallBack);

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

___

### oneClickToMoreClick

▸ **oneClickToMoreClick**(`wait?`, `...events`): () => `void`

@description: 单击事件转换为多击事件
@author: wxingheng
@Date: 2022-05-04 14:20:22

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `wait` | `number` | `300` |
| `...events` | (...`args`: `any`[]) => `void`[] | `undefined` |

#### Returns

`fn`

@example: 
   // 连续点击一次触发，连续点击两次触发，连续点击三次触发
       var oneClickToMoreClickCallBack = jcommon.oneClickToMoreClick(300, () => {
           console.log(111)
       }, () => {
           console.log(222)
       }, ()=> {
           console.log(333)
       })
       dom.addEventListener('click', oneClickToMoreClickCallBack);

▸ (): `void`

##### Returns

`void`

___

### operattelecom

▸ **operattelecom**(`e`): ``false`` \| ``"联通"`` \| ``"电信"`` \| ``"移动"`` \| ``"未知"``

@description: 获取手机运营商
@author: wuxh
@Date: 2020-05-06 12:11:39

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

``false`` \| ``"联通"`` \| ``"电信"`` \| ``"移动"`` \| ``"未知"``

___

### osInfo

▸ **osInfo**(`e`): [`osInfoResult`](modules.md#osinforesult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

[`osInfoResult`](modules.md#osinforesult)

___

### processStreamResponse

▸ **processStreamResponse**(`response`, `typewriter`): `Promise`\<`void`\>

@description:  处理流响应数据
@author: wxingheng
@Date: 2023-06-13 16:14:34

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `typewriter` | `Object` |
| `typewriter.add` | (`arg0`: `any`) => `void` |
| `typewriter.done` | () => `void` |
| `typewriter.start` | () => `void` |

#### Returns

`Promise`\<`void`\>

@example:

___

### randomColor

▸ **randomColor**(): `any`

@description: 产生一个随机颜色
@author: wxingheng
@Date: 2022-09-30 11:13:13

#### Returns

`any`

@example: randomColor() => "rgba(107, 35, 72, 1)";

___

### removeStorage

▸ **removeStorage**(`key`): `void`

@description: 删除
@author: wuxh
@Date: 2020-05-06 11:56:29

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`void`

___

### saveStorage

▸ **saveStorage**(`key`, `value`): `void`

@description: 保存
@author: wuxh
@Date: 2020-05-06 11:56:29

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### scaleLinear

▸ **scaleLinear**(`value`, `source`, `target`, `toFixedLength?`): `any`

@description: 比例计算
@author: wxingheng
@Date: 2022-09-30 11:13:27

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | 当前值 |
| `source` | `number` | `undefined` | 当前值所在的区间 |
| `target` | `number` | `undefined` | 目标区间 |
| `toFixedLength` | `any` | `2` | 保留小数位数 |

#### Returns

`any`

@example:  scaleLinear(50, 100, 10, 2) => 5; scaleLinear(50, 100, 10, 0) => 5;

___

### scopeRandom

▸ **scopeRandom**(`str`, `end`): `number`

@description: 范围随机整数
@author: wuxh
@Date: 2020-05-06 12:09:34

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `number` |
| `end` | `number` |

#### Returns

`number`

___

### similar

▸ **similar**(`s`, `t`, `f?`): `number`

@description: 计算两个字符串相似度
@author: wxingheng
@Date: 2022-07-25 10:07:23

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `s` | `string` | `undefined` | 文本1 |
| `t` | `string` | `undefined` | 文本2 |
| `f` | `number` | `2` | 小数位精确度，默认2位 |

#### Returns

`number`

百分数前的数值，最大100. 比如 ：90.32
@example: similar("12", "12") => 100 ; similar("12", "123") => 75 ; similar("12", "1234") => 50

___

### sleep

▸ **sleep**(`milliseconds`): `Promise`\<`unknown`\>

@description: 休眠多少毫秒
@author: wuxh
@Date: 2021-09-02 23:08:19

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `undefined` \| `number` |

#### Returns

`Promise`\<`unknown`\>

@example: 
 fetchData = async () => {
   await sleep(1000)
 }

___

### sorterCallBack

▸ **sorterCallBack**(`key`, `isAscend?`): (`a`: `any`, `b`: `any`) => ``1`` \| ``-1``

@description: sort []
@author: wuxh
@Date: 2021-09-07 14:12:06

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `isAscend` | `boolean` | `true` |

#### Returns

`fn`

@example:
const arr = [{name: '666'}, {name: '333'}]
arr.sorterCallBackString('name') => [{name: '333'}, {name: '666'}]
arr.sorterCallBackString('name', false) => [{name: '666'}, {name: '333'}]

▸ (`a`, `b`): ``1`` \| ``-1``

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

``1`` \| ``-1``

___

### throttle

▸ **throttle**(`func`, `wait?`, `options`): () => `void`

@description: 节流 多次调用方法，按照一定的时间间隔执行
@author: wuxh
@Date: 2021-09-02 21:46:38

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | () => `void` | `undefined` |
| `wait` | `number` | `500` |
| `options` | `Object` | `undefined` |
| `options.leading` | `boolean` | `undefined` |
| `options.trailing` | `boolean` | `undefined` |

#### Returns

`fn`

Function
@example: 

leading，函数在每个等待时延的开始被调用，默认值为false
trailing，函数在每个等待时延的结束被调用，默认值是true
可以根据不同的值来设置不同的效果：
leading-false，trailing-true：默认情况，即在延时结束后才会调用函数
leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用
leading-true, trailing-false：只在延时开始时调用

▸ (): `void`

##### Returns

`void`

___

### timeFormat

▸ **timeFormat**(`time`): `string`

@description: 时间个性化输出功能
@author: wuxh
@Date: 2020-06-09 09:44:23

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `Date` |

#### Returns

`string`

___

### trim

▸ **trim**(`str`, `global?`): `string`

@description: 去除字符串空格, 默认去除前后空格 （常用）
@author: wuxh
@Date: 2020-05-06 13:43:52

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `global` | `boolean` | `false` |

#### Returns

`string`

___

### uniqueId

▸ **uniqueId**(): `string`

@description: 随机数 + 时间戳
@author: wuxh
@Date: 2020-06-09 09:47:34

#### Returns

`string`

___

### urlByObj

▸ **urlByObj**(`params`): `Object`

@description: 处理url参数(window.location.search)转换为 {key: value}
@author: wuxh
@Date: 2020-05-06 13:48:36

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Returns

`Object`

___

### uuid

▸ **uuid**(`length`, `chars`): `string`

@description: 生成随机字符串,第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
@author: wuxh
@Date: 2021-09-02 22:29:02

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `chars` | `string` \| `any`[] |

#### Returns

`string`

@example: 
uuid() => 'ghijklmn'

___

### versionCount

▸ **versionCount**(`version`, `maxNum?`): `string`

@description: 版本号累加
@author: wuxh
@Date: 2021-08-24 11:19:07

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `version` | `string` | `undefined` | : string |
| `maxNum` | `number` | `99` | - |

#### Returns

`string`

string
@example: versionCount('0.0.1') => '0.0.2'
versionCount('0.2.9') => '0.3.0'
versionCount('0.2.9.1') => '0.2.9.2'




[jcommon文档库 - v1.9.40](../README.md) / [Exports](../modules.md) / EventBus

# Class: EventBus

@description: EventBus  class
@author: wuxh
@Date: 2021-08-24 11:19:07
@example: const eventBus = new EventBus()

## Table of contents

### Constructors

- [constructor](EventBus.md#constructor)

### Methods

- [addListener](EventBus.md#addlistener)
- [emit](EventBus.md#emit)
- [getListeners](EventBus.md#getlisteners)
- [once](EventBus.md#once)
- [removeAllListener](EventBus.md#removealllistener)
- [removeListener](EventBus.md#removelistener)
- [setMaxListeners](EventBus.md#setmaxlisteners)

## Constructors

### constructor

• **new EventBus**()

## Methods

### addListener

▸ **addListener**(`event`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `cb` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

___

### emit

▸ **emit**(`event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

___

### getListeners

▸ **getListeners**(`event`): (...`args`: `any`[]) => `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

(...`args`: `any`[]) => `any`[]

___

### once

▸ **once**(`event`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `cb` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

___

### removeAllListener

▸ **removeAllListener**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`void`

___

### removeListener

▸ **removeListener**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

___

### setMaxListeners

▸ **setMaxListeners**(`maxListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxListener` | `number` |

#### Returns

`void`




[jcommon文档库 - v1.9.40](../README.md) / [Exports](../modules.md) / Queue

# Class: Queue

@description: Queue 队列 class
@author: wuxh
@Date: 2021-08-24 11:19:07
@example: const queue = new Queue()

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Methods

- [clear](Queue.md#clear)
- [dequeue](Queue.md#dequeue)
- [enqueue](Queue.md#enqueue)
- [front](Queue.md#front)
- [isEmpty](Queue.md#isempty)
- [print](Queue.md#print)
- [size](Queue.md#size)

## Constructors

### constructor

• **new Queue**(`items`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `never`[] |

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### dequeue

▸ **dequeue**(): `void`

#### Returns

`void`

___

### enqueue

▸ **enqueue**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `never` |

#### Returns

`void`

___

### front

▸ **front**(): `never`

#### Returns

`never`

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

___

### print

▸ **print**(): `void`

#### Returns

`void`

___

### size

▸ **size**(): `number`

#### Returns

`number`




