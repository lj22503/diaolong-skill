# Diaolong Narrative (DragonCraft)

> **Narrative Equity** — Let everyone tell their story well.

## What problem does this solve?

| Pain point | How Diaolong helps |
|---|---|
| Your writing gets no traction | Structured narrative methods that build tension and pull readers in |
| You don't know how to start | 26 scenario-based Skill templates, usable from chat interfaces |
| Your writing sounds like AI | Built-in de-AI-ification check that filters template-speak |
| You don't know which Skill to use | Trigger-word mapping — speak naturally, get the right Skill |

## 26 Narrative Scenario Skills

| Scenario | Skill | Use Cases |
|---|---|---|
| Artist Statement | `narrative-art` | Artwork / exhibition prefaces / creative philosophy |
| Book Writing | `narrative-book` | Book reviews / chapters / forewords |
| Personal Brand | `narrative-personal-brand` | IP stories / self-narratives |
| Personal IP | `narrative-personal-ip` | Identity narratives / influence building |
| Product Launch | `narrative-product-launch` | New product releases / pre-sale scripts |
| Product Sales | `narrative-product` | Product selection / selling points / testimonials |
| Sales Persuasion | `narrative-sales` | Case studies / negotiation scripts |
| Brand Story | `narrative-brand` | Brand stories / slogans / brand narratives |
| Crisis PR | `narrative-crisis` | Statements / responses / reputation repair |
| Charity Fundraising | `narrative-charity` | Fundraising / project stories / impact reports |
| Medical Communication | `narrative-medical` | Patient stories / health education |
| Startup Fundraising | `narrative-funding` | Pitch decks / roadshow scripts / investor letters |
| Legal Narrative | `narrative-legal` | Defense / mediation / compliance communication |
| Education & Training | `narrative-education` | Course promotion / student stories / teaching cases |
| Lifestyle | `narrative-lifestyle` | Recommendations / experiences / sharing |
| Mental Health | `narrative-psychology` | Emotions / healing / therapist scripts |
| Organization | `narrative-organization` | Vision / mission / team culture |
| Social Media | `narrative-social` | WeChat Moments / Weibo / short-video scripts |
| Controversy | `narrative-controversy` | Taking sides / rebuttals / rational discussion |
| Creative Writing | `narrative-creative` | Novels / essays / screenplays |
| Tech Narrative | `narrative-tech` | Technical evangelism / product deep-dives / industry analysis |
| Sustainability | `narrative-sustainable` | ESG / green narratives / sustainable development |
| Business Retrospective | `narrative-retrospective` | Project retros / annual reviews / lessons learned |
| Narrative Suite | `narrative-suite` | Full narrative toolkit — multi-Skill coordination |
| Narrative Meta-System | `narrative-meta` | 8-blade quality evaluation / de-AI check / ethics review |
| Narrative Workflow | `narrative-workflow` | Meta-workflow that orchestrates the above Skills |

## Quick Start

### Online Demo

Visit **https://diaolong.mangofolio.com** to use all Skills directly. Optimized for WeChat sharing.

### Use as AI Agent Skills

```bash
# Clone the repository
git clone https://github.com/lj22503/diaolong-skill.git
cd diaolong-skill

# Usage 1: Read Skill files directly
# Open skills/narrative-*/SKILL.md to get full prompts

# Usage 2: Deploy the site to GitHub Pages
cd site && npm install && npm run build
```

### Typical Invocation Examples

```
User: Help me write an artist statement about urban-edge photography
→ Invoke narrative-art
→ Output: artist statement + exhibition preface + work interpretation

User: Write a WeChat Moments post for selling insurance with a customer case
→ Invoke narrative-sales
→ Output: Moments copy + customer testimonial structure

User: My product is launching — help me write a press release
→ Invoke narrative-product-launch
→ Output: press release + media Q&A pre-brief + social media captions
```

## Core Highlights

- **Narrative Meta-System**: 8-blade quality evaluation + de-AI check + ethics review
- **26 Scenario Coverage**: from artists to founders, sales to charity — one platform covers all
- **Free Book Chapters**: `chapters/` directory contains book chapters, ready to read
- **Case Library**: `examples/` directory has real cases — submit via `case-study` Issues to contribute
- **AI Agent Friendly**: Every Skill has a standardized `SKILL.md`, agents can parse and invoke directly

## Project Structure

```
diaolong-skill/
├── skills/                    # 26 narrative Skills (each with SKILL.md)
├── chapters/                  # Book chapters (org format)
│   ├── book/                  # Full book
│   └── wechat/                # WeChat sync version
├── examples/                  # Case library
├── site/                      # Astro site source → GitHub Pages
├── tools/                     # Toolkit
└── .github/workflows/         # CI: banned-word scan / auto deploy
```

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md).

- Submit cases → GitHub Issue (label: `case-study`)
- Contribute new Skills → methodology justification + full cases required
- Optimize existing Skills → include reasoning and impact data

## Disclaimer

- Narrative ability is a supplementary skill, not a substitute for professional writing training
- Ensure any individuals involved in case stories are informed and have consented
- Self-review factual accuracy of generated content

## License

MIT License — Free to use, please credit source for commercial use.

---

**Version**: v1.0  
**Website**: https://diaolong.mangofolio.com  
**GitHub**: https://github.com/lj22503/diaolong-skill  
**Other languages**: [简体中文](README.md)