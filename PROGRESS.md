# PROGRESS — 雕龙 DragonCraft

## 2026-07-08 | Bugfix — 英文版本切换不生效

### 问题

线上英文切换按钮无效（任何页面点 "EN" 或 "中" 都跳回当前页）。

### 根因

`src/layouts/Base.astro` 第 120 行语言切换 `<a>` 的三元条件在 commit `c5b2c11`（SEO 优化）被从 `locale === 'zh'` 改成 `locale === 'en'`，导致两个分支逻辑反了：

- EN 页：走 TRUE 分支 `currentPath.startsWith('/en') ? currentPath : ...` → startsWith 永远为真 → 当前页
- ZH 页：走 FALSE 分支 `currentPath.replace('/en', '')` → 无 /en 可替 → 当前页

dist 验证 4 页全部命中：中文首页 `/`, 英文首页 `/en/`, 中文书籍 `/book/`, 英文书籍 `/en/book/`，href 都指向自身。

### 修复

把条件改回 `locale === 'zh'`，保留 `startsWith` + `|| '/'` 兜底。

### 验证

| 文件 | label | href |
|------|-------|------|
| `dist/index.html` | EN | `/en/` ✓ |
| `dist/en/index.html` | 中 | `/` ✓ |
| `dist/book/index.html` | EN | `/en/book/` ✓ |
| `dist/en/book/index.html` | 中 | `/book/` ✓ |

`astro build` 14 页通过。**待推送 master 触发 Vercel 部署**。

---

## 2026-07-07 | SEO 优化 阶段1（P0 + P1 技术修复 + 百度站点验证）

依据 `Diaolong_SEO_Strategy.md` 与 `Diaolong_SEO_技术修复速查表.md` 执行。

### 项目文档

- 新建 [CLAUDE.md](CLAUDE.md)（单 Agent 模板 B）
- 新建 [SPEC.md](SPEC.md)（本轮 P0+P1 范围与验收标准）

### 已完成

| 状态 | 项 | 备注 |
|------|----|------|
| ✅ | P0-1 创建 public/robots.txt | Allow / + Disallow 3 条 + Sitemap 声明 |
| ⚠️ | P0-2 sitemap.xml | `@astrojs/sitemap` 3.7.3 与 Astro 4.16 不兼容（`Cannot read properties of undefined` 崩溃），改为 public/sitemap.xml 静态文件（15 URL，含中英 + tools子页 + hreflang） |
| ✅ | P0-3 Base.astro SEO props | 新增 description / canonical / OG / Twitter / hreflang 入参；面包屑自动生成 + JSON-LD |
| ✅ | P0-4 首页 JSON-LD | Organization + WebSite + Book + FAQPage（zh + en 各 1 组共 4 段） |
| ✅ | P0-5 skills 页 JSON-LD | Article + 自动 BreadcrumbList（zh + en 各 2 段） |
| ✅ | P0-6 6 个内页 SEO props | book / skills / tools / examples / community / about 各有独立 title/description |
| ✅ | P0-7 7 个英文镜像页 SEO props | en/index~about 全部同步 |
| ✅ | P1-9 URL 不统一 | 验证 dist 输出：`/tools/narrative-personality-test.html` 可达，无 .html 后缀 |
| ✅ | P1-10 面包屑导航 | 二级及以上页面显示视觉面包屑 + BreadcrumbList JSON-LD |
| ⚠️ | P1-11 内部链接加强 | 只做了顶部导航的横向链接（已有），未在页面加 "相关推荐" 区块。Base.astro 中已定义 `.related-links` 样式留作下一步 |
| ✅ | 百度站点验证 | `baidu_verify_codeva-COgffSwLmu.html` 已放 public/，随 SEO 修复一起部署 |

### 构建产物

- 14 个页面全部成功 build（zh × 7 + en × 7）
- `dist/robots.txt`、`dist/sitemap.xml` 可直接访问
- 主页 dist 含 4 段 JSON-LD；skills 页含 2 段；内页含 1 段面包屑 JSON-LD

### 已修的设计问题

- `en/about.astro` 的 `.principle` 类原来用 `border-left: 3px solid var(--accent)` —— AI 腔。改为仅用背景色区分（与 FinancePro 处理一致）。

### 未做 / 待用户处理

- **P1-11 相关推荐区块**：可后续补
- **P2 — 内容矩阵**（博客 + 20+ SEO 文章）
- **P3 — 外链建设**
- **GSC / 百度站长注册与 sitemap 提交**（需用户账号；百度验证文件已就位可点完成）
- **og-image 设计**：当前回退到 `/images/book-cover.jpg`，可后续设计专用 og-image

### 部署后需人工验证

- [ ] `https://diaolong.mangofolio.com/robots.txt` 返回 200
- [ ] `https://diaolong.mangofolio.com/sitemap.xml` 返回 200 + 15 URL
- [ ] 访问 `https://diaolong.mangofolio.com/baidu_verify_codeva-COgffSwLmu.html` 返回 200 + token → 百度站长点"完成验证"
- [ ] Google Rich Results Test 验证主页 4 段 JSON-LD 全部识别
- [ ] 验证 6 个内页 description / canonical 不重复
- [ ] 检查面包屑在 `/book` `/skills` `/tools` 等页可见