/*
 * @Author: wxingheng
 * @Date: 2023-05-25 15:54:22
 * @LastEditTime: 2024-12-19 17:10:45
 * @LastEditors: wxingheng
 * @Description: 遍历 docs 目录下的.md 文件，进行合并输出到根目录下的 README.md 文件中
 * @FilePath: /jcommon/pack/merge.typedoc.markdown.js
 */

const path = require("path");
const fs = require("fs");

const rootPath = path.resolve(__dirname, "../");
const remotePath = path.resolve(rootPath, "docs");
const toPatch = path.join(path.resolve(rootPath), `README.md`);
const remotePathList = [
  "README.md",
  "modules.md",
  "classes/EventBus.md",
  "classes/Queue.md",
];

if (fs.existsSync(toPatch)) {
  fs.unlinkSync(toPatch);
}
console.log(`开始合并文件`);
remotePathList.forEach((filename) => {
  const fielder = path.join(remotePath, `${filename}`);
  fs.stat(fielder, function (err, stats) {
    if (!err) {
      if (stats.isFile()) {
        let content = fs.readFileSync(fielder, "utf-8") + "\n\n\n\n";
        fs.appendFileSync(toPatch, content);
        console.log(`${filename} 合并成功`);
      } else if (stats.isDirectory()) {
        console.log(`${filename} 是目录，跳过`);
        return false;
      }
    } else {
      console.log(`${filename} 文件不存在`);
    }
  });
});
