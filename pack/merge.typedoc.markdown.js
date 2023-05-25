/*
 * @Author: wxingheng
 * @Date: 2023-05-25 15:54:22
 * @LastEditTime: 2023-05-25 17:26:53
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

fs.unlinkSync(toPatch);

remotePathList.forEach((filename) => {
  const fielder = path.join(remotePath, `${filename}`);
  fs.stat(fielder, function (err, stats) {
    if (!err) {
      if (stats.isFile()) {
        let content = fs.readFileSync(fielder, "utf-8") + "\n\n\n\n";
        fs.appendFileSync(toPatch, content);
      } else if (stats.isDirectory()) {
        return false;
      }
    }
  });
});
