/*
 * @Author: wuxh
 * @Date: 2020-05-06 21:30:23
 * @LastEditTime: 2022-02-11 18:00:49
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/pack/auto-md.js
 */

const path = require('path')
const fs = require('fs')

const rootPath = path.resolve(__dirname, '../')
const remotePath = path.resolve(rootPath, 'src')
const outputFile = path.join(path.resolve(__dirname, '../'), `README.md`)

// const reg = new RegExp('(?<=@Description:).*?(?=(FilePath))')

const reg = new RegExp('(?<=@Description:)(.|\n)*?(?=(\n.\\*.@FilePath))')
const regName = new RegExp('(?<=export.const.)(.|\n)*?(?=(.=.function))', 'g')
// const regName = new RegExp('((?<=export.const.)(.|\n)*?(?=(.=.function))|((?<=export.class.)(.|\n)*?(?(.\{))))', 'g')
const regDes = new RegExp('(?<=@description:)(.|\n)*?(?=(\n.\\*.@author))', 'g')
// const regExample = new RegExp('(?<=@author:)(.|\n)*?(?=(\\*/))', 'g')
const regExample = new RegExp('(?<=@author:)(.|\n)*?(?=(\\*/))', 'g')

fs.unlinkSync(outputFile)

const baseContent =
  fs.readFileSync(
    path.join(path.resolve(rootPath, 'pack'), 'base.md'),
    'utf-8'
  ) + '\n'

fs.appendFileSync(outputFile, baseContent)

fs.readdir(remotePath, function (err, files) {
  if (err) {
    console.log(err)
    return
  }
  const filterFiles = files.filter(v => v !== 'index.ts')
  fs.appendFileSync(outputFile, `## API 目录` + '\n')
  filterFiles.forEach(function (filename) {
    const filedir = path.join(remotePath, `${filename}/index.ts`)
    fs.stat(filedir, function (err, stats) {
      if (!err) {
        if (stats.isFile()) {
          let content = fs.readFileSync(filedir, 'utf-8') + '\n\n'
          const catalogue = '\n' + `### ${content.match(reg)[0]}` + '\n\n'
          const names = content.match(regName)
          const des = content.match(regDes)
          fs.appendFileSync(outputFile, catalogue)
          if (names) {
            names.forEach((v, i) => {
              fs.appendFileSync(outputFile, `- [${v}](#${v}) ${des[i]}` + '\n')
            })
          }
        } else if (stats.isDirectory()) {
          return false
        }
      }
    })
  })
  setTimeout(() => {
    fs.appendFileSync(outputFile, '\n' + `## API 说明` + '\n')
  }, 1000 * 2)
  setTimeout(() => {
    filterFiles.forEach(function (filename) {
      const filedir = path.join(remotePath, `${filename}/index.ts`)
      fs.stat(filedir, function (err, stats) {
        if (!err) {
          if (stats.isFile()) {
            let content = fs.readFileSync(filedir, 'utf-8') + '\n\n'
            const catalogue = '\n' + `### ${content.match(reg)[0]}` + '\n\n'
            const names = content.match(regName)
            const des = content.match(regDes)
            const examples = content.match(regExample)
            names && names.forEach((v, i) => {
              fs.appendFileSync(
                outputFile,
                '\n' +
                  `### ${v}
               
  ${des[i]}
  
  ` +
                  '```javascript' +
                  `
  ${examples[i].trim()}` +
                  '\n' +
                  '```' +
                  '\n'
              )
            })
          } else if (stats.isDirectory()) {
            return false
          }
        }
      })
    })
  }, 1000 * 4)
  setTimeout(() => {
    fs.appendFileSync(
      outputFile,
      `
## 建议，交流，推荐，反馈

联系我 wxingheng@outlook.com
      `
    )
  }, 1000 * 6)
})
