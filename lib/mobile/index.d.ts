/**
 * @description: 是否是QQ平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example:
  isQQ()
  => false
 */
export declare const isQQ: () => boolean;
/**
 * @description: 是否是微信平台
 * @author: wuxh
 * @Date: 2020-05-06 12:10:41
 * @param
 * @return: Boolean
 * @example:
  isWX()
  => false
 */
export declare const isWX: () => boolean;
/**
 * @description: 获取手机运营商
 * @author: wuxh
 * @Date: 2020-05-06 12:11:39
 * @param {}
 * @return: '移动' | '电信' | '联通' | '未知'
 * @example:
  operattelecom('13419595634') => 移动
 */
export declare const operattelecom: (e: string) => string | false;
/**
 * @description: 是否是安卓设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:04
 * @param {type}
 * @return: boolean
 * @example:
  isAndroidMobileDevice() => false
 */
export declare const isAndroidMobileDevice: () => boolean;
/**
 * @description: 是否是苹果设备
 * @author: wuxh
 * @Date: 2020-06-09 09:31:55
 * @param {type}
 * @return: boolean
 * @example:
  isAppleMobileDevice() => true
 */
export declare const isAppleMobileDevice: () => boolean;
