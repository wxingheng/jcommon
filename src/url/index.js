/** --------------------url处理相关----------------------------- */

/**
 * 获取url中的一个参数
 * @param {*} name
 * jUrlGetQuery('ie')
 * 'utf-8'
 */
export const jUrlGetQuery = function (name) {
  const u = arguments[1] || window.location.search,
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
  return r != null ? r[2] : ''
}
