/**
 * @description: 去除字符串空格, 默认去除前后空格 （常用）
 * @author: wuxh
 * @Date: 2020-05-06 13:43:52
 * @param {str} String
 * @param {global} Boolean
 * @return: String
 * @example:
  trim('   1 1 1   ') => '1 1 1'
  trim('   1 1 1   ', true) => '111'
 */
export declare const trim: (str: string, global?: boolean) => string;
/**
 * @description: 身份证号码解析性别
 * @author: wuxh
 * @Date: 2020-06-09 09:16:28
 * @param {type}
 * @return: 'FEMALE' ｜ 'MALE'
 * @example:
   getSexByIdNO('421182199409274710') => MALE
 */
export declare const getSexByIdNO: (IdNO: string) => 'FEMALE' | 'MALE' | '';
/**
 * @description: 身份证号码解析出生日期
 * @author: wuxh
 * @Date: 2020-06-09 09:17:50
 * @param {type}
 * @return: string
 * @example:
  getBirthdatByIdNo('421182199409274710') => '1994-09-27'
 */
export declare const getBirthdatByIdNo: (iIdNo: string) => string;
/**
 * @description: 隐藏身份证号码
 * @author: wuxh
 * @Date: 2020-06-09 09:19:26
 * @param {type}
 * @return: string
 * @example:
  hideIdNum('421182199409274710') => 4****************0
 */
export declare const hideIdNum: (str: string) => string;
/**
 * @description: 随机数 + 时间戳
 * @author: wuxh
 * @Date: 2020-06-09 09:47:34
 * @param {type}
 * @return: string
 * @example:
  uniqueId() => '1591667193048544'
 */
export declare const uniqueId: () => string;
/**
 * @description: 版本号累加
 * @author: wuxh
 * @Date: 2021-08-24 11:19:07
 * @param {*} version : string
 * @return {*} string
 * @example: versionCount('0.0.1') => '0.0.2'
 * versionCount('0.2.9') => '0.3.0'
 * versionCount('0.2.9.1') => '0.2.9.2'
 */
export declare const versionCount: (version: string) => string;
/**
 * @description: 获取文件后缀名
 * @author: wuxh
 * @Date: 2021-09-02 22:17:57
 * @param {string} filename
 * @return {*}
 * @example:
 getExt("1.mp4") => mp4
 */
export declare const getExt: (filename: string) => string | undefined;
/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
/**
 * @description: 生成随机字符串,第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
 * @author: wuxh
 * @Date: 2021-09-02 22:29:02
 * @param {number} length
 * @param {string} chars
 * @return {string}
 * @example:
 uuid() => 'ghijklmn'
 */
export declare const uuid: (length: number, chars: string | any[]) => string;
