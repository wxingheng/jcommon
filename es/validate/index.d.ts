/**
 * @description: 身份证号码校验（精准）
 * @author: wuxh
 * @Date: 2020-05-06 13:49:58
 * @param {e}
 * @return: String<msg> | Boolean
 * @example:
  isUserId('421182199409274710') => ''
  isUserId('421182199409') => '身份证号码长度应该为18位'
 */
export declare const isUserId: (e: string) => "身份证号码不能为空" | "身份证号码长度应该为18位" | "身份证格式错误" | "身份证生日无效。" | "身份证生日不在有效范围" | "身份证月份无效" | "身份证日期无效" | "身份证地区编码错误" | "" | "不是合法的身份证号码";
/**
 * @description: 精准判断数据类型
 * @author: wuxh
 * @Date: 2020-05-06 13:51:50
 * @param {data} any
 * @param {type} type  'String' | 'Number' | 'Boolean' | 'Undefined' | 'Null' | 'Function' | 'Date' | 'Array' | 'RegExp' | 'Error' | 'Object'
 * @return: Boolean
 * @example:
  isType(123, 'String') => false
  isType('123', 'String') => true
 */
export declare const isType: (data: any, type: string) => boolean;
/**
 * @description: 判断String类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isString(123) => false
  isString('') => true
 */
export declare const isString: (data: any) => boolean;
/**
 * @description: 判断Number类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNumber(123) => true
  isNumber('') => false
 */
export declare const isNumber: (data: any) => boolean;
/**
 * @description: 判断Boolean类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isBoolean(false) => true
  isBoolean('false') => false
 */
export declare const isBoolean: (data: any) => boolean;
/**
 * @description: 判断Undefined类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isUndefined(undefined) => true
  isUndefined('undefined') => false
 */
export declare const isUndefined: (data: any) => boolean;
/**
 * @description: 判断Null类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isNull(null) => true
  isNull('null') => false
 */
export declare const isNull: (data: string) => boolean;
/**
 * @description: 判断Function类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isFunc(() => 123) => true
  isFunc(123) => false
 */
export declare const isFunc: (data: any) => boolean;
/**
 * @description: 判断Date类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isDate(() => new Date()) => false
  isDate(new Date()) => true
 */
export declare const isDate: (data: any) => boolean;
/**
 * @description: 判断Array类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isArray([]) => true
  isArray(![]) => false
 */
export declare const isArray: (data: any) => boolean;
/**
 * @description: 判断RegExp类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isReg(new RegExp()) => true
  isReg(![]) => false
 */
export declare const isReg: (data: any) => boolean;
/**
 * @description: 判断Error类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isError(new Error()) => true
  isError(![]) => false
 */
export declare const isError: (data: any) => boolean;
/**
 * @description: 判断Object类型
 * @author: wuxh
 * @Date: 2020-05-06 13:53:16
 * @param {data} any
 * @return: Boolean
 * @example:
  isObject({}) => true
  isObject(![]) => false
 */
export declare const isObject: (data: any) => boolean;
/**
 * @description: 手机号校验
 * @author: wuxh
 * @Date: 2020-06-09 09:21:15
 * @param {type}
 * @return: boolean
 * @example:
  isPhone('13419595634') => true
 */
export declare const isPhone: (phone: string) => boolean;
/**
 * @description: 校验是否为邮箱地址
 * @author: wuxh
 * @Date: 2020-06-09 09:49:29
 * @param {type}
 * @return: boolean
 * @example:
  isEmail('wxingheng@outlook.com') => true
 */
export declare const isEmail: (str: string) => boolean;
/**
 * @description: 判断 js是否是false， 0除外。
 * @author: wuxh
 * @Date: 2021-09-02 22:01:50
 * @param {any} value
 * @return {*} value === 0 ? false : !value
 * @example:
 isFalsy('') => true
 isFalsy(0) => false
 isFalsy(null) => true
 isFalsy(undefined) => true
 */
export declare const isFalsy: (value: any) => boolean;
/**
 * @description: 判断是否为空 undefined || null || ""
 * @author: wuxh
 * @Date: 2021-09-02 22:03:36
 * @param {any} value
 * @return {*} boolean
 * @example:
 isVoid(0) => false
 isVoid(undefined) => true
 isVoid('') => true
 isVoid(null) => true
 isVoid() => true
 */
export declare const isVoid: (value: any) => boolean;
