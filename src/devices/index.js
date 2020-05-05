/** --------------------用户设备相关----------------------------- */


/**
 * 获取用户系统平台信息
 * @param {*} e 
 */
export const jOsInfo = function (e) {
  e = e || navigator.userAgent
  for (
    const t = {
        os: 'other',
        version: ''
      },
      r = [
        ['android', /Android;?[\s\/]+([\d.]+)?/],
        ['android', /jdapp;android;[\d.]+;([\d.]+);/],
        ['android', /[aA]ndroid;/],
        ['ipad', /iPad;.*?OS\s([\d_]+)/],
        ['ipod', /iPod(?:\stouch)?;.*?\sOS\s([\d_]+)?/],
        ['iphone', /CPU\siPhone\s(?:OS\s)?([\d_]+)/],
        ['windows', /Windows NT/],
        ['mac', /Macintosh;.*?Mac OS X\s([\d._]+)/],
        ['windows phone', /Windows Phone\s([\d.]+)?/],
        ['symbianos', /SymbianOS\/([\d.]+)?/],
        ['bb', /BlackBerry|BB10|RIM Tablet OS\s([\d.]+)?/],
        ['linux', /linux/i]
      ],
      o = 0;
    o < r.length;
    o++
  ) {
    const i = r[o],
      a = e.match(i[1])
    if (a) {
      ;(t.os = i[0]), (t.version = (a[1] || '').replace(/_/g, '.'))
      break
    }
  }
  return t
}
