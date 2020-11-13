/*
 * @Author: wuxh
 * @Date: 2020-04-30 09:07:39
 * @LastEditTime: 2020-11-13 11:01:51
 * @LastEditors: wuxh
 * @Description: 血液行业相关
 * @FilePath: /jcommon/src/blood/index.js
 * @https://github.com/wxingheng/jcommon
 */

/**
 * @description: 根据序列号计算校验位
 * @author: wuxh 
 * @Date: 2020-05-06 11:37:17
 * @param {serialNo} 序列号
 * @return: {CHECK} 校验位
 * @example: 
      calCheckChar('0051117014765') ==> M
      calCheckChar('4401119000060') ==> E
      calCheckChar('4401119000010') ==> Y
*/
export const calCheckChar = function (serialNo) {
  if (serialNo.length >= 13) {
    serialNo = serialNo.substring(0, 13)
  } else {
    throw new Error('序列号格式不对，请检查')
  }
  const iso7064ValueToCharTable = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*'
  let sum = 0,
    charValue,
    isDigit,
    isUpperAlpha
  serialNo.split('').forEach(ch => {
    isDigit = ch >= '0' && ch <= '9'
    isUpperAlpha = ch >= 'A' && ch <= 'Z'
    if (isDigit || isUpperAlpha) {
      if (isDigit) {
        charValue = ch - '0'
      } else {
        charValue = ch - 'A' + 10
      }
      sum = ((sum + charValue) * 2) % 37
    }
  })
  charValue = (38 - sum) % 37
  // console.log('serialNo:', serialNo, 'CHECK:', iso7064ValueToCharTable[charValue])
  return iso7064ValueToCharTable[charValue]
}
