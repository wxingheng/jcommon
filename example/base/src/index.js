/*
 * @Author: wuxh
 * @Date: 2020-04-29 10:01:50
 * @LastEditTime: 2021-09-22 23:30:40
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/example/base/src/index.js
 */

// import { cArrDoubleRanking } from 'jcommon/array';

// import { isObject } from 'jcommon'
// import {  } from '../../../dist/index.min'

// console.log(isObject)

// console.log('isObject', isObject({}))
// console.log('isObject', isObject([]))

import { isArray, debounce, throttle, EventBus } from 'jcommon'

// console.log('isArray==>', isArray([]))

// function onInput (e) {
//   console.log('11', e, e.target.value)
// }
// const debounceOnInput = debounce(onInput)
// document.getElementById('input').addEventListener('input', debounceOnInput) //在Input中输入，多次调用只会在调用结束之后，等待500ms触发一次


// function onInput() {
//   console.log('1111')
// }
// const throttleOnInput = throttle(onInput)
// document
//   .getElementById('input')
//   .addEventListener('input', throttleOnInput) 

console.log('EventBus', new EventBus().emit)
