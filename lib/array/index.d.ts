/**
 * @description: 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
 * @author: wuxh
 * @Date: 2020-05-06 11:37:17
 * @param {arr} 需要处理的数组
 * @param {options} 额外参数
 * @return: {Array} [排序后的数组]
 * @example:
   doubleRanking(
      [
        {education: '本科', age: 26},
        {education: '小学', age: 25},
        {education: '本科', age: 24},
        {education: '小学', age: 23}
      ],
      {
        filterRuleKey: 'education',
        rule: ['小学', '本科'],
        sortKey: 'age',
        sortOrder: 1
      }
    )
    => [
        {education: '小学', age: 24},
        {education: '小学', age: 26}
        {education: '本科', age: 23},
        {education: '本科', age: 25},
      ]
*/
interface DoubleRankingOption {
    filterRuleKey: string;
    rule: string[];
    sortKey: string;
    sortOrder: number;
}
export declare const doubleRanking: (arr: {
    [key: string]: any;
}[], options: DoubleRankingOption) => any[];
/**
 * @description: 产生随机数据
 * @author: wuxh
 * @Date: 2020-05-06 11:41:08
 * @param {num} 数量
 * @param {arr} 每个元素对象的keys
 * @return: {Array}
 * @example:
  randomData(2, ['name', 'value'])
  => [{"name":"name323","value":"value699"},{"name":"name573","value":"value393"}]
 */
export declare const randomData: (num: number, arr: any[]) => {
    [key: string]: any;
}[];
/**
 * @description: 数值转对象 （常用于处理后台返回的枚举转换，工作中很常用）
 * @author: wuxh
 * @Date: 2020-05-06 11:51:49
 * @param {arr} 需要转换的数组
 * @param {key} 需要作为转换后对象的key
 * @param {v} 对象的value取值，默认是数组的每一个元素作为值
 * @return: Object
 * @example:
  const arr = arr = [{name: 111, value: 222},{name: 333, value:444}]
  arrByObj(arr, 'name')   =>    {"111":{"name":111,"value":222},"333":{"name":333,"value":444}}
  arrByObj(arr, 'name', value)   =>    {"111":222,"333":444}
 */
export declare const arrByObj: (arr: {
    [key: string]: any;
}[], key: string, v?: string) => {
    [key: string]: any;
};
/**
 * @description: 简单数组去重，Set 处理
 * @author: wuxh
 * @Date: 2021-09-02 22:41:08
 * @param {string} arr
 * @return {*}
 * @example:
 uniqueArray([1,1,1,1,1]) => [1]
 */
export declare const uniqueArray: (arr: string | Iterable<any> | null | undefined) => any[];
export {};
