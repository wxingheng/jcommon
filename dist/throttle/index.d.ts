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
export declare const throttle: (func: Function, wait: number | undefined, options: {
    leading: boolean;
    trailing: boolean;
}) => Function;
