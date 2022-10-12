[jcommon文档库 - v1.9.17](../README.md) / [Exports](../modules.md) / EventBus

# Class: EventBus

## Table of contents

### Constructors

- [constructor](EventBus.md#constructor)

### Properties

- [listeners](EventBus.md#listeners)
- [maxListener](EventBus.md#maxlistener)

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

## Properties

### listeners

• `Private` **listeners**: `Object`

#### Index signature

▪ [x: `string`]: `any`

___

### maxListener

• `Private` **maxListener**: `number`

## Methods

### addListener

▸ **addListener**(`event`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `cb` | `Function` |

#### Returns

`void`

___

### emit

▸ **emit**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`void`

___

### getListeners

▸ **getListeners**(`event`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`any`

___

### once

▸ **once**(`event`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `cb` | `Function` |

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
| `listener` | `Function` |

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
