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
export declare const getFormData: (object: {
    [x: string]: string | Blob;
}) => FormData;
