'use client';

import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { DesignSystemId, ThemeDefinition } from '@chemist-ui/core';
import {
  ChemistProvider,
  useChemistDesignSystem,
  antDesignTheme,
  chakraUiTheme,
  materialUiTheme,
  shadcnTheme,
} from '@chemist-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const themeMap: Record<DesignSystemId, ThemeDefinition> = {
  'ant-design': antDesignTheme,
  'material-ui': materialUiTheme,
  'chakra-ui': chakraUiTheme,
  shadcn: shadcnTheme,
};

const defaultDesignSystem: DesignSystemId = 'ant-design';

export function Providers({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialDesignSystem = (searchParams.get('ds') as DesignSystemId) ?? defaultDesignSystem;
  const [activeDesignSystem, setActiveDesignSystem] =
    useState<DesignSystemId>(initialDesignSystem);

  useEffect(() => {
    if (initialDesignSystem !== activeDesignSystem) {
      setActiveDesignSystem(initialDesignSystem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialDesignSystem]);

  const theme = useMemo(() => {
    return themeMap[activeDesignSystem] ?? themeMap[defaultDesignSystem];
  }, [activeDesignSystem]);

  const handleDesignSystemChange = useCallback(
    (next: DesignSystemId) => {
      setActiveDesignSystem(next);
      const params = new URLSearchParams(searchParams.toString());
      if (next === defaultDesignSystem) {
        params.delete('ds');
      } else {
        params.set('ds', next);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <ChemistProvider
      designSystem={activeDesignSystem}
      theme={theme}
      onDesignSystemChange={handleDesignSystemChange}
    >
      {children}
    </ChemistProvider>
  );
}

export function useDocDesignSystem() {
  return useChemistDesignSystem();
}
