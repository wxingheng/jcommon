// var test = require('./test.js')
// document.getElementById('root').appendChild(test())

// import { cArrDoubleRanking } from './../../../src/array';
// import {  } from 'rxjs/AsyncSubject'
// import { cArrDoubleRanking } from 'jcommon/array';

console.log('222')
import { jArrDoubleRanking , jBroGetInfo} from 'jcommon'


document.getElementById('root').innerText = '123'

const data = jArrDoubleRanking(
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

  console.log('666', data)

  console.log('777', jBroGetInfo())

