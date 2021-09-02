/**
 * @description: 删除
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @return: undefined
 * @example:
  removeStorage('test')
  => undefined
 */
export declare const removeStorage: (key: any) => void;
/**
 * @description: 保存
 * @author: wuxh
 * @Date: 2020-05-06 11:56:29
 * @param {key}
 * @param {value}
 * @param {isJson}
 * @return: undefined
 * @example:
  saveStorage('test', '001')
  => undefined
 */
export declare const saveStorage: (key: string, value: string) => void;
/**
 * @description: 获取
 * @author: wuxh
 * @Date: 2020-05-06 12:00:37
 * @param {key}
 * @return: String
 * @example:
  getStorage('test')
  => '001'
 */
export declare const getStorage: (key: string) => string | null;
/**
 * @description: 是否支持local
 * @author: wuxh
 * @Date: 2020-05-06 12:01:43
 * @param
 * @return: Boolean
 * @example:
  isSupportStorage()
  => true
 */
export declare const isSupportStorage: () => boolean;
