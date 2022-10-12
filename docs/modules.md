[jcommon文档库 - v1.9.17](README.md) / Exports

# jcommon文档库 - v1.9.17

## Table of contents

### Classes

- [EventBus](classes/EventBus.md)
- [Queue](classes/Queue.md)

### Functions

- [addZero](modules.md#addzero)
- [arrByObj](modules.md#arrbyobj)
- [arrayCompare](modules.md#arraycompare)
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
- [difference](modules.md#difference)
- [doubleRanking](modules.md#doubleranking)
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
- [randomColor](modules.md#randomcolor)
- [randomData](modules.md#randomdata)
- [reduceCallBackNumber](modules.md#reducecallbacknumber)
- [removeStorage](modules.md#removestorage)
- [saveStorage](modules.md#savestorage)
- [scaleLinear](modules.md#scalelinear)
- [scopeRandom](modules.md#scoperandom)
- [similar](modules.md#similar)
- [sleep](modules.md#sleep)
- [sortCallBackChinese](modules.md#sortcallbackchinese)
- [sortCallBackTime](modules.md#sortcallbacktime)
- [sorterCallBack](modules.md#sortercallback)
- [throttle](modules.md#throttle)
- [timeFormat](modules.md#timeformat)
- [trim](modules.md#trim)
- [uniqueArray](modules.md#uniquearray)
- [uniqueId](modules.md#uniqueid)
- [urlByObj](modules.md#urlbyobj)
- [uuid](modules.md#uuid)
- [versionCount](modules.md#versioncount)

## Functions

### addZero

▸ **addZero**(`v`, `size`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` |
| `size` | `number` |

#### Returns

`string`

___

### arrByObj

▸ **arrByObj**(`arr`, `key`, `v?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | { `[key: string]`: `any`;  }[] | `undefined` |
| `key` | `string` | `undefined` |
| `v` | `string` | `''` |

#### Returns

`Object`

___

### arrayCompare

▸ **arrayCompare**(`arr1`, `arr2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr1` | `any`[] |
| `arr2` | `any`[] |

#### Returns

`boolean`

___

### cleanObject

▸ **cleanObject**(`object`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

`Object`

___

### cloneJson

▸ **cloneJson**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

___

### cloneObj

▸ **cloneObj**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

___

### convertDataToTree

▸ **convertDataToTree**(`data`, `id?`, `pid?`, `children?`): `any`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any`[] | `undefined` |
| `id` | `string` | `"id"` |
| `pid` | `string` | `"pid"` |
| `children` | `string` | `"children"` |

#### Returns

`any`[]

___

### convertDateToStandard

▸ **convertDateToStandard**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

___

### convertDateToStandardDay

▸ **convertDateToStandardDay**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

___

### convertDateToStandardHours

▸ **convertDateToStandardHours**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` |

#### Returns

`string`

___

### convertDateToView

▸ **convertDateToView**(`date`, `template?`, `defaultResult?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `string` \| `number` \| `Date` | `undefined` |
| `template` | `string` | `"YYYY-MM-DD HH:II:SS"` |
| `defaultResult` | `string` | `""` |

#### Returns

`string`

___

### convertTreeToList

▸ **convertTreeToList**(`tree`, `children?`): `any`[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tree` | `any`[] | `undefined` |  |
| `children` | `string` | `"children"` |  |

#### Returns

`any`[]

___

### copyToBoar

▸ **copyToBoar**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

___

### cutNumber

▸ **cutNumber**(`number`, `no?`): `Number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `number` | `number` | `undefined` |
| `no` | `number` | `2` |

#### Returns

`Number`

___

### dateFormat

▸ **dateFormat**(`date`, `formatStr`): `string`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

___

### debounce

▸ **debounce**(`func`, `wait?`, `immediate?`): `Function`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | `Function` | `undefined` | - |
| `wait` | `number` | `500` |  |
| `immediate` | `boolean` | `false` |  |

#### Returns

`Function`

___

### deepClone

▸ **deepClone**(`target`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`any`

___

### difference

▸ **difference**(`a`, `b`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| ``null`` \| `Iterable`<`unknown`\> |
| `b` | `undefined` \| ``null`` \| `Iterable`<`unknown`\> |

#### Returns

`any`[]

___

### doubleRanking

▸ **doubleRanking**(`arr`, `options`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | { `[key: string]`: `any`;  }[] |
| `options` | `DoubleRankingOption` |

#### Returns

`any`[]

___

### download

▸ **download**(`link`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |
| `name` | `string` |

#### Returns

`any`

___

### downloadFile

▸ **downloadFile**(`name`, `content`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `BlobPart` |

#### Returns

`any`

___

### dragScroll

▸ **dragScroll**(`scrollDom`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollDom` | `any` |

#### Returns

`object`

___

### endWith

▸ **endWith**(`str`, `endStr`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `endStr` | `string` |

#### Returns

`boolean`

___

### everyTrim

▸ **everyTrim**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` \| `any`[] |

#### Returns

`any`

___

### exportJson

▸ **exportJson**(`data`, `name?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `name` | `string` | `"data"` |

#### Returns

`any`

___

### fetchToSlow

▸ **fetchToSlow**(`fastestTime`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fastestTime` | `undefined` \| `number` |  |

#### Returns

`Function`

___

### formatQueryParam

▸ **formatQueryParam**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

`string`

___

### formatRhBloodGroup

▸ **formatRhBloodGroup**(`input`, `optiongs?`): `string` \| `number` \| `boolean`

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

___

### getBase64

▸ **getBase64**(`file`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`Promise`<`any`\>

___

### getBirthdatByIdNo

▸ **getBirthdatByIdNo**(`iIdNo`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iIdNo` | `string` |

#### Returns

`string`

___

### getBrowserInfo

▸ **getBrowserInfo**(): `getBrowserInfoResult`

#### Returns

`getBrowserInfoResult`

___

### getCookie

▸ **getCookie**(`name`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

___

### getCountDays

▸ **getCountDays**(`str`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` \| `number` \| `Date` |  |

#### Returns

`number`

___

### getExt

▸ **getExt**(`filename`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`undefined` \| `string`

___

### getFormData

▸ **getFormData**(`object`): `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |

#### Returns

`FormData`

___

### getSexByIdNO

▸ **getSexByIdNO**(`IdNO`): ``""`` \| ``"FEMALE"`` \| ``"MALE"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `IdNO` | `string` |

#### Returns

``""`` \| ``"FEMALE"`` \| ``"MALE"``

___

### getStorage

▸ **getStorage**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

___

### getStringLen

▸ **getStringLen**(`str`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

___

### getUrlQuery

▸ **getUrlQuery**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### getV

▸ **getV**<`T`\>(`defaultResult`, ...`args`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultResult` | `T` |
| `...args` | `any` |

#### Returns

`any`

___

### groupBy

▸ **groupBy**(`arr`, `key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |
| `key` | `string` |

#### Returns

`any`

___

### hideIdNum

▸ **hideIdNum**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### importJson

▸ **importJson**(): `Object`

#### Returns

`Object`

___

### isAndroidMobileDevice

▸ **isAndroidMobileDevice**(): `boolean`

#### Returns

`boolean`

___

### isAppleMobileDevice

▸ **isAppleMobileDevice**(): `boolean`

#### Returns

`boolean`

___

### isArray

▸ **isArray**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isBoolean

▸ **isBoolean**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isDate

▸ **isDate**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isEmail

▸ **isEmail**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

___

### isEmptyObject

▸ **isEmptyObject**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean`

___

### isEqual

▸ **isEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

___

### isError

▸ **isError**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isFalsy

▸ **isFalsy**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isFunc

▸ **isFunc**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isNull

▸ **isNull**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`boolean`

___

### isNumber

▸ **isNumber**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isObject

▸ **isObject**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isPhone

▸ **isPhone**(`phone`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `phone` | `string` |

#### Returns

`boolean`

___

### isQQ

▸ **isQQ**(): `boolean`

#### Returns

`boolean`

___

### isReg

▸ **isReg**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isRhNegative

▸ **isRhNegative**(`input`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string` \| `number` \| `boolean`

___

### isRhPositive

▸ **isRhPositive**(`input`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string` \| `number` \| `boolean`

___

### isString

▸ **isString**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isSupportStorage

▸ **isSupportStorage**(): `boolean`

#### Returns

`boolean`

___

### isType

▸ **isType**(`data`, `type`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | - |
| `type` | `string` |  |

#### Returns

`boolean`

___

### isUndefined

▸ **isUndefined**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isUserId

▸ **isUserId**(`e`): ``""`` \| ``"身份证号码不能为空"`` \| ``"身份证号码长度应该为18位"`` \| ``"身份证格式错误"`` \| ``"身份证生日无效。"`` \| ``"身份证生日不在有效范围"`` \| ``"身份证月份无效"`` \| ``"身份证日期无效"`` \| ``"身份证地区编码错误"`` \| ``"不是合法的身份证号码"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

``""`` \| ``"身份证号码不能为空"`` \| ``"身份证号码长度应该为18位"`` \| ``"身份证格式错误"`` \| ``"身份证生日无效。"`` \| ``"身份证生日不在有效范围"`` \| ``"身份证月份无效"`` \| ``"身份证日期无效"`` \| ``"身份证地区编码错误"`` \| ``"不是合法的身份证号码"``

___

### isVoid

▸ **isVoid**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isWX

▸ **isWX**(): `boolean`

#### Returns

`boolean`

___

### mergeObj

▸ **mergeObj**(`oldObj`, `newObj`, `keys`): `Object`

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fun` | `Function` | `undefined` |  |
| `n` | `number` | `2` |  |
| `wait` | `number` | `300` |  |

#### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

___

### oneClickToMoreClick

▸ **oneClickToMoreClick**(`wait?`, ...`events`): `Function`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `wait` | `number` | `300` |
| `...events` | `Function`[] | `undefined` |

#### Returns

`Function`

___

### operattelecom

▸ **operattelecom**(`e`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

`string` \| ``false``

___

### osInfo

▸ **osInfo**(`e`): `osInfoResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `string` |

#### Returns

`osInfoResult`

___

### randomColor

▸ **randomColor**(): `any`

#### Returns

`any`

___

### randomData

▸ **randomData**(`num`, `arr`): { `[key: string]`: `any`;  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `arr` | `any`[] |

#### Returns

{ `[key: string]`: `any`;  }[]

___

### reduceCallBackNumber

▸ **reduceCallBackNumber**(`key`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Function`

___

### removeStorage

▸ **removeStorage**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`void`

___

### saveStorage

▸ **saveStorage**(`key`, `value`): `void`

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` |  |
| `source` | `number` | `undefined` |  |
| `target` | `number` | `undefined` |  |
| `toFixedLength` | `any` | `2` |  |

#### Returns

`any`

___

### scopeRandom

▸ **scopeRandom**(`str`, `end`): `number`

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `s` | `string` | `undefined` |  |
| `t` | `string` | `undefined` |  |
| `f` | `number` | `2` |  |

#### Returns

`number`

___

### sleep

▸ **sleep**(`milliseconds`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `undefined` \| `number` |

#### Returns

`Promise`<`unknown`\>

___

### sortCallBackChinese

▸ **sortCallBackChinese**(`key`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` |  |

#### Returns

`Function`

___

### sortCallBackTime

▸ **sortCallBackTime**(`key`, `desc?`): `Function`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` |  |
| `desc` | `boolean` | `false` |  |

#### Returns

`Function`

___

### sorterCallBack

▸ **sorterCallBack**(`key`, `isAscend?`): (`a`: `any`, `b`: `any`) => ``1`` \| ``-1``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `isAscend` | `boolean` | `true` |

#### Returns

`fn`

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

▸ **throttle**(`func`, `wait?`, `options`): `Function`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | `Function` | `undefined` |
| `wait` | `number` | `500` |
| `options` | `Object` | `undefined` |
| `options.leading` | `boolean` | `undefined` |
| `options.trailing` | `boolean` | `undefined` |

#### Returns

`Function`

___

### timeFormat

▸ **timeFormat**(`time`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `Date` |

#### Returns

`string`

___

### trim

▸ **trim**(`str`, `global?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `global` | `boolean` | `false` |

#### Returns

`string`

___

### uniqueArray

▸ **uniqueArray**(`arr`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `undefined` \| ``null`` \| `string` \| `Iterable`<`any`\> |

#### Returns

`any`[]

___

### uniqueId

▸ **uniqueId**(): `string`

#### Returns

`string`

___

### urlByObj

▸ **urlByObj**(`params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Returns

`Object`

___

### uuid

▸ **uuid**(`length`, `chars`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `chars` | `string` \| `any`[] |

#### Returns

`string`

___

### versionCount

▸ **versionCount**(`version`, `maxNum?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `version` | `string` | `undefined` |  |
| `maxNum` | `number` | `99` | - |

#### Returns

`string`
