/*
 * @Author: wxingheng
 * @Date: 2023-05-19 23:06:30
 * @LastEditTime: 2023-05-24 15:04:26
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/test/array.randomData.test.ts
 */

import { randomData } from '../src/array/index'


describe('randomData', () => {
  test('should return array with given length', () => {
    const result = randomData(3, ['name', 'age'])
    expect(result).toHaveLength(3)
  })
  
  test('should return array of objects', () => {
    const result = randomData(2, ['name', 'age'])
    expect(result[0]).toBeInstanceOf(Object)
    expect(result[1]).toBeInstanceOf(Object)
  })
  
  test('should have given keys in objects', () => {
    const result = randomData(2, ['name', 'age'])
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('age')
    expect(result[1]).toHaveProperty('name')
    expect(result[1]).toHaveProperty('age')
  })
  
  test('should have random values for keys', () => {
    const result1 = randomData(2, ['name', 'age'])
    const result2 = randomData(2, ['name', 'age'])
    expect(result1[0].name).not.toEqual(result2[0].name)
    expect(result1[0].age).not.toEqual(result2[0].age)
    expect(result1[1].name).not.toEqual(result2[1].name)
    expect(result1[1].age).not.toEqual(result2[1].age)
  })
})