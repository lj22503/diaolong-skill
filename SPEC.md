# SPEC — 雕龙 SEO 优化（本轮范围）

## 目标

提升 https://diaolong.mangofolio.com/ 的搜索引擎可见性，分 P0/P1/P2 三阶段。本轮只做 P0+P1。

## P0 — 必须立即修复（技术基础）

| # | 项 | 验收标准 |
|---|----|---------|
| P0-1 | robots.txt | `public/robots.txt` 创建，Allow + Disallow + Sitemap 声明三段；部署后 `/robots.txt` HTTP 200 |
| P0-2 | sitemap.xml | 用 `@astrojs/sitemap` 自动生成；部署后 `/sitemap.xml` HTTP 200，至少含 7 个 zh 页 + 7 个 en 页 + tools 子页 |
| P0-3 | 结构性数据 — 通用 SEO props | `Base.astro` 增加 description / canonical / OG / Twitter Card / hreflang 入参；每页传入对应值 |
| P0-4 | 首页 JSON-LD | Organization + WebSite + Book + FAQPage 共 4 段 |
| P0-5 | skills 页 JSON-LD | Article + BreadcrumbList 共 2 段 |
| P0-6 | book/tools/examples/about/community 页 meta | 每页有独立 title / description / canonical |
| P0-7 | en 镜像 | 7 个英文页同样补 SEO（i18n 同步） |

## P1 — 2 周内修复（重要）

| # | 项 | 验收标准 |
|---|----|---------|
| P1-9 | URL 不统一 | Astro 默认无 `.html` 后缀，build 后确认 `/tools/narrative-personality-test` 可达（dist 验证） |
| P1-10 | 面包屑导航 | 二级及以上页面显示视觉面包屑 + BreadcrumbList JSON-LD |
| P1-11 | 内部链接加强 | 首页 ↔ book / skills / tools / examples 互相推荐（视觉 + 链接结构） |

## 不在本轮范围

- **P2 — 内容矩阵**（博客 + 20+ SEO 文章）：本轮不动
- **P3 — 外链建设**：本轮不动
- **GSC / 百度站长提交**：需用户账号，本轮仅完成部署 + 文件可访问
- **og-image.png / logo.png 设计**：使用现有 favicon.svg 作为兜底（如缺图不强制要求）

## 部署后人工验证清单

- [ ] 访问 `/robots.txt` 返回 200 + 内容含 sitemap 声明
- [ ] 访问 `/sitemap.xml` 返回 200 + URL 列表正确
- [ ] Google Rich Results Test 验证首页 4 段 JSON-LD 全部识别
- [ ] 验证 5 个内页 description / canonical 不重复
- [ ] 访问 `/tools/narrative-personality-test` 返回 200（P1-9）
- [ ] 检查面包屑在 `/book` `/skills` 等页可见

## 风险

- `@astrojs/sitemap` 安装可能影响 build，首次安装后必须 `astro build` 验证
- 中英文 i18n 配置如需调整，可能触发新的 URL 路径，需更新 sitemap
- 现有 dist/ 是旧 build，本轮以新 build 产物为准