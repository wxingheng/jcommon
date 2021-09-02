/**
 * @description: 范围随机整数
 * @author: wuxh
 * @Date: 2020-05-06 12:09:34
 * @param {str}
 * @param {end}
 * @return: Number
 * @example:
  scopeRandom(1, 10)
  => 3
 */
export declare const scopeRandom: (str: number, end: number) => number;
/**
 * @description: 保留到小数点以后n位
 * @author: wuxh
 * @Date: 2021-09-02 22:54:36
 * @param {number} number
 * @param {*} no
 * @return {*} Number
 * @example:
 cutNumber('3123.22312') => 3123.22
 */
export declare const cutNumber: (number: number, no?: number) => Number;
