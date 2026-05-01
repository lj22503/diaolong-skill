# 雕龙叙事网站 — 构建说明

## 站点的角色

**diaolong.cn** 是叙事平权的流量入口。

- 用户来这里 → 了解雕龙是什么 → 读免费书籍章节 → 分流到 GitHub / 知识星球
- AI Agent 来这里 → 找到 Skill 的位置 → 读取 SKILL.md 文件 → 执行任务

## 架构

```
diaolong-skill/
├── src/                    ← Astro 网站源码
│   ├── pages/               ← 页面 (zh + en)
│   ├── layouts/             ← 布局组件
│   ├── i18n/                ← 双语翻译
│   └── styles/              ← 样式
├── site/                   ← GitHub Pages 构建输出（自动生成）
├── chapters/                ← 书籍章节（org文件）
├── skills/                 ← 26个叙事Skill
├── tools/                  ← 工具箱
├── examples/               ← 案例库
└── .github/workflows/
    ├── ci.yml              ← 代码质量CI（禁用词扫描等）
    └── deploy-site.yml     ← GitHub Pages 自动部署
```

## 构建流程

### 本地开发

```bash
cd diaolong-skill
npm install
npm run dev      # 开发预览 localhost:4321
npm run build    # 构建输出到 dist/
```

### 自动部署

push 到 main 分支 → GitHub Actions 自动构建 → GitHub Pages 发布

### 手动触发 Pages 部署

1. 打开 https://github.com/lj22503/diaolong-skill/settings/pages
2. Source 选择 "GitHub Actions"
3. 保存

## 内容联动

### 书籍章节

路径：`chapters/book/*.org` → 发布后 → `site/chapters/` 或直接 GitHub 链接

**章节 → 网站的流程：**
1. 书籍 .org 文件在 `chapters/book/` 更新
2. push 到 GitHub（触发 ci.yml 合规扫描）
3. 网站书籍页面链接指向 GitHub 文件（保持最新）
4. （未来）可扩展为自动将 org → HTML → 发布到 `site/chapters/`

### Skill

路径：`skills/narrative-*/SKILL.md`

**Skill → 网站的流程：**
1. Skill 文件在 `skills/` 更新
2. push 到 GitHub
3. 网站 Skill 索引页的链接指向 GitHub（保持最新）

### 案例库

路径：`examples/*.md`

提交 → GitHub Issue (case-study) → PR → 审核通过 → 合并到 main → 自动出现在网站案例库

## GitHub 协作维护者手册

### 审核案例 PR

1. 打开 PR，检查叙事要素（冲突/锚点/结尾钩子）
2. 检查 CLA 协议确认
3. 运行合规扫描：`python3 .github/workflows/ci-scan.py`（如有）
4. 合并或留言拒绝

### 添加新章节

1. 在 `chapters/book/` 添加 .org 文件
2. 在 `chapters/wechat/` 添加公众号版 .org 文件
3. 更新 `src/pages/book.astro` 的章节列表
4. push → 自动构建发布

### 添加新 Skill

1. 在 `skills/` 创建 `narrative-{场景}/` 目录
2. 包含 `SKILL.md` + `changes.md`
3. 更新 `src/pages/skills.astro` 的 Skill 列表
4. push → 自动构建发布

## GitHub Pages 自定义域名（可选）

1. 在 DNS 添加 CNAME 记录：`diaolong.cn → lj22503.github.io`
2. 在 repo Settings → Pages → Custom domain 输入 `diaolong.cn`
3. 勾选 Enforce HTTPS

---

*本说明最后更新：2026年5月2日*
