/**
 * @description: debounce 防抖, 固定时间内持续触发，只执行最后一次
 * @author: wuxh
 * @Date: 2021-09-02 21:30:44
 * @param {*} Function 要进行debouce的函数
 * @param {*} wait 等待时间,默认500ms
 * @param {*} immediate 是否立即执行
 * @return {*} Function
 * @example:
 * function onInput() {
                console.log('1111')
            }
            const debounceOnInput = debounce(onInput)
            document
                .getElementById('input')
                .addEventListener('input', debounceOnInput)
 *
 */
export declare const debounce: (func: Function, wait?: number, immediate?: boolean) => Function;
