/*
 * @Author: wuxh
 * @Date: 2021-08-22 12:46:08
 * @LastEditTime: 2021-09-02 21:52:26
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/index.ts
 */
export { doubleRanking, randomData, arrByObj } from './array/index'

export { getBrowserInfo } from './browser/index'

export {
  removeStorage,
  saveStorage,
  getStorage,
  isSupportStorage
} from './cache/index'

export { getCookie } from './cookie/index'

export {
  dateInterval,
  addZero,
  dateFormat,
  dateMonthDays,
  timeFormat,
  getCountDays
} from './date/index'

export { osInfo } from './devices/index'

export { scopeRandom } from './math/index'

export {
  isQQ,
  isWX,
  operattelecom,
  isAndroidMobileDevice,
  isAppleMobileDevice
} from './mobile/index'

export { getV, cloneObj, mergeObj, isEmptyObject } from './object/index'

export {
  trim,
  getSexByIdNO,
  getBirthdatByIdNo,
  hideIdNum,
  uniqueId,
  versionCount
} from './string/index'

export { getUrlQuery, everyTrim, formatQueryParam, urlByObj } from './url/index'

export {
  isUserId,
  isType,
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isFunc,
  isDate,
  isArray,
  isReg,
  isError,
  isObject,
  isPhone,
  isEmail
} from './validate/index'
export { debounce } from './debounce/index'
export { throttle } from './throttle/index'


export { Queue } from './queue/index'
export { EventBus } from './eventBus/index'
