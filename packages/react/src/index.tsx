'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  deriveBrandTokens,
  getTheme,
  type DesignSystemId,
  type ThemeDefinition,
  type ThemeId,
} from '@chemist-ui/core';
import {
  defaultDesignSystem,
  getChemistAdapter,
  type ChemistAdapter,
  type ChemistAdapterProps,
} from './adapters';
import { ThemeSurface } from './theme-surface';

type ResolvableTheme = ThemeId | ThemeDefinition | null | undefined;

const defaultTheme = requireTheme(defaultDesignSystem);

interface ChemistDesignSystemContextValue {
  designSystem: DesignSystemId;
  setDesignSystem: (next: DesignSystemId) => void;
}

const ChemistThemeContext =
  createContext<ThemeDefinition>(defaultTheme);
const ChemistDesignSystemContext =
  createContext<ChemistDesignSystemContextValue>({
    designSystem: defaultDesignSystem,
    setDesignSystem: () => {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          '[Chemist UI] ChemistProvider is missing from the component tree.',
        );
      }
    },
  });

export interface ChemistProviderProps {
  readonly children: ReactNode;
  readonly theme?: ResolvableTheme;
  readonly designSystem?: DesignSystemId;
  readonly onDesignSystemChange?: (next: DesignSystemId) => void;
}

export function ChemistProvider({
  children,
  theme,
  designSystem = defaultDesignSystem,
  onDesignSystemChange,
}: ChemistProviderProps) {
  const [activeDesignSystem, setActiveDesignSystem] =
    useState<DesignSystemId>(designSystem);

  useEffect(() => {
    setActiveDesignSystem(designSystem);
  }, [designSystem]);

  const resolvedTheme = useMemo(
    () => resolveTheme(theme, activeDesignSystem),
    [theme, activeDesignSystem],
  );

  const handleDesignSystemChange = useCallback(
    (next: DesignSystemId) => {
      setActiveDesignSystem(next);
      onDesignSystemChange?.(next);
    },
    [onDesignSystemChange],
  );

  const designSystemContext = useMemo(
    () => ({
      designSystem: activeDesignSystem,
      setDesignSystem: handleDesignSystemChange,
    }),
    [activeDesignSystem, handleDesignSystemChange],
  );

  return (
    <ChemistDesignSystemContext.Provider value={designSystemContext}>
      <ChemistThemeContext.Provider value={resolvedTheme}>
        <DesignSystemBoundary
          designSystem={activeDesignSystem}
          theme={resolvedTheme}
        >
          {children}
        </DesignSystemBoundary>
      </ChemistThemeContext.Provider>
    </ChemistDesignSystemContext.Provider>
  );
}

export function useChemistTheme() {
  return useContext(ChemistThemeContext);
}

export function useChemistDesignSystem() {
  return useContext(ChemistDesignSystemContext);
}

function DesignSystemBoundary({
  designSystem,
  theme,
  children,
}: {
  readonly designSystem: DesignSystemId;
  readonly theme: ThemeDefinition;
  readonly children: ReactNode;
}) {
  const brand = useMemo(
    () => deriveBrandTokens({ tokens: theme.tokens }),
    [theme],
  );

  const adapter =
    resolveAdapter(designSystem) ??
    resolveAdapter(defaultDesignSystem);

  const AdapterProvider =
    adapter?.Provider ?? DefaultAdapterProvider;

  return (
    <AdapterProvider theme={theme} brand={brand}>
      {children}
    </AdapterProvider>
  );
}

function resolveAdapter(
  id: DesignSystemId,
): ChemistAdapter | undefined {
  return getChemistAdapter(id);
}

function resolveTheme(
  theme: ResolvableTheme,
  preferred: DesignSystemId,
): ThemeDefinition {
  if (theme) {
    if (typeof theme === 'string') {
      const resolved = getTheme(theme);
      if (!resolved) {
        throw new Error(`Unknown Chemist UI theme "${theme}".`);
      }
      return resolved;
    }

    return theme;
  }

  return requireTheme(preferred);
}

function requireTheme(id: DesignSystemId): ThemeDefinition {
  const theme = getTheme(id);
  if (!theme) {
    throw new Error(
      `[Chemist UI] Theme "${id}" has not been registered.`,
    );
  }
  return theme;
}

function DefaultAdapterProvider({
  theme,
  brand,
  children,
}: ChemistAdapterProps) {
  return (
    <ThemeSurface theme={theme} brand={brand}>
      {children}
    </ThemeSurface>
  );
}

export { ThemeSurface } from './theme-surface';
export * from './adapters';
export * from './logo';
