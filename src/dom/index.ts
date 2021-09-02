/*
 * @Author: wuxh
 * @Date: 2021-09-01 23:24:46
 * @LastEditTime: 2021-09-02 22:22:13
 * @LastEditors: wuxh
 * @Description: 浏览器 DOM 相关
 * @FilePath: /jcommon/src/dom/index.ts
 */

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
export const download = function (link: string, name: string) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1)
  }
  let eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = link
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

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
export const downloadFile = function (name: string, content: BlobPart) {
  if (typeof name == 'undefined') {
    throw new Error('The first parameter name is a must')
  }
  if (typeof content == 'undefined') {
    throw new Error('The second parameter content is a must')
  }
  if (!(content instanceof Blob)) {
    content = new Blob([content])
  }
  const link = URL.createObjectURL(content)
  download(link, name)
}

/**
 * @description: 复制内容到剪贴板
 * @author: wuxh
 * @Date: 2021-09-02 22:22:03
 * @param {string} value
 * @return {*} boolean
 * @example: 
 copyToBoard('lalallala') => true // 如果复制成功返回true
 */
export const copyToBoar = function (value: string): boolean {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }
  document.body.removeChild(element)
  return false
}
