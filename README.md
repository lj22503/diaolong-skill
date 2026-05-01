# Narrative Skill Suite

**叙事 Skill 套件** — 20+ scenario skills for turning personal experience into structured, compelling stories.

> "框架是我的语言。" — 燃冰

---

## 🎯 What is this?

A suite of AI agent skills that help you transform scattered personal experiences into logical, conflict-driven, valuable personal stories.

**Core philosophy**: Every person has a story worth telling. The problem isn't lack of content — it's lack of framework.

---

## 📚 Skills

### Meta Skills (Foundation)

| Skill | Description |
|-------|-------------|
| `narrative-meta` | The underlying OS for all narrative skills. Eight-dimension assessment, AI-detection, ethics review, personality mapping, memory management. |
| `narrative-workflow` | Orchestration engine. Coordinates meta skills and scenario skills through a 4-stage pipeline. |
| `narrative-suite` | Suite manager. Navigation, comparison, dependency mapping for all 20+ scenario skills. |

### Scenario Skills (20 Scenarios)

| # | Skill | Scenario | Output |
|---|-------|----------|--------|
| 1 | `narrative-personal-ip` | Personal IP | Full version / Short video / Bio |
| 2 | `narrative-brand` | Brand | Brand manifesto / Founder story |
| 3 | `narrative-product` | Product | Launch copy / User story |
| 4 | `narrative-funding` | Fundraising | BP storyline / Pitch |
| 5 | `narrative-sales` | Sales | Customer case / Sales script |
| 6 | `narrative-organization` | Organizational change | Internal memo / Roadmap |
| 7 | `narrative-charity` | Charity | Charity story / Fundraising copy |
| 8 | `narrative-legal` | Legal | Legal opinion / Statement |
| 9 | `narrative-medical` | Medical | Communication script / Patient story |
| 10 | `narrative-social` | Social media | Viral copy / Hashtags |
| 11 | `narrative-creative` | Creative product | Creative brief / User story |
| 12 | `narrative-lifestyle` | Lifestyle | Manifesto / Content plan |
| 13 | `narrative-tech` | Tech | Tech story / Pitch |
| 14 | `narrative-controversy` | Controversy | Position statement / Debate |
| 15 | `narrative-art` | Art | Artist statement / Exhibition |
| 16 | `narrative-psychology` | Psychology | Healing story / Support guide |
| 17 | `narrative-sustainable` | Sustainability | Sustainability report |
| 18 | `narrative-education` | Education | Script / Video copy |
| 19 | `narrative-retrospective` | Retrospective | Oral story / Written story |
| 20 | `narrative-crisis` | Crisis PR | Public statement / Internal memo |

---

## 🔧 How to Use

### Quick Start

```
Tell me your scenario, and I'll recommend the right skill.

Example: "帮我写一个个人IP故事"
```

### Workflow Modes

| Mode | Description |
|------|-------------|
| A | Quick output (Stage 0→1→4) |
| B | Deep polish (Stage 0→1→2→4, iterate until all scores ≥7) |
| C | Interactive design (Stage 0→1→2→3→4) |
| D | Interactive design only (existing text) |

### Output Formats

- **Full version**: 800-1500 words
- **Short video version**: ~300 words
- **Bio version**: ~150 words

---

## 📊 Quality Assessment

Every story is evaluated using the **Eight-Dimension Framework**:

| Dimension | What it checks |
|-----------|----------------|
| 历史 (History) | Causal chain coherence |
| 辩证 (Dialectic) | Balance of narrative and facts |
| 现象 (Phenomenon) | Concrete scene anchors |
| 语言 (Language) | Natural, conversational, no AI patterns |
| 形式 (Form) | Labov minimal story structure |
| 存在 (Existence) | Serves clear purpose/identity |
| 美感 (Aesthetics) | Golden sentence density, imagery |
| 元反思 (Meta-reflection) | Self-awareness, no self-glorification |

**Anti-AI Detection**: 7 rules to detect and remove AI-generated patterns.

**Ethics Review**: 3 principles — no fabrication, audience-oriented, scenario-appropriate.

---

## 🎭 Narrative Personality Types

| Type | Style | Best For |
|------|-------|----------|
| INTJ | Strategic, logical | Tech, finance, analysis |
| ENFJ | Inspiring, warm | Brand mission, education, charity |
| ENFP | Spontaneous, creative | Social media, lifestyle, creative |
| INFJ | Metaphorical, healing | Brand philosophy, psychology, art |

---

## 📁 Repository Structure

```
skills/
├── narrative-meta/           # Meta skill (assessment, ethics, memory)
├── narrative-workflow/       # Workflow engine
├── narrative-suite/          # Suite manager
├── narrative-personal-ip/    # Personal IP scenario
├── narrative-brand/          # Brand scenario
├── narrative-product/        # Product scenario
├── narrative-funding/        # Fundraising scenario
├── narrative-sales/          # Sales scenario
├── narrative-organization/   # Organizational change scenario
├── narrative-charity/        # Charity scenario
├── narrative-legal/          # Legal scenario
├── narrative-medical/        # Medical scenario
├── narrative-social/         # Social media scenario
├── narrative-creative/       # Creative product scenario
├── narrative-lifestyle/      # Lifestyle scenario
├── narrative-tech/           # Tech scenario
├── narrative-controversy/    # Controversy scenario
├── narrative-art/            # Art scenario
├── narrative-psychology/     # Psychology scenario
├── narrative-sustainable/    # Sustainability scenario
├── narrative-education/      # Education scenario
├── narrative-retrospective/  # Retrospective scenario
└── narrative-crisis/         # Crisis PR scenario
```

---

## 🌟 Core Values

**发于微小，放大善意** — Start small, amplify kindness.

We don't tell "success stories." We tell stories about:

- 🤝 Seeing your difficulties (empathy)
- 🌱 Even small actions matter (action)
- 🔗 We're imperfect but together (connection)
- ✨ Wounds can become light (hope)

---

## 📝 Examples

See the `examples/` directory for before/after comparisons, template library, and case studies.

---

## 🔗 Dependencies

```
narrative-suite (manager)
  ↓
narrative-workflow (orchestration)
  ↓
narrative-meta (OS)
  ├── Eight-dimension assessment
  ├── Anti-AI detection
  ├── Ethics review
  ├── Personality mapping
  └── Memory management
  ↓
20 scenario skills (call narrative-meta modules)
```

---

## 📄 License

CC BY-NC-SA 4.0 — Free to use with attribution, non-commercial.

---

**Created by**: 燃冰 × ant (Narrative Skill Team)
**Version**: 1.0.0
**Last updated**: 2026-05-01
