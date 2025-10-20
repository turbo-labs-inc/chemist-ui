import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
      <span className="rounded-full bg-fd-muted px-3 py-1 text-sm font-medium text-fd-muted-foreground">
        Chemist UI · The interface R&amp;D lab for multi-brand SaaS teams
      </span>
      <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Design once. Ship across design languages without rewriting components.
      </h1>
      <p className="max-w-2xl text-balance text-lg text-fd-muted-foreground">
        Chemist UI distills production-ready patterns and tokens for Ant Design and shadcn/ui today
        with React bindings, and layers in additional frameworks and design kits as they stabilize.
        Choose a pricing tier that matches your release cadence and keep your team moving in
        parallel.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center rounded-md bg-fd-foreground px-4 py-2 text-sm font-semibold text-fd-background shadow-sm transition hover:opacity-90"
        >
          Browse Documentation
        </Link>
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center rounded-md border border-fd-muted px-4 py-2 text-sm font-semibold text-fd-foreground transition hover:bg-fd-muted"
        >
          Start Building
        </Link>
        <Link
          href="/docs/roadmap"
          className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-semibold text-fd-foreground/80 transition hover:text-fd-foreground"
        >
          View Roadmap
        </Link>
      </div>
      <div className="w-full max-w-4xl space-y-6">
        <div className="grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-lg border border-fd-muted bg-fd-card p-5">
            <h2 className="text-base font-semibold">Studio • Free</h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              Copy the docs examples, access shadcn/ui + Ant Design themes, and ship polished MVPs
              with zero custom tooling.
            </p>
          </div>
          <div className="rounded-lg border border-fd-muted bg-fd-card p-5">
            <h2 className="text-base font-semibold">Lab • $29/mo</h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              Unlock release-grade packages, CI-ready tokens, and roadmap votes to steer the next
              theme drop.
            </p>
          </div>
          <div className="rounded-lg border border-fd-muted bg-fd-card p-5">
            <h2 className="text-base font-semibold">Enterprise • Let’s talk</h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              Component SLAs, custom adapters, and white-glove onboarding for multi-brand platform
              teams.
            </p>
          </div>
        </div>
        <p className="text-sm text-fd-muted-foreground">
          Chemist UI stays open-source at the core — paid tiers fuel the component lab so every
          release ships with copy-paste shortcuts and theme parity. Track progress in the{' '}
          <Link href="https://github.com/chemist-ui/chemist-ui/blob/main/RANGER_PLAN.md" className="font-medium hover:underline">
            Ranger plan
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
