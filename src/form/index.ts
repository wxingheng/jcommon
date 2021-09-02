/*
 * @Author: wuxh
 * @Date: 2021-09-02 22:49:06
 * @LastEditTime: 2021-09-02 22:53:28
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/src/form/index.ts
 */

/**
 * @description: 对象转化为FormData对象
 * @author: wuxh
 * @Date: 2021-09-02 22:52:34
 * @param {object} object
 * @return {FormData}
 * @example: 
 let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
 */
export const getFormData = function (object: {
  [x: string]: string | Blob
}): FormData {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue))
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}
