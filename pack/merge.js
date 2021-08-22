/*
 * @Author: wuxh
 * @Date: 2020-05-01 17:47:13
 * @LastEditTime: 2021-08-22 14:18:00
 * @LastEditors: wuxh
 * @Description: 遍历src目录下的index.ts文件，进行合并到一个文件中 merge.js
 * @FilePath: /jcommon/pack/merge.js
 */
const path = require('path')
const fs = require('fs')

const rootPath = path.resolve(__dirname, '../')
const remotePath = path.resolve(rootPath, 'src')
const toPatch = path.join(path.resolve(rootPath, 'src'), `merge.txt`)
const regDes = new RegExp('import.*?index\'', 'g')


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
            // 去掉 import ...部分， 用于生成文档
            const des = content.replace(regDes, '')
            fs.appendFileSync(toPatch, des)
          } else if (stats.isDirectory()) {
            return false
          }
        }
       
      })
    })
})
