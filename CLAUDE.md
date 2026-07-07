# CLAUDE.md — 雕龙 DragonCraft 项目规则（单 Agent 模板 B）

## 开工流程

1. 读本文件 + PROGRESS.md
2. 确认本轮任务在 SPEC.md 范围内（不在范围先讨论）
3. 改完一处 → 立即更新 PROGRESS.md
4. 改完一批 → `astro build` 本地验证
5. 推送前 → git status 检查未提交项

## 项目定位

- **站点**：雕龙 DragonCraft（diaolong.mangofolio.com）
- **形态**：Astro 静态站点，中英双语
- **核心**：叙事方法论 OS — 22 章方法论书籍 + 26 个场景 Skill + 工具箱 + 案例库
- **GitHub**：github.com/lj22503/diaolong-skill（公开）

## 产出标准

- 每个改动都要可被搜索引擎或爬虫直接读到（不能依赖 JS 渲染兜底）
- 静态资源、JSON-LD、meta 标签符合 [Diaolong_SEO_Strategy.md](Diaolong_SEO_Strategy.md) 规范
- 每次 commit 前必须 `astro build` 通过
- 中文站 / 英文站改动保持一致（中英文分别走流程）
- 不在页面内引入需要联网或登录的依赖

## 进度跟踪

- 所有改动登记到 [PROGRESS.md](PROGRESS.md)
- 每条改动写明：日期、范围、影响文件、验证结果
- 未做 / 待办用 `### 未做 / 待办` 段落单独列

## Git / 部署约定

- 认证用 SSH（已配置 git@github.com:lj22503/diaolong-skill.git），**不要**用 HTTPS+token
- 推送前 `git status` 确认无意外文件
- 推送 origin/master → Vercel 自动部署
- 上线后人工验证清单（robots.txt / sitemap.xml / Rich Results Test）