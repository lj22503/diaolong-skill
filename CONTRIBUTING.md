# Contributing to DragonCraft

Thanks for your interest! Contributions are welcome.

## Why Contribute

Narrative isn't a one-size-fits-all thing.

Everyone's experience, audience, and scenario is different. A good narrative system needs real-world feedback and iteration.

If you've used these skills and found a prompt that could be sharper, or you want to add a new scenario (e.g., narrative-education, narrative-crisis), we'd love your contribution.

## How to Contribute

### Submit an Issue

- Found a bug? Open an Issue
- Have a new idea? Open an Issue
- Need help? Open an Issue
- Want to share a use case? Open an Issue

### Submit a PR

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add narrative-education skill'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a PR

## Development Standards

### Directory Structure

Each skill must include:
- `SKILL.md` — skill description (required)
- `changes.md` — changelog (required)
- `examples/` — example files (recommended)
- `tests/` — test files (recommended)

### Testing

Run tests before submitting a PR:

```bash
cd skills/narrative-workflow
python3 -m unittest discover tests -v
```

### Commit Messages

Use semantic commit messages:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation updates
- `style:` Code formatting
- `refactor:` Code restructuring
- `test:` Test files
- `chore:` Build/tooling

## Code of Conduct

- Be respectful
- Accept constructive criticism
- Stay focused on the issue
- Narrative should be honest — no fabrication

## License

By contributing, you agree your contribution will be licensed under the MIT License.

---

*Contributing Guide v1.1.0 | 2026-05-01*
