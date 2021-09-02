/**
 * @description: 获取浏览器相关信息
 * @author: wuxh
 * @Date: 2020-05-06 11:53:35
 * @param {}
 * @return: Object
 * @example:
  getBrowserInfo()
  => {name: "Chrome", version: "81.0.4044.129"}
 */
interface getBrowserInfoResult {
    name: string | RegExp;
    version: string;
}
export declare const getBrowserInfo: () => getBrowserInfoResult;
export {};
