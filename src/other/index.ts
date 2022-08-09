/*
 * @Author: wxingheng
 * @Date: 2022-05-04 11:40:27
 * @LastEditTime: 2022-08-09 14:22:48
 * @LastEditors: wxingheng
 * @Description: 暂时未归类的方法
 * @FilePath: /jcommon/src/other/index.ts
 */

import { isFunc } from "../index";

/**
 * @description: 单击事件转换为多击事件
 * @author: wxingheng
 * @Date: 2022-05-04 14:20:22
 * @param {*} wait
 * @param {array} events
 * @return {*}
 * @example: 
 *    // 连续点击一次触发，连续点击两次触发，连续点击三次触发
        var oneClickToMoreClickCallBack = jcommon.oneClickToMoreClick(300, () => {
            console.log(111)
        }, () => {
            console.log(222)
        }, ()=> {
            console.log(333)
        })
        dom.addEventListener('click', oneClickToMoreClickCallBack);
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
          if(isFunc(event)){
            event(...args);
         } 
        }, wait);
      }
    })
  };
};


/**
 * @description: 单击事件转换为多击事件
 * @author: wxingheng
 * @Date: 2022-08-09 14:03:34
 * @param {Function} fun 回调函数
 * @param {*} n 连续几次触发才触发回调函数
 * @param {*} wait 两次之间的间隔时间
 * @return {*}
 * @example:  const dobuleClick = moreClick(handleClick)
    // 连续点击三次触发
        var moreClickCallBack = jcommon.moreClick(() => {
            console.log("moreClickCallBack")
        }, 3)
        dom.addEventListener('click', moreClickCallBack);
 */
export const moreClick = function(fun: Function, n = 2,  wait = 300) {
  let timer:any = null;
  let lastTime = 0;
  let count = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < wait ? count + 1 : 0;
    lastTime = new Date().getTime();
    if(count === n){
      timer = setTimeout(() => {
        count = 0;
        lastTime = 0;
       if(isFunc(fun)){
          fun(...args);
       } 
    }, wait);
    }
  }
}
