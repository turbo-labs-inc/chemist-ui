import { DesignSystemSwitcher } from '@/components/design-system-switcher';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ChemistLogo } from '@chemist-ui/react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <ChemistLogo
          className="flex h-6 items-center text-fd-foreground"
          accent="brand"
          isoProps={{
            className: 'h-6 w-auto',
            appearance: 'auto',
            gradientStops: ['var(--chemist-logo-iso-start)', 'var(--chemist-logo-iso-end)'],
          }}
          wordmarkProps={{
            className: 'h-5 w-auto max-md:hidden',
            appearance: 'auto',
            gradientStops: ['var(--chemist-logo-wordmark-start)', 'var(--chemist-logo-wordmark-end)'],
          }}
        />
      ),
      transparentMode: 'auto',
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/chemist-ui/chemist-ui',
        external: true,
      },
      {
        text: 'Roadmap',
        url: '/docs/roadmap',
      },
      {
        type: 'custom',
        on: 'nav',
        children: <DesignSystemSwitcher />,
      },
    ],
  };
}
