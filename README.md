<div align="center">
  <img src="./assets/logo-wordmark-dark.svg" alt="Chemist UI" width="320" />

  <p align="center">
    Multi-brand interface lab for teams shipping across design systems.
  </p>

  <p align="center">
    <a href="https://chemist-ui.dev">Website</a>
    ·
    <a href="https://docs.chemist-ui.dev">Docs</a>
    ·
    <a href="https://github.com/chemist-ui/chemist-ui/discussions">Community</a>
  </p>
</div>

---

# Chemist UI

Chemist UI is an open-core design system workspace. It packages production-ready compositions, theming contracts, and framework bindings so product teams can design once and ship across Ant Design, shadcn/ui, and future adapters without reimplementing components.

## Status

- ✅ Ranger Plan bootstrapped (monorepo + turbopack tooling)
- ✅ React core with Ant Design & shadcn/ui theme registry
- 🚧 Component catalog (Button, Card, Input, Shell)
- 🧪 Upcoming: Material & Chakra adapters, Vue/Svelte bindings

## Packages

| Package | Description |
| --- | --- |
| `@chemist-ui/core` | Theme registry, token contract, utilities |
| `@chemist-ui/react` | React provider, adapters, component bindings |
| `@chemist-ui/react/adapters/*` | Ant Design, Material UI, Chakra, shadcn bridges |
| `apps/docs` | Next.js + Fumadocs marketing & documentation site |

## Quick start

```bash
pnpm add @chemist-ui/core @chemist-ui/react antd
```

```tsx
import { ChemistProvider, antDesignTheme } from '@chemist-ui/react';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ChemistProvider designSystem="ant-design" theme={antDesignTheme}>
      {children}
    </ChemistProvider>
  );
}
```

Copy any snippet from the docs, choose the adapter that matches your design language, and you’re shipping.

## Pricing

| Tier | Perfect for | Includes |
| --- | --- | --- |
| **Studio (Free)** | Indie builders, internal tools | Docs copy, React snippets, Ant Design & shadcn themes |
| **Lab ($29/mo)** | Startups scaling teams | Release-grade packages, CI-ready tokens, roadmap votes |
| **Enterprise (Contact)** | Multi-brand platforms | SLAs, custom adapters, on-site onboarding |

Paid tiers keep the lab running; the open-source core stays MIT and community friendly.

## Roadmap

Follow the [public roadmap](./apps/docs/content/docs/roadmap.mdx) or dive into the structured [Ranger plan](./RANGER_PLAN.md) to see how tracks are assigned. Experiments ship weekly, with release candidates landing each Friday.

## Contributing

We welcome pull requests and new experiment proposals. Start with the [Contributing guide](./contributing.md), join the discussion in GitHub, or pitch a new Ranger track.

## License

MIT © Chemist UI
