/*
 * @Author: wuxh
 * @Date: 2021-09-02 21:46:22
 * @LastEditTime: 2021-09-02 21:55:37
 * @LastEditors: wuxh
 * @Description: 节流
 * @FilePath: /jcommon/src/throttle/index.ts
 */

/**
 * @description: 节流 多次调用方法，按照一定的时间间隔执行
 * @author: wuxh
 * @Date: 2021-09-02 21:46:38
 * @param {*} func
 * @param {*} wait
 * @param {*} options: { leading: boolean; trailing: boolean }
 * @return {*} Function
 * @example: 
 *
leading，函数在每个等待时延的开始被调用，默认值为false
trailing，函数在每个等待时延的结束被调用，默认值是true
可以根据不同的值来设置不同的效果：
leading-false，trailing-true：默认情况，即在延时结束后才会调用函数
leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用
leading-true, trailing-false：只在延时开始时调用
 */
export const throttle = function(func: Function, wait=500, options: { leading: boolean; trailing: boolean }): Function {
    //container.onmousemove = throttle(getUserAction, 1000);
    let timeout: NodeJS.Timeout | null, context: null, args: IArguments | null
    let previous = 0
    if (!options) options = {leading:false,trailing:true}

    const later = function() {
        previous = options.leading === false ? 0 : new Date().getTime()
        timeout = null
        func.apply(context, args)
        if (!timeout) context = args = null
    }

    const throttled = function() {
        var now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        var remaining = wait - (now - previous)
        context = null
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled
}