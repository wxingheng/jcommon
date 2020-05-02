const path = require('path')
const fs = require('fs')

const rootPath = path.resolve(__dirname, '../')
const remotePath = path.resolve(rootPath, 'src')

fs.unlinkSync(path.join(remotePath, `index.js`))

fs.readdir(remotePath, function (err, files) {
  if (err) {
    console.log(err)
    return
  }
  files
    .filter(v => v !== 'index.js')
    .forEach(function (filename) {
      var filedir = path.join(remotePath, `${filename}/index.js`)
      fs.stat(filedir, function (err, stats) {
        if (err) throw err
        if (stats.isFile()) {
          let content = fs.readFileSync(filedir, 'utf-8') + '\n\n\n\n'
          fs.appendFileSync(path.join(remotePath, `index.js`), content)
        } else if (stats.isDirectory()) {
          return false
        }
      })
    })
})
