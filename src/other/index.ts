/*
 * @Author: wxingheng
 * @Date: 2022-05-04 11:40:27
 * @LastEditTime: 2022-05-04 14:22:31
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/src/other/index.ts
 */

/**
 * @description: 单击事件转换为多击事件
 * @author: wxingheng
 * @Date: 2022-05-04 14:20:22
 * @param {*} wait
 * @param {array} events
 * @return {*}
 * @example: oneClickToMoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack, ...)
 */
export const oneClickToMoreClick = function(wait = 300, ...events: Array<Function>): Function {
  let timer: any = null;
  let lastTime = 0;
  let count = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < wait ? count + 1 : 0;
    lastTime = new Date().getTime();
    events.forEach((event, i) => {
      if(i === count){
        timer = setTimeout(() => {
          count = 0;
          lastTime = 0;
          event(...args);
        }, wait);
      }
    })
  };
};