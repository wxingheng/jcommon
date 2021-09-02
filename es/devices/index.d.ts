/**
 * @description: 获取用户系统平台信息
 * @author: wuxh
 * @Date: 2020-05-06 12:07:03
 * @param {e}
 * @return: {os: "mac", version: "10.15.3"}
 * @example:
  osInfo()
  => {os: "mac", version: "10.15.3"}
 */
interface osInfoResult {
    os: string | RegExp;
    version: string;
}
export declare const osInfo: (e: string) => osInfoResult;
export {};
