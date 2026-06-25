# 雕龙叙事 (Diaolong)

> **叙事平权** — 让每个人都能讲好自己的故事。

## 解决什么问题？

| 现状 | 用雕龙 |
|------|--------|
| 写东西没人看 | 有结构的叙事方法，让内容有张力 |
| 想写但不会开头 | 26 套场景化 Skill 模板，对话即用 |
| 写了像 AI 写的 | 内置去 AI 化检测，过滤模板腔 |
| 不知道用什么 Skill | 场景触发词映射，说人话就能调对 |

## 26 个叙事场景 Skill

| 场景 | Skill | 用途 |
|------|-------|------|
| 艺术家陈述 | `narrative-art` | 作品 / 展览前言 / 创作理念 |
| 书籍写作 | `narrative-book` | 书评 / 章节 / 序言 |
| 个人品牌 | `narrative-personal-brand` | IP 故事 / 自述 |
| 个人 IP | `narrative-personal-ip` | 身份叙事 / 影响力构建 |
| 产品发布 | `narrative-product-launch` | 新品上市 / 预售话术 |
| 产品销售 | `narrative-product` | 选品 / 卖点 / 用户证言 |
| 销售说服 | `narrative-sales` | 客户案例 / 谈判话术 |
| 品牌叙事 | `narrative-brand` | 品牌故事 / Slogan / 品牌故事 |
| 危机公关 | `narrative-crisis` | 声明 / 应对 / 声誉修复 |
| 公益筹款 | `narrative-charity` | 募款 / 项目故事 / 影响力报告 |
| 医疗健康 | `narrative-medical` | 患者故事 / 健康科普 |
| 创业融资 | `narrative-funding` | BP 叙事 / 路演 / 投资人信 |
| 法律叙事 | `narrative-legal` | 辩护 / 调解 / 合规沟通 |
| 教育培训 | `narrative-education` | 课程推广 / 学员故事 / 教学案例 |
| 生活方式 | `narrative-lifestyle` | 种草 / 体验 / 分享 |
| 心理健康 | `narrative-psychology` | 情感 / 疗愈 / 心理师话术 |
| 组织管理 | `narrative-organization` | 愿景 / 使命 / 团队文化 |
| 社交媒体 | `narrative-social` | 朋友圈 / 微博 / 短视频脚本 |
| 争议话题 | `narrative-controversy` | 站队 / 反驳 / 理性讨论 |
| 创作写作 | `narrative-creative` | 小说 / 散文 / 剧本 |
| 科技叙事 | `narrative-tech` | 技术布道 / 产品解读 / 行业分析 |
| 环保可持续 | `narrative-sustainable` | ESG / 绿色叙事 / 可持续发展 |
| 商业复盘 | `narrative-retrospective` | 项目复盘 / 年终总结 / 经验沉淀 |
| 叙事 Suite | `narrative-suite` | 完整叙事套件，多 Skill 协同 |
| 叙事元系统 | `narrative-meta` | 八刀评估 / 去 AI 化 / 伦理审查 |
| 叙事工作流 | `narrative-workflow` | 编排以上 Skill 的元工作流 |

## 快速开始

### 在线体验

访问 **https://diaolong.mangofolio.com** 即可直接使用全部 Skill，微信传播反馈良好。

### 作为 AI Agent Skill 使用

```bash
# 克隆仓库
git clone https://github.com/lj22503/diaolong-skill.git
cd diaolong-skill

# 使用方式 1：直接读取 Skill 文件
# 打开 skills/narrative-*/SKILL.md 获取完整 prompt

# 使用方式 2：部署网站到 GitHub Pages
cd site && npm install && npm run build
```

### 典型调用示例

```
用户：帮我写一个艺术家陈述，主题是城市边缘人群摄影
→ 调用 narrative-art
→ 输出：艺术家陈述 + 展览前言 + 作品解读

用户：写篇卖保险的朋友圈，配一个客户案例
→ 调用 narrative-sales
→ 输出：朋友圈文案 + 客户证言结构

用户：我的产品要开发布会，帮我写新闻稿
→ 调用 narrative-product-launch
→ 输出：新闻稿 + 媒体问答预判 + 社交媒体配文
```

## 核心亮点

- **叙事元系统**：八刀质量评估 + 去 AI 化检测 + 伦理审查，确保叙事质量
- **26 个场景全覆盖**：从艺术家到创业者，从销售到公益，一个平台全搞定
- **免费书章节**：chapters/ 目录含书籍章节，直接阅读
- **案例库**：examples/ 目录含真实案例，提交 case-study Issue 可参与贡献
- **AI Agent 友好**：每个 Skill 都有标准化 SKILL.md，Agent 可直接解析调用

## 用户案例

> 微信用户反馈：网站简单直接，选场景 → 填信息 → 出结果，写出来的内容不像 AI 写的。

## 项目结构

```
diaolong-skill/
├── skills/                    # 26 个叙事 Skill（每个含 SKILL.md）
├── chapters/                  # 书籍章节（org 格式）
│   ├── book/                  # 书籍正文
│   └── wechat/                # 公众号同步版
├── examples/                  # 案例库
├── site/                      # Astro 网站源码 → GitHub Pages
├── tools/                     # 工具箱
└── .github/workflows/         # CI：禁用词扫描 / 自动部署
```

## 如何贡献

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

- 提交案例 → GitHub Issue (case-study)
- 贡献新 Skill → 需方法论论证 + 完整案例
- 优化现有 Skill → 附优化理由和效果

## 免责声明

- 叙事能力是辅助技能，不替代专业写作训练
- 案例故事请确保涉及的个人知情并同意
- 本工具生成的内容需自行审核事实准确性

## 授权

MIT License — 可免费使用，商用请注明来源

---

**版本**: v1.0  
**网站**: https://diaolong.mangofolio.com  
**GitHub**: https://github.com/lj22503/diaolong-skill
