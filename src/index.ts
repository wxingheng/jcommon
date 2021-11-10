/*
 * @Author: wuxh
 * @Date: 2021-08-22 12:46:08
 * @LastEditTime: 2021-11-10 11:59:48
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/index.ts
 */
export { doubleRanking, randomData, arrByObj, uniqueArray } from './array/index'

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

export { scopeRandom, cutNumber } from './math/index'

export {
  isQQ,
  isWX,
  operattelecom,
  isAndroidMobileDevice,
  isAppleMobileDevice
} from './mobile/index'

export {
  getV,
  cloneObj,
  mergeObj,
  isEmptyObject,
  cleanObject,
  cloneJson
} from './object/index'

export {
  trim,
  getSexByIdNO,
  getBirthdatByIdNo,
  hideIdNum,
  uniqueId,
  versionCount,
  getExt,
  uuid,
  endWith
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
  isEmail,
  isFalsy,
  isVoid
} from './validate/index'
export { debounce } from './debounce/index'
export { throttle } from './throttle/index'
export { download, downloadFile, copyToBoar } from './dom/index'
export { sleep } from './sleep/index'
export { getFormData } from './form/index'
export { formatRhBloodGroup, sorterCallBack } from './blood/index'

export { Queue } from './queue/index'
export { EventBus } from './eventBus/index'
