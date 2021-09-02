/*
 * @Author: wuxh
 * @Date: 2021-09-02 22:24:01
 * @LastEditTime: 2021-09-02 23:11:09
 * @LastEditors: wuxh
 * @Description: 休眠
 * @FilePath: /jcommon/src/sleep/index.ts
 */



/**
 * @description: 休眠多少毫秒
 * @author: wuxh
 * @Date: 2021-09-02 23:08:19
 * @param {number} milliseconds
 * @return {*}
 * @example: 
  fetchData = async () => {
    await sleep(1000)
  }
 */
export const sleep = function (milliseconds: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
