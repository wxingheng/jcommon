# GitHub Pages 部署说明

## 概述

本项目已配置自动部署到 GitHub Pages，文档通过 TypeDoc 自动生成并部署。

## 设置步骤

### 1. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"

### 2. 配置分支保护（可选但推荐）

1. 在 "Settings" > "Branches" 中
2. 添加分支保护规则到 `main` 或 `master` 分支
3. 确保 "Require status checks to pass before merging" 已启用

### 3. 验证部署

1. 推送更改到 `main` 或 `master` 分支
2. 在 "Actions" 标签中查看部署进度
3. 部署完成后，文档将在 `https://your-username.github.io/jcommon` 可用

## 工作流说明

### 触发条件

- 推送到 `main` 或 `master` 分支
- `src/` 目录中的源代码发生更改
- TypeDoc 配置文件发生更改
- 手动触发（workflow_dispatch）

### 部署步骤

1. **Checkout**: 检出代码
2. **Setup Node.js**: 设置 Node.js 环境
3. **Install dependencies**: 安装项目依赖
4. **Build documentation**: 使用 TypeDoc 生成文档
5. **Setup Pages**: 配置 GitHub Pages 环境
6. **Upload artifact**: 上传生成的 `docs/` 目录作为构建产物
7. **Deploy**: 部署到 GitHub Pages
8. **Status**: 显示部署状态和 URL

## 文档生成

### TypeDoc 配置

文档通过 TypeDoc 自动生成，配置文件位于 `typedoc.js`：

- 入口点：`src/index.ts`
- 输出目录：`docs/`
- 包含版本信息
- 排除私有和受保护的成员

### 生成命令

```bash
npm run typedoc:markdown
```

## 自定义配置

### 修改部署路径

如果你想将其他目录部署到 GitHub Pages，修改 `.github/workflows/deploy-docs.yml` 中的：

```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './your-custom-path'  # 修改这里
```

### 修改触发条件

如果只想在特定文件更改时触发部署，修改 `paths` 部分：

```yaml
paths:
  - 'src/**'
  - 'docs/**'
  - 'typedoc.js'
```

## 故障排除

### 常见问题

1. **构建失败**: 检查 TypeScript 编译错误
2. **依赖安装失败**: 检查 `package-lock.json` 是否最新
3. **部署失败**: 检查 Actions 标签中的错误信息
4. **页面不显示**: 确保 TypeDoc 成功生成了 `docs/` 目录

### 手动部署

如果自动部署失败，可以：

1. 进入 "Actions" 标签
2. 选择 "Deploy Docs to GitHub Pages" 工作流
3. 点击 "Run workflow" 手动触发

### 本地测试

在推送前，可以在本地测试文档生成：

```bash
npm install
npm run typedoc:markdown
cd docs
python -m http.server 8000  # 或其他本地服务器
```

## 注意事项

- 部署可能需要几分钟时间
- 每次推送都会重新生成文档并部署
- 确保 TypeScript 代码能够正常编译
- `.nojekyll` 文件确保 GitHub Pages 不会使用 Jekyll 处理
- 文档基于 `src/index.ts` 中的导出内容生成
