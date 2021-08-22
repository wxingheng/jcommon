/*
 * @Author: wuxh
 * @Date: 2021-08-22 12:46:08
 * @LastEditTime: 2021-08-22 13:40:42
 * @LastEditors: wuxh
 * @Description: 
 * @FilePath: /jcommon/example/base/webpack.config.js
 */
module.exports = {
  mode: 'production',
  // mode: 'development',
  entry: __dirname + '/src/index.js', //入口文件
  output: {
    path: __dirname + '/public', //打包后的文件存放目录
    filename: 'bundle.js'
  },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: [path.resolve(__dirname, 'src')],
//         loader: 'babel-loader'
//       }
//     ]
//   }
}
