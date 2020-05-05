/** --------------------浏览器方法----------------------------- */

export const jBroGetInfo = function () {
  let e,
    t,
    r,
    o = {
      name: 'other',
      version: '0'
    },
    i = navigator.userAgent.toLowerCase()
  for (
    t = [
      ['WeiXin', /micromessenger\/([^\s]+)/],
      ['QQ', /qq\/([^\s]+)/],
      ['QQBrowser', /(?:qqbrowser|qqlivebrowser)\/([^\s]+)/],
      ['JDAPP', /jdapp;/],
      ['QIHU', /qihu|360se/],
      ['LieBao', /(?:lbbrowser|liebaofast)\/?([\d\.]+)?/],
      ['Sogou', /(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/],
      ['Opera', /(?:opera|opr|oupeng)\/([\d\.]+)/],
      ['BaiduBrowser', /(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/],
      ['BaiduBox', /baiduboxapp|baiduboxpad/],
      ['UC', /(?:ucweb|ucbrowser)\/?([\d\.]+)/],
      ['Maxthon', /maxthon\/([\d\.]+)/],
      ['Samsung', /samsungbrowser\/([\d\.]+)/],
      ['Dolphin', /aphone|apad/],
      ['2345', /2345/],
      ['Miui', /miuibrowser\/([\d\.]+)/],
      ['OppoBrowser', /oppobrowser\/([\d\.]+)/],
      ['MeiZu', /mz-/],
      ['Weibo', /weibo/],
      ['Youku', /youku/],
      ['NewsApp', /newsapp/],
      ['AliApp', /aliapp/],
      ['Firefox', /firefox\/([\d\.\w]+)/],
      ['Chrome', /chrome\/([\d\.]+)/],
      ['IE', /msie[ ](\d+\.\d+)/],
      ['Safari', /safari\/([\d\.]+)/]
    ],
      e = 0;
    e < t.length;
    e++
  )
    if ((r = i.match(t[e][1]))) {
      ;(o.name = t[e][0]), (o.version = r[1] || '0')
      break
    }
  return o
}
