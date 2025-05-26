<!--
 * @Author: wxingheng
 * @Date: 2025-05-26 16:00:40
 * @LastEditTime: 2025-05-26 16:03:54
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /jcommon/develop.md
-->

# jcommon 开发说明

## 项目简介

jcommon 是一个 JavaScript 常用纯函数工具库，涵盖日期格式化、URL 操作、浏览器判断、常用校验等常用函数，支持 TypeScript，支持按需引用，适合 npm 安装或 script 标签直接引入。

## 开发环境

- Node.js 16+
- 推荐包管理工具：yarn 或 npm
- TypeScript 5.x
- 代码规范：ESLint + @typescript-eslint
- 单元测试：Jest
- 打包工具：Rollup

## 主要目录结构

- `src/`         主要源码目录，按功能模块分类
- `test/`        单元测试用例
- `pack/`        构建、文档、合并等辅助脚本
- `docs/`        由 typedoc 生成的文档
- `.scripts/`    发布前后 package.json 处理脚本
- `example/`     示例项目

## 开发流程

1. 代码开发与调试：在 `src/` 目录下按模块开发，建议每个功能单独一个文件夹。
2. 单元测试：在 `test/` 目录下为每个功能编写对应的测试用例，使用 `yarn test` 运行。
3. 代码规范：提交前请运行 `yarn lint` 检查代码风格。
4. 构建与发布：通过 `yarn build:dist` 进行打包和文档合并，发布前后会自动处理 package.json。

---

## scripts 命令说明

| 命令名             | 作用说明 |
|--------------------|----------|
| `test`             | 运行所有单元测试（使用 jest） |
| `rollup`           | 使用 rollup 进行打包，生成 cjs/es/umd 格式产物 |
| `merge`            | 执行 `pack/merge.js`，合并 src 下各模块 index.ts 到 src/merge.ts，便于文档生成 |
| `merge:dist`       | 先执行 `merge`，再执行 `rollup`，完成合并和打包 |
| `build:dist`       | 先 rollup 打包，再执行 `pack/merge.typedoc.markdown.js`，合并文档到根目录 README.md |
| `before:publish`   | 执行 `.scripts/cleanse-pkg.js`，发布前移除 package.json 中部分 scripts 和 devDependencies，减小包体积 |
| `after:publish`    | 执行 `.scripts/restore-pkg.js`，发布后还原 package.json |
| `pub`              | 一键发布命令：构建产物、生成文档、合并、清理、发布到 npm、还原 package.json |
| `auto-pub`         | 自动化发布命令，流程同 `pub`，但省略 jcommon-node -va 步骤 |
| `typedoc`          | 生成 API 文档（HTML 格式，输出到 docs/） |
| `typedoc:markdown` | 生成 API 文档（Markdown 格式，输出到 docs/，并用于 README 合并）|
| `typedoc:dev`      | 监听模式下生成文档，便于开发时实时预览 |
| `lint`             | 使用 ESLint 检查所有 .ts 文件的代码规范 |

---

**注意事项：**
- 发布流程会自动清理和还原 package.json，避免多余依赖和脚本被发布到 npm。
- 合并脚本和文档生成脚本均在 `pack/` 目录下，可根据需要自定义。
- 代码提交前建议本地运行 `yarn lint` 和 `yarn test`，保证代码质量。
