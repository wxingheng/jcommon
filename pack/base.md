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
