/** --------------------模版----------------------------- */

/**
 * 是否是QQ平台
 */
export const jMobIsQQ = function () {
  if (/qq\/([\d\.]+)*/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * 是否是微信平台
 */
export const jMobIsWX = function () {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

/**
 * 获取手机运营商
 * 
 */
export const jMobOperator = function(){

}

