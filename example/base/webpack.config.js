module.exports = {
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
