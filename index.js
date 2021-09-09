/*
 * @Author: wuxh
 * @Date: 2021-09-08 16:05:47
 * @LastEditTime: 2021-09-08 16:56:27
 * @LastEditors: wuxh
 * @Description: 
 * @FilePath: /jcommon/index.js
 */
// /*
//  * @Author: wuxh
//  * @Date: 2021-09-08 16:05:47
//  * @LastEditTime: 2021-09-08 16:55:00
//  * @LastEditors: wuxh
//  * @Description:
//  * @FilePath: /jcommon/index.js
//  */
// function count (version) {
//   let s = version.split('.').map(v => Number(v))
//   const nan = s.some(v => isNaN(v))
//   if (nan) {
//     return version
//   }
//   for (let i = s.length - 1; i >= 0; i--) {
//     for (let j = s.length - 1; j >= 0; j--) {
//       if (s[j] >= 99) {
//         // s[j] = 0
//         // s[j - 1]++
//       }else{
//         s[j]++
//       }
//     }
//   }

//   return s
//   // return 'bate' + 1
//   // const s = version.split('.');
//   // return version.split('.')
//   //   return String(parseInt(version.replace(/\./g, '')) + 1)
//   // .padStart(version.split('.').length, '0')
//   // .split('')
//   // .join('.')
// }
// //  3.0.0
// console.log('--', count('2.99.98'))
