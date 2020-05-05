/** --------------------数组方法----------------------------- */

/**
  * 处理复杂数组的两级排序（一级按照自定义顺序，二级可正序倒序）
  * @param {*} arr 需要处理的数组
  * @param {*} options 额外参数
      
    jArrDoubleRanking(
      [
        {education: '本科', age: 26},
        {education: '小学', age: 25},
        {education: '本科', age: 24},
        {education: '小学', age: 23}
      ],
      {
        filterRuleKey: 'education',
        rule: ['小学', '本科'],
        sortKey: 'age',
        sortOrder: 1
      }
    )

    result :
      [
        {education: '小学', age: 24},
        {education: '小学', age: 26}
        {education: '本科', age: 23},
        {education: '本科', age: 25},
      ]

  */
export const jArrDoubleRanking = function (arr, options) {
  const defOptions = {
    filterRuleKey: '', // 一级过滤和排序的key,
    rule: [], // 一级排序规则,
    sortKey: '', // 二级正常排序的key
    sortOrder: 1 // 二级排序规则
  }
  const { sortKey, filterRuleKey, rule, sortOrder } = {
    ...defOptions,
    ...options
  }

  arr = arr.filter(d => !rule || rule.indexOf(d[filterRuleKey]) !== -1)
  const temp = {}
  for (let i = 0; i < arr.length; i++) {
    if (temp.hasOwnProperty(arr[i][filterRuleKey])) {
      temp[arr[i][filterRuleKey]].push(arr[i])
    } else {
      temp[arr[i][filterRuleKey]] = [arr[i]]
    }
  }
  for (const k in temp) {
    temp[k] = temp[k].sort((a, b) =>
      a[sortKey] > b[sortKey] ? 1 * sortOrder : -1 * sortOrder
    )
  }
  let result = []
  for (let i = 0; i < rule.length; i++) {
    if (temp.hasOwnProperty(rule[i])) {
      result = result.concat(temp[rule[i]])
    }
  }
  return result
}
