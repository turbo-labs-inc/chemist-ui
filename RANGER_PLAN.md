# Chemist UI Parallel Plan

## Mission Overview
- Build a copy-paste-first design system hub that serves React developers today and expands to additional frameworks and themes later.
- Transform the existing Nativewind starter into a Turborepo-style workspace aligned with the Chemist UI manifesto.
- Operate in parallel using color-coded ranger tracks to keep responsibilities clear and reduce blockers.

## Ranger Tracks

### Red Ranger – Repository Reconnaissance (✅ Complete)
- Audit inherited Nativewind codebase, tooling, and docs.
- Capture high-level gaps between current state and Chemist UI architecture manifesto.
- Output: this plan, initial context briefing, confirmed mono → multi-package migration requirement.

### Blue Ranger – Workspace Scaffold (🚧 Active)
- Goals:
  - Introduce Turborepo-like layout with `apps/docs` (Next.js + Fumadocs) and `packages/{core,react}` plus adapter scaffolds under `packages/react/src/adapters`.
  - Configure root tooling (pnpm, turbo, tsconfig base, eslint/prettier) to support multi-package development.
  - Provide starter build/test scripts and ensure local dev for docs app.
- Key Deliverables:
  - Updated root `package.json` with workspaces + scripts.
  - `apps/docs` bootstrapped (Next.js 15 + Fumadocs skeleton, Tailwind base config).
  - `packages/*` directories with minimal exports and shared tsconfig/references.
  - Turbo + pnpm lock generated.
- Dependencies: none (can proceed now).
- Notes: React-only for now; leave Vue/Svelte stubs commented or TODO.

### Black Ranger – Design System Pipeline (🕓 Ready After Blue Seeds)
- Goals:
  - Implement theme selection logic supporting Ant Design + shadcn variants using shared core tokens.
  - Create representative `Button` + `Card` components wired through `packages/core` → `packages/react` → `@chemist-ui/react/adapters/{ant-design,shadcn}`.
  - Wire docs previews to switch between the two themes (React only).
- Key Deliverables:
  - Shared theme contract (`ThemeConfig`) and runtime resolver.
  - React adapter that consumes core logic and exposes themed exports (e.g. `@chemist-ui/react` adapter subpaths).
  - Example components showcased in docs with copy-paste code snippets.
- Dependencies: Blue Ranger’s scaffold (directory + tooling).

### Yellow Ranger – Branding & Validation (🚧 Active)
- Owner: Yellow Ranger (assistant) is now engaged.
- Goals:
  - Replace Nativewind branding, README, and assets with Chemist UI messaging and manifesto content.
  - Document architecture, getting started flow, and monetization tiers in docs + README.
  - Run lint/build/test to confirm workspace stability; set up CI placeholder if capacity allows.
- Key Deliverables:
  - Updated `README.md`, contributing guidelines adjustments, brand assets placeholders.
  - Docs home page articulating Chemist vision, pricing tiers, roadmap.
  - Passing `pnpm lint`, `pnpm test`, `pnpm build` (or documented gaps if pending).
- Dependencies: Blue Ranger (workspace), coordination with Black for showcasing components.

## Coordination Notes
- Keep commits scoped per ranger track to ease review.
- Share component contracts early (ThemeConfig, component props) to avoid rework across Blue/Black tracks.
- Maintain ASCII-only assets placeholders until final design files arrive.
- Track outstanding TODOs inside package READMEs for future Vue/Svelte expansion; do not ship incomplete adapters yet.

## Next Checkpoint
- Blue Ranger to provide initial workspace PR scaffolding before implementing any complex components.
- Black & Yellow Rangers start once Blue commits base structure to main branch (or feature branch shared across agents).
