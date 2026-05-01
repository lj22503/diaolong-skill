# DragonCraft (雕龙)

**雕龙 Skill 套件** — 26 scenario skills for turning personal experience into structured, compelling stories.

> "雕龙点睛，让每个人说好故事。" — 燃冰
> 
> "Craft your story, reveal your dragon."

**Author**: 燃冰 (Product Manager, INTJ)  
**Collaboration**: ant (AI Assistant)  
**License**: MIT  
**Version**: v1.1.0

---

## 📖 Why This Project

In 2023, I delivered a major project — and got sidelined by my boss.

The reason was simple: I could do the work, but I couldn't tell the story.

Boss: "What did you do recently?"  
Me: "Shipped three features."  
Boss: "Why those three?"  
Me: "…Because users needed them."

Six months later, I built an AI-powered investment advisor system as a solo operator. While doing that, I started studying "narrative" — how stories shape perception, trust, and action.

I realized: **Many people can do great work. Few can tell great stories. Those who can do both are almost unstoppable.**

So I built this toolkit with my AI assistant, ant. 26 scenario skills, 3 architectural layers, one underlying principle: **narrative isn't a template — it's an operating system.**

This isn't a "writing guide." It's a system that helps you turn scattered experiences, opinions, and brand stories into logical, conflict-driven, valuable narratives.

---

## 🎯 Core Architecture

```
narrative-suite (suite manager)
  ↓
narrative-workflow (orchestration engine)
  ↓
narrative-meta (underlying OS)
  ├── Eight-dimension assessment
  ├── Anti-AI detection
  ├── Ethics review
  ├── Personality mapping
  └── Memory management
  ↓
20 scenario skills (call narrative-meta modules)
```

**Three layers:**
- **Foundation**: `narrative-meta` — assessment, ethics, personality, memory
- **Orchestration**: `narrative-workflow` — 4-stage pipeline coordination
- **Scenarios**: 20 scenario skills — personal IP, brand, product, fundraising, sales, etc.

---

## 📋 Scenario Skills

| # | Skill | Scenario | Output |
|---|-------|----------|--------|
| 1 | narrative-personal-ip | Personal IP | Full / Short video / Bio |
| 2 | narrative-brand | Brand | Manifesto / Founder story |
| 3 | narrative-product | Product | Launch copy / User story |
| 4 | narrative-funding | Fundraising | BP storyline / Pitch |
| 5 | narrative-sales | Sales | Customer case / Script |
| 6 | narrative-organization | Organizational change | Internal memo / Roadmap |
| 7 | narrative-charity | Charity | Charity story / Fundraising copy |
| 8 | narrative-legal | Legal | Legal opinion / Statement |
| 9 | narrative-medical | Medical | Communication script / Patient story |
| 10 | narrative-social | Social media | Viral copy / Hashtags |
| 11 | narrative-creative | Creative product | Creative brief / User story |
| 12 | narrative-lifestyle | Lifestyle | Manifesto / Content plan |
| 13 | narrative-tech | Tech | Tech story / Pitch |
| 14 | narrative-controversy | Controversy | Position statement / Debate |
| 15 | narrative-art | Art | Artist statement / Exhibition |
| 16 | narrative-psychology | Psychology | Healing story / Support guide |
| 17 | narrative-sustainable | Sustainability | Sustainability report |
| 18 | narrative-education | Education | Script / Video copy |
| 19 | narrative-retrospective | Retrospective | Oral story / Written story |
| 20 | narrative-crisis | Crisis PR | Public statement / Internal memo |

---

## 🚀 Quick Start

### Install

```bash
# Copy skills to your workspace
cp -r skills/* ~/.openclaw/workspace/skills/
```

### Use

```bash
# Via workflow engine
cd skills/narrative-workflow
python3 scripts/workflow.py --user-id "your-id" --scene "brand" --mode "B"

# Or tell your AI assistant: "Help me write a personal IP story"
# It will auto-route to the right skill
```

### Example

```
Help me write a personal IP story, Mode B (deep polish).
My material:
- What I did: Left a big tech company, took a gap year, became a career coach
- What I value: Freedom > stability, reflection > success
- What I faced: 6 months no income, startup failed, client ghosted
- What I learned: Failure doesn't加分, reflection does; freedom isn't doing nothing, it's choosing what to do
```

**Output:**
- Full version (~1200 words)
- Short video version (~300 words)
- Bio version (~150 words)
- Eight-dimension assessment report
- Anti-AI detection report
- Ethics review report

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

## 🤝 How to Contribute

### Contribution Types

- **New Skill**: Add a scenario skill (e.g., narrative-education, narrative-crisis)
- **Improve Prompt**: Optimize existing skill prompts
- **Add Examples**: Real-world case studies for scenario skills
- **Fix Bug**: Fix workflow engine bugs
- **Translate**: Translate skills to other languages

### Workflow

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add narrative-education skill'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a PR

### Standards

Each skill must include:
- `SKILL.md` — skill description (required)
- `changes.md` — changelog (required)
- `examples/` — example files (recommended)
- `tests/` — test files (recommended)

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📚 Related Resources

- **Book**: *Narrative Engine: Content Operating System in the AI Era* (燃冰)
- **Tutorial**: [Investment Framework Tutorial](https://github.com/lj22503/investment-framework-skill)
- **Article**: [20 Skills in One Day: How I Turned Narrative into an Operating System](https://github.com/lj22503/narrative-skills)

---

## 📄 License

MIT License

---

## 💬 Community

- **Issue**: Found a bug or have an idea? Open an Issue
- **Discussion**: Share use cases, ask questions, discuss best practices
- **PR**: Contribute skills, examples, translations

---

*DragonCraft v1.1.0 | 2026-05-01*  
*One-person CEO isn't doing everything alone. It's using tools and AI to amplify personal capability.*
