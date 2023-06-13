/*
 * @Author: wxingheng
 * @Date: 2022-05-04 11:40:27
 * @LastEditTime: 2023-06-13 16:14:18
 * @LastEditors: wxingheng
 * @Description: 暂时未归类的方法
 * @FilePath: /jcommon/src/other/index.ts
 */

import { isFunc, sleep } from '../index'

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
export const oneClickToMoreClick = function (
  wait = 300,
  ...events: Array<(...args: any[]) => void>
): () => void {
  let timer: any = null
  let lastTime = 0
  let count = 0
  return (...args: any[]) => {
    clearTimeout(timer)
    const currentTime = new Date().getTime()
    count = currentTime - lastTime < wait ? count + 1 : 0
    lastTime = new Date().getTime()
    events.forEach((event, i) => {
      if (i === count) {
        timer = setTimeout(() => {
          count = 0
          lastTime = 0
          if (isFunc(event)) {
            event(...args)
          }
        }, wait)
      }
    })
  }
}

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
export const moreClick = function (
  fun: (...args: any) => void,
  n = 2,
  wait = 300
) {
  let timer: any = null
  let lastTime = 0
  let count = 0
  return (...args: any[]) => {
    clearTimeout(timer)
    const currentTime = new Date().getTime()
    count = currentTime - lastTime < wait ? count + 1 : 0
    lastTime = new Date().getTime()
    if (count === n) {
      timer = setTimeout(() => {
        count = 0
        lastTime = 0
        if (isFunc(fun)) {
          fun(...args)
        }
      }, wait)
    }
  }
}

/**
 * @description: 产生一个随机颜色
 * @author: wxingheng
 * @Date: 2022-09-30 11:13:13
 * @return {*}
 * @example: randomColor() => "rgba(107, 35, 72, 1)";
 */
export const randomColor = function (): any {
  return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 1)`
}

/**
 * @description: 比例计算
 * @author: wxingheng
 * @Date: 2022-09-30 11:13:27
 * @param {number} value 当前值
 * @param {number} source  当前值所在的区间
 * @param {number} target 目标区间
 * @param {any} toFixedLength 保留小数位数
 * @return {*}
 * @example:  scaleLinear(50, 100, 10, 2) => 5; scaleLinear(50, 100, 10, 0) => 5;
 */
export const scaleLinear = function (
  value: number,
  source: number,
  target: number,
  toFixedLength: any = 2
): any {
  return ((value / source) * target).toFixed(toFixedLength)
}

/**
 * @description: 转换请求为慢响应
 * @param {*} func 请求函数
 * @param {*} fastestTime 最快响应时间
 * @return {*}
 * @example: const data = await fetchToSlow(1000 * 2)(getKgDetail(kg_id));
 */
export const fetchToSlow = function (
  fastestTime: number | undefined
): (func: any) => any {
  return (func: any): any =>
    new Promise(resolve => {
      Promise.all([func, sleep(fastestTime)]).then(args => {
        resolve(args[0])
      })
    })
}

/**
 * @description:  处理流响应数据
 * @author: wxingheng
 * @Date: 2023-06-13 16:14:34
 * @param {any} response
 * @param {object} typewriter
 * @return {*}
 * @example:
 */
export const processStreamResponse = async (
  response: any,
  typewriter: { start: () => void; done: () => void; add: (arg0: any) => void }
) => {
  const decoder = new TextDecoder('utf-8')
  const reader = response.body.getReader()

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        typewriter.done()
        break
      }
      const chunk = decoder.decode(value)

      const lines = chunk.split(/(\n){2}/)

      const parsedLines = lines
        .map(line => line.replace(/(\n)?^data:\s*/, '').trim())
        .filter(line => line !== '' && line !== '[DONE]')
        .map(line => {
          try {
            return JSON.parse(line)
          } catch (error) {
            console.log(error)
            return {
              choices: [
                {
                  delta: {
                    content: ''
                  }
                }
              ]
            }
          }
        })
      for (const parsedLine of parsedLines) {
        let chunkContent = parsedLine.choices[0].delta.content ?? ''
        chunkContent = chunkContent.replace(/^`\s*/, '`')
        typewriter.add(chunkContent)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
