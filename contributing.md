# Contributing to Chemist UI

Thank you for your interest in strengthening the Chemist UI lab. This document outlines how we work, how to get set up locally, and how to land successful pull requests.

## Our collaboration model

- **Ranger tracks** keep workstreams unblocked. Each major initiative is assigned a color-coded track in [`RANGER_PLAN.md`](./RANGER_PLAN.md). Start there to find open tasks or propose a new experiment.
- **Open-core** means the public repo stays MIT. Paid tiers fund the work but the code you see here is community owned.
- **Docs are source**. Anything we merge into docs should ship alongside working code snippets.

## Getting started

1. **Prerequisites**
   - Node.js 20+
   - pnpm 9+
   - Git
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Boot the docs** (optional but handy for copy checks)
   ```bash
   pnpm dev --filter apps/docs
   ```
4. **Type-check + lint**
   ```bash
   pnpm lint
   pnpm typecheck
   ```

## Repository structure

- `apps/docs` — Next.js + Fumadocs marketing site
- `packages/core` — theme registry and shared token contract
- `packages/react` — provider and component bindings
- `packages/{ant-design,shadcn}` — adapter packages for each design system
- `.github/` — issue templates, CI, and automations

## Contribution paths

- **Docs & messaging** — polish copy, add tutorials, expand the manifesto
- **Component lab** — design system adapters, React primitives, unit tests
- **Tooling** — Turbo tasks, lint rules, CI improvements
- **Community** — templates, automation, Discord moderation

Before taking a larger task, comment on the relevant Ranger track or open a GitHub Discussion to align on scope.

## Branch & PR workflow

1. Fork the repo and create a branch: `git checkout -b <github-username>/<track>-<short-title>`
2. Make changes and keep commits scoped per track when possible
3. Run lint, typecheck, and any relevant package builds
4. Open a PR against `main` using the matching template
5. Tag the Ranger track in the PR description so reviewers understand context

We use conventional changelog entries managed by Changesets soon™. Until then, summarize impact clearly in the PR body.

## Issue process

- Bugs require a reproduction (CodeSandbox, StackBlitz, or repo link)
- Feature requests should cite which tier (Studio/Lab/Enterprise) benefits
- Use the issue templates in `.github/ISSUE_TEMPLATE` to keep triage fast

## Code style

- TypeScript strict mode, React 18
- Tailwind utility conventions for docs/site styling
- Avoid introducing new dependencies without discussion
- Keep comments focused on intent (why) rather than mechanics (what)

## Support & contact

- GitHub Discussions: <https://github.com/chemist-ui/chemist-ui/discussions>
- Email the lab: <lab@chemist-ui.com>
- Community calls: Thursdays 9am PT (details in the roadmap)

Thanks again for contributing — we’re excited to build the Chemist UI lab with you.
