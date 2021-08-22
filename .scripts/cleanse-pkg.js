/*
 * @Author: wuxh
 * @Date: 2021-08-20 10:35:31
 * @LastEditTime: 2021-08-20 10:35:47
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/.scripts/cleanse-pkg.js
 */
const fs = require('fs')
const path = require('path')

// Define absolute paths for original pkg and temporary pkg.
const ORIG_PKG_PATH = path.resolve(__dirname, '../package.json')
const CACHED_PKG_PATH = path.resolve(__dirname, '../../cached-package.json')

// Obtain original `package.json` contents.
const pkgData = require(ORIG_PKG_PATH)

if (process.argv.length <= 2) {
  throw new Error('Missing npm scripts key/name argument(s)')
}

// Get list of arguments passed to script.
const scriptsToRemove = process.argv[2].split(',')
const devDepsToRemove = process.argv[3] ? process.argv[3].split(',') : []

// Write/cache the original `package.json` data to `cached-package.json` file.
fs.writeFile(CACHED_PKG_PATH, JSON.stringify(pkgData), function (err) {
  if (err) throw err
})

// Remove the specified named scripts from the scripts section.
scriptsToRemove.forEach(function (scriptName) {
  delete pkgData.scripts[scriptName]
})

// Remove the specified named pkgs from the devDependencies section.
devDepsToRemove.forEach(function (pkgName) {
  delete pkgData.devDependencies[pkgName]
})

// Overwrite original `package.json` with new data (i.e. minus the specific data).
fs.writeFile(ORIG_PKG_PATH, JSON.stringify(pkgData, null, 2), function (err) {
  if (err) throw err
})
