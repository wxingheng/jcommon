/*
 * @Author: wuxh
 * @Date: 2020-04-28 17:19:07
 * @LastEditTime: 2020-05-14 14:25:45
 * @LastEditors: wuxh
 * @Description: 
 * @FilePath: /jcommon/webpack.config.js
 */
const path = require('path')

module.exports = {
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  }
}
