/**
 * @description: 获取多级数据避免出错（超级好用）
 * @author: wuxh
 * @Date: 2020-05-06 12:13:59
 * @param {defaultResult, ...any} args
 * @return: any
 * @example:
  getV('', {name: {children: 123}}, 'name', 'children')
  => 123
 */
export declare const getV: <T>(defaultResult: T, ...args: any) => any;
/**
 * @description: 深拷贝，克隆（只包含可遍历属性<常用>）
 * @author: wuxh
 * @Date: 2020-05-06 12:14:45
 * @param {obj}
 * @return: Object
 * @example:
  clone({name: 123})
  => {name: 123}
 */
export declare const cloneObj: (obj: any) => any;
/**
 * @description: 简单的深拷贝
 * @author: wuxh
 * @Date: 2021-09-02 22:33:47
 * @param {any} obj
 * @return {any} obj
 * @example:
 const person={name:'xiaoming',child:{name:'Jack'}}
 cloneJson(person) => {name:'xiaoming',child:{name:'Jack'}}
 */
export declare const cloneJson: (obj: any) => any;
/**
 * @description: 深度合并对象(当前用于合并系统配置文件 app-data.json) 已存在的属性默认不覆盖
 * @author: wuxh
 * @Date: 2020-05-06 12:15:30
 * @param {oldObj}
 * @param {newObj}
 * @param {keys} 强制覆盖属性的key组成的数组
 * @return: Object
 * @example:
  mergeObj({name: 111}, {name:333, value: 222}, []) => {name: 111, value: 222}
  mergeObj({name: 111}, {name:333, value: 222}, ['name']) => {name: 333, value: 222}
 */
export declare const mergeObj: (oldObj: {
    [x: string]: any;
}, newObj: {
    [x: string]: any;
}, keys: string | string[]) => {
    [x: string]: any;
};
/**
 * @description: 判断对象是否为空
 * @author: wuxh
 * @Date: 2021-08-21 23:08:42
 * @param {string} obj
 * @return {*} boolean
 * @example: isEmptyObject({}) => true
 */
export declare const isEmptyObject: (obj: any) => boolean;
/**
 * @description: cleanObject 去除对象中value为空(null,undefined,'')的属性
 * @author: wuxh
 * @Date: 2021-09-02 22:07:34
 * @param {*} { [k: string]: any }
 * @return {*} { [k: string]: any }
 * @example:
 cleanObject({
  name: '',
  pageSize: 10,
  page: 1
}) => {
  pageSize: 10,
  page: 1
}
 */
export declare const cleanObject: (object: {
    [k: string]: any;
}) => {
    [k: string]: any;
};
