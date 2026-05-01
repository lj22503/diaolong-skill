# 贡献指南

> **叙事平权** — 让每个人都能讲好自己的故事。

感谢你愿意为雕龙叙事贡献力量！

## 核心理念

雕龙叙事的使命是"叙事平权"。

好的叙事能力不应该只属于"专业写手"或"会讲故事的天才"。它应该像骑自行车一样，是可以被任何人学会的技能。

你的每一次贡献，都在帮助更多人学会这项技能。

---

## 贡献类型

### 类型一：案例故事（最受珍视）

案例是叙事方法论的灵魂。

一个好的案例 = 一个真实的冲突 + 具体的锚点 + 有力的结尾钩子。

**提交前请确认：**
- [ ] 这是真实经历，还是虚构教学案例？（请诚实标注）
- [ ] 案例中涉及的可识别个人是否知情并同意？
- [ ] 案例包含：核心冲突是什么、最有力的细节是什么、结尾给读者留下了什么
- [ ] 避免了流水账式叙事——有张力、有节奏

**提交方式：**
1. 打开 [Case Study Issue](https://github.com/lj22503/diaolong-skill/issues/new?labels=case-study&template=case_study.yml)
2. 按格式填写
3. 我们会审核并在 7 天内回复

### 类型二：新 Skill（需方法论论证）

新增一个场景 Skill 不只是"写一套 prompt"，而是要论证：

- 这个场景与现有 Skill 的边界在哪里？
- 这个场景的核心叙事要素是什么？
- 为什么现有的 Skill 无法覆盖这个场景？

**提交前请确认：**
- [ ] 已阅读 [CLA 协议](.github/CLA.md)
- [ ] 新 Skill 包含：`SKILL.md` + `changes.md`
- [ ] 附至少一个完整案例
- [ ] Commit 信息符合语义化规范

### 类型三：优化现有 Skill

- Prompt 优化：请说明优化理由和效果
- Bug 修复：附复现步骤
- 文档修正：直接提 PR 即可

### 类型四：翻译

支持将 Skill 翻译为其他语言。翻译者将在网站和文档中署名。

---

## 质量标准

### 叙事要素清单

每个提交的案例必须包含以下要素，缺一不可：

| 要素 | 问题 |
|------|------|
| **冲突** | 主角面临的最大困境是什么？ |
| **锚点** | 最有力的具体细节是什么？（数字/动作/对话） |
| **结尾钩子** | 故事结尾给读者留下了什么？ |

### 禁用词清单

所有文本内容（书籍章节、Skill 说明、案例）不得包含以下 AI 生成痕迹模式：

```
赋能、抓手、闭环、对齐、底层逻辑、在当今时代、
值得注意的是、总而言之、换句话说说、也就是说、
简而言之、这意味着、因此、所以、从而、于是、进而、因为
```

提交前请自检。CI 会自动扫描，发现禁用词会被拒绝。

### Commit 信息规范

```
feat:     新功能
fix:      Bug 修复
docs:     文档更新
style:    格式调整（不影响功能）
refactor: 重构（不影响功能）
test:     测试文件
chore:    构建/工具更新
case:     新增案例
```

示例：
- `case: add charity fundraising case study for medical NGO`
- `feat: add narrative-legal skill for compliance communication`
- `fix: remove banned word from chapter 05`

---

## 版权说明

详见 [CLA 协议](.github/CLA.md)。

简而言之：**你保留你贡献内容的版权，但授予我们有限的使用许可。**

---

## 问题与帮助

- **Bug 报告** → [Bug Report](https://github.com/lj22503/diaolong-skill/issues/new?labels=bug&template=bug_report.yml)
- **功能建议** → [Feature Request](https://github.com/lj22503/diaolong-skill/issues/new?labels=enhancement&template=feature_request.yml)
- **案例提交** → [Case Study](https://github.com/lj22503/diaolong-skill/issues/new?labels=case-study&template=case_study.yml)
- **其他问题** → [GitHub Discussions](https://github.com/lj22503/diaolong-skill/discussions)

---

*本项目遵循 [CODEOWNERS](.github/CODEOWNERS) 进行维护。*
*最新更新：2026年5月2日*