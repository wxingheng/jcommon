/**
 * @description: 下载一个链接文档
 * @author: wuxh
 * @Date: 2021-09-01 23:27:00
 * @param {string} link
 * @param {string} name
 * @return {*}
 * @example:
 * download('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F04%2F20200804215427_fc3ff.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633102668&t=5f2cf4e9273be91527efb91ecd5cb6dd')
 * 下载后端返回的流
 *
 */
export declare const download: (link: string, name: string) => void;
/**
 * @description: 在浏览器中自定义下载一些内容
 * @author: wuxh
 * @Date: 2021-09-01 23:32:30
 * @param {string} name
 * @param {BlobPart} content
 * @return {*}
 * @example: 场景：我想下载一些DOM内容，我想下载一个JSON文件
 *
 * downloadFile('1.txt','lalalallalalla')
   downloadFile('1.json',JSON.stringify({name:'hahahha'}))
 */
export declare const downloadFile: (name: string, content: BlobPart) => void;
/**
 * @description: 复制内容到剪贴板
 * @author: wuxh
 * @Date: 2021-09-02 22:22:03
 * @param {string} value
 * @return {*} boolean
 * @example:
 copyToBoard('lalallala') => true // 如果复制成功返回true
 */
export declare const copyToBoar: (value: string) => boolean;
