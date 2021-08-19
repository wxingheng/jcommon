/*
 * @Author: wuxh
 * @Date: 2020-05-01 17:47:13
 * @LastEditTime: 2021-08-19 23:43:57
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/pack/merge.js
 */
const path = require('path')
const fs = require('fs')

const rootPath = path.resolve(__dirname, '../')
const remotePath = path.resolve(rootPath, 'src')
const toPatch = path.join(path.resolve(rootPath, 'src'), `index.ts`)

// fs.unlinkSync(path.join(remotePath, `index.js`))
fs.unlinkSync(toPatch)

fs.readdir(remotePath, function (err, files) {
  if (err) {
    console.log(err)
    return
  }
  files
    .filter(v => v !== 'index.ts')
    .forEach(function (filename) {
      var filedir = path.join(remotePath, `${filename}/index.ts`)
      fs.stat(filedir, function (err, stats) {
        // if (err) throw err
        if(!err){
          if (stats.isFile()) {
            let content = fs.readFileSync(filedir, 'utf-8') + '\n\n\n\n'
            // fs.appendFileSync(path.join(remotePath, `index.js`), content)
            fs.appendFileSync(toPatch, content)
          } else if (stats.isDirectory()) {
            return false
          }
        }
       
      })
    })
})
