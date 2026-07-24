# narrative-skill — neat-freak 知识收尾报告

**收尾时间**：2026-07-24
**收尾路径**：轻量路径（Astro 静态站点，已有 recent neat-freak commit `1bda736` + CLAUDE.md/PROGRESS.md，本次为审计 + 未跟踪内容盘点）
**收尾者**：neat-freak（v3.0.0）

---

## 一、影响（用户视角）

- **🔴 暴露第四个命名不一致**：本地目录 `narrative-skill` ↔ GitHub remote `lj22503/diaolong-skill` ↔ 文档（CLAUDE.md / PROGRESS.md / README / REPO-MAP）全部以 `diaolong-skill` 为标识。这是 idx 5 命名问题的同款现象，**累计 2 处**。
- **暴露 CLAUDE.md 引用了未跟踪文件**：CLAUDE.md 第 22 行 `[Diaolong_SEO_Strategy.md](Diaolong_SEO_Strategy.md)` 与 PROGRESS.md 第 38 行引用同一个 SEO 策略文件——但该文件**未 git add、未跟踪**。接手者 clone 后看到的 CLAUDE.md 引用是个死链接。
- **暴露分支名不一致**：CLAUDE.md 第 36 行写 "推送 origin/master → Vercel 自动部署"，但本地当前分支是 `main`。Vercel 部署可能因此失效或没触发。
- **暴露大批量未跟踪内容**：5 个未跟踪 MD/JPG + 5 个待删除 examples 文件 + 2 个 SEO 文档，构成完整的"上次会话遗留工作包"未提交。
- **暴露 .gitignore 缺一行**：`chapters/wechat/` 临时草稿（`00_合集导言__整合版__gzh.md`）未 ignore，下次同样文件名会再次混入 git status。

## 二、现役事实矩阵

| 事实面 | 状态 | 证据 |
|--------|------|------|
| 代码 | `verified-current` | Astro 静态站点，14 个页面 build 通过（PROGRESS.md §构建产物） |
| 运行态 | `changed-and-verified` | HEAD `1bda736`（本地）；上次 `dist/` 验证 14 页 URL 通过；Vercel 自动部署跟踪但分支名疑似失效（master vs main 不一致） |
| 文档 | `verified-current` | CLAUDE.md 1.5KB（单 Agent 模板 B）+ PROGRESS.md 4KB（2026-07-08）+ SPEC.md + REPO-MAP.md + README 中英文 + SEO 双文档 |
| 规则 | `verified-current` | CLAUDE.md 含开工流程 5 步 + 产出标准 5 条 + Git/部署 4 条 |
| 记忆 | `not-applicable` | 无 |
| 工作区 | `changed-and-verified` | 新建 `.neat-freak/`；5 个未跟踪文件 + 5 个待删除文件 + chapters/wechat/ 临时草稿 |

## 三、关键发现

### 3.1 🔴 第四个命名不一致

| 维度 | 名字 | 证据 |
|------|------|------|
| 本地目录 | `narrative-skill` | `D:\claudework\narrative-skill\` |
| GitHub remote | `lj22503/diaolong-skill` | `git remote -v` |
| CLAUDE.md 标题 | `# CLAUDE.md — 雕龙 DragonCraft 项目规则` | 第 1 行 |
| CLAUDE.md 项目定位 | "github.com/lj22503/diaolong-skill" | 第 16 行 |
| README.md / README_EN.md / PROGRESS.md / REPO-MAP.md / SPEC.md | 全部用 `diaolong-skill` / 雕龙 | 多文件一致 |
| queue.md 当前 idx | 6（项目名 `narrative-skill`） | queue.md |

→ 与 idx 5（investment-advisory-skills / SoloAdvisor-Toolkit）同款：本地目录名错位、文档与 remote 一致。
→ **命名问题累计到 2 处**（idx 5 + idx 6），见 queue.md 顶部"跨项目遗留问题"。

### 3.2 CLAUDE.md 引用未跟踪文件

CLAUDE.md 第 22 行：
```
- 静态资源、JSON-LD、meta 标签符合 [Diaolong_SEO_Strategy.md](Diaolong_SEO_Strategy.md) 规范
```

PROGRESS.md 第 38 行：
```
依据 `Diaolong_SEO_Strategy.md` 与 `Diaolong_SEO_技术修复速查表.md` 执行。
```

→ 两个文件**未 git add**：
- `D:\claudework\narrative-skill\Diaolong_SEO_Strategy.md` (29.4 KB)
- `D:\claudework\narrative-skill\Diaolong_SEO_技术修复速查表.md` (10.4 KB)

→ `git status` 显示 `?? Diaolong_SEO_Strategy.md` 与 `?? Diaolong_SEO_技术修复速查表.md`，但 git ls-files 看不到——意味着其他人 clone 此 repo 也看不到这两份 SEO 文档，PROGRESS.md §项目文档 写的"P0+P1 范围与验收标准"依据缺失。

### 3.3 分支名不一致

| 来源 | 分支名 | 出处 |
|------|-------|------|
| CLAUDE.md | `master` | 第 36 行 "推送 origin/master → Vercel 自动部署" |
| 本地 HEAD | `main` | `git branch --show-current` |
| 最近 commit | （main 上） | HEAD `1bda736` 在 main |

→ 如果 Vercel 监听的还是 master，本地 main 分支的 commit 不会触发部署。

### 3.4 未跟踪内容（5 文件）

| 文件 | 性质 | 建议 |
|------|------|------|
| `Diaolong_SEO_Strategy.md` | SEO 策略报告 | **commit**（被 CLAUDE.md/PROGRESS.md 引用） |
| `Diaolong_SEO_技术修复速查表.md` | SEO 技术速查 | **commit**（同上） |
| `chapters/wechat/00_合集导言__整合版__gzh.md` | 微信合集导言草稿 | 候选 commit（若定稿）/ gitignore（若仍为草稿） |
| `image_001.jpg` (237 KB) | 图片素材 | 候选 commit（若用于文章）/ gitignore（若临时） |
| `topics-suggested.md` | GitHub Topics 推荐草稿 | 操作完 UI 后删除（同 idx 4 同类问题） |

### 3.5 待删除内容（5 文件）

| 文件 | 状态 |
|------|------|
| `examples/燃冰-个人IP故事-完整版.md` | ` D` 删除待提交 |
| `examples/燃冰-个人IP故事-短视频版.md` | ` D` 删除待提交 |
| `examples/燃冰-个人IP故事-简介版.md` | ` D` 删除待提交 |
| `examples/虚拟案例-全职妈妈到绘本博主-打磨前.md` | ` D` 删除待提交 |
| `examples/虚拟案例-全职妈妈到绘本博主-打磨后.md` | ` D` 删除待提交 |

可能是被打磨后版本取代 / 旧版副本，符合 neat-freak 轻量路径 §4 的"被替代副本"分类。**未擅自删除**，列入待确认清单。

### 3.6 项目质量良好的部分

- CLAUDE.md 完整（开工流程 + 项目定位 + 产出标准 + Git/部署约定 + 进度跟踪）
- PROGRESS.md 详细到每项验证（表格列文件 + label + href）
- REPO-MAP.md 描述项目间关系（指向 `lj22503/one-person-ceo-skills` 主工作空间）
- 中英文 README 各一版
- llms.txt 已有
- SEO 双文档齐全（P0/P1 修复 + 策略）

## 四、改动 / 新建

| 文件 | 动作 | 原因 |
|------|------|------|
| `.neat-freak/reports/narrative-skill-2026-07-24.md` | 新建 | 本次 audit trail |

## 五、待你确认（未确认前不动作）

1. **🔴 命名不一致**：
   - 选项 A：rename GitHub 仓库为 `narrative-skill`（与本地目录一致）
   - 选项 B：本地目录改名为 `diaolong-skill`（与文档 + remote 一致）—— **推荐**
   - 选项 C：接受现状，本地目录当别名
2. **CLAUDE.md / PROGRESS.md 引用 vs 现实**：要么 commit `Diaolong_SEO_*.md` 两份文档，要么从 CLAUDE.md/PROGRESS.md 移除引用
3. **分支名**：CLAUDE.md 第 36 行 `origin/master` 改 `origin/main`；若 Vercel 仍监听 master，需在 Vercel Dashboard 调整
4. **未跟踪 5 文件处置**：
   - `Diaolong_SEO_*.md` × 2 → commit
   - `chapters/wechat/...md` → commit 或 gitignore（`chapters/wechat/` 子目录是否需要 ignore）
   - `image_001.jpg` → commit 或 gitignore
   - `topics-suggested.md` → 操作完 UI 后删
5. **待删除 5 文件**：确认 examples/ 旧副本确实可删后，一次性 `git add -u examples/` 提交删除

## 六、遗留

- 13 个 SEO 文档外的 SEO 落地页（faq / sitemap 等）未逐个检查
- astro.config.mjs 完整内容未读（仅看文件名）
- `.impeccable/` 历史残留未处置

---

*收尾完成度：5 事实面已标注（记忆 not-applicable）。报告基于 commit `1bda736`（HEAD，分支 main）。如需重新跑请清空 `.neat-freak/reports/` 后重跑。*