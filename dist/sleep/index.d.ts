/**
 * @description: 休眠多少毫秒
 * @author: wuxh
 * @Date: 2021-09-02 23:08:19
 * @param {number} milliseconds
 * @return {*}
 * @example:
  fetchData = async () => {
    await sleep(1000)
  }
 */
export declare const sleep: (milliseconds: number | undefined) => Promise<unknown>;
