/**
 * @description: 获取浏览器url中的一个参数
 * @author: wuxh
 * @Date: 2020-05-06 13:46:28
 * @param {name}
 * @return: String
 * @example:
  getUrlQuery(age)
  => 25
 */
export declare const getUrlQuery: (name: string) => string;
/**
 * @description: 去除值类型为string的前后空格
 * @author: wuxh
 * @Date: 2021-08-21 22:11:23
 * @param {Array} data
 * @return {*}
 * @example: everyTrim({name: '  123  ', arr: [' 33 ']}) => {name: '123': arr: ['33']}
 */
export declare const everyTrim: (data: Array<any> | Object) => any;
/**
 * @description: 格式化GET请求的请求头
 * @author: wuxh
 * @Date: 2020-05-06 13:47:40
 * @param {obj}
 * @return: String
 * @example:
  formatQueryParam({name: 1, value: 123})
  =>  "name=1&value=123"
 */
export declare const formatQueryParam: (obj: {
    [key: string]: any;
}) => string;
/**
 * @description: 处理url参数(window.location.search)转换为 {key: value}
 * @author: wuxh
 * @Date: 2020-05-06 13:48:36
 * @param {params}
 * @return: Object
 * @example:
  urlByObj(?ie=UTF-8&wd=asd)
  => {ie: UTF-8, wd: asd}
 */
export declare const urlByObj: (params: string) => {
    [key: string]: string;
};
