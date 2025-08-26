# GitHub Pages 部署说明

## 概述

本项目已配置自动部署到 GitHub Pages，文档位于 `docs/` 目录中。

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
- `docs/` 目录中的文件发生更改
- 手动触发（workflow_dispatch）

### 部署步骤

1. **Checkout**: 检出代码
2. **Setup Pages**: 配置 GitHub Pages 环境
3. **Upload artifact**: 上传 `docs/` 目录作为构建产物
4. **Deploy**: 部署到 GitHub Pages
5. **Status**: 显示部署状态和 URL

## 自定义配置

### 修改部署路径

如果你想将其他目录部署到 GitHub Pages，修改 `.github/workflows/deploy-docs.yml` 中的：

```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './your-custom-path'  # 修改这里
```

### 添加构建步骤

如果需要在部署前构建文档，可以在 "Upload artifact" 步骤前添加构建步骤：

```yaml
- name: Build docs
  run: |
    npm install
    npm run build-docs
    
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist/docs'  # 构建后的路径
```

## 故障排除

### 常见问题

1. **部署失败**: 检查 Actions 标签中的错误信息
2. **页面不显示**: 确保 `docs/` 目录包含 `index.html`
3. **权限错误**: 检查仓库设置中的 Pages 权限

### 手动部署

如果自动部署失败，可以：

1. 进入 "Actions" 标签
2. 选择 "Deploy Docs to GitHub Pages" 工作流
3. 点击 "Run workflow" 手动触发

## 注意事项

- 部署可能需要几分钟时间
- 确保 `docs/` 目录包含有效的 HTML 文件
- `.nojekyll` 文件确保 GitHub Pages 不会使用 Jekyll 处理
- 每次推送都会触发新的部署
