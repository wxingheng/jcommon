/*
 * @Author: wuxh
 * @Date: 2020-04-28 17:19:07
 * @LastEditTime: 2021-08-19 22:31:55
 * @LastEditors: wuxh
 * @Description: 
 * @FilePath: /jcommon/webpack.config.js
 */
const path = require('path')

module.exports = {
  entry: './dist/index.js',
  mode: "production",
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
