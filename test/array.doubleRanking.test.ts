/*
 * @Author: wxingheng
 * @Date: 2023-05-19 21:00:26
 * @LastEditTime: 2023-05-19 22:28:46
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/test/array.doubleRanking.test.ts
 */

import { doubleRanking } from '../src/array/index'

describe('doubleRanking', () => {
  test('should sort array by filterRuleKey and sortKey', () => {
    const arr = [
      { education: '本科', age: 26 },
      { education: '小学', age: 25 },
      { education: '本科', age: 24 },
      { education: '小学', age: 23 }
    ]
    const options = {
      filterRuleKey: 'education',
      rule: ['小学', '本科'],
      sortKey: 'age',
      sortOrder: 1
    }
    expect(doubleRanking(arr, options)).toEqual([
      { education: '小学', age: 23 },
      { education: '小学', age: 25 },
      { education: '本科', age: 24 },
      { education: '本科', age: 26 }
    ])
  })

  test('should sort by default sortOrder(0)', () => {
    const arr = [
      { education: '本科', age: 26 },
      { education: '小学', age: 25 },
      { education: '本科', age: 24 },
      { education: '小学', age: 23 }
    ]
    const options = {
      filterRuleKey: 'education',
      rule: ['小学', '本科'],
      sortKey: 'age'
    }
    expect(doubleRanking(arr, options)).toEqual([
      { education: '小学', age: 23 },
      { education: '小学', age: 25 },
      { education: '本科', age: 24 },
      { education: '本科', age: 26 }
    ])
  })

  test('should return original arr if options invalid', () => {
    const arr = [
      { education: '本科', age: 26 },
      { education: '小学', age: 25 },
      { education: '本科', age: 24 },
      { education: '小学', age: 23 }
    ]
    expect(doubleRanking(arr, {})).toBe(arr)
  })
})
