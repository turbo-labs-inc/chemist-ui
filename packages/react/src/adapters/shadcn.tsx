import { ThemeSurface } from '../theme-surface';
import {
  createTheme,
  defineDesignSystem,
  getTheme,
  type ThemeDefinition,
  type ThemeId,
} from '@chemist-ui/core';
import type { ChemistAdapter, ChemistAdapterProps } from './types';

defineDesignSystem({
  id: 'shadcn',
  label: 'shadcn/ui',
});

export const shadcnTheme = createTheme(
  'shadcn',
  {
    label: 'shadcn/ui',
    tokens: {
      primaryColor: '#0f172a',
      primaryTextColor: '#f8fafc',
      surfaceColor: '#ffffff',
      surfaceTextColor: '#0f172a',
      mutedColor: '#e2e8f0',
      mutedTextColor: '#334155',
      accentColor: '#38bdf8',
      accentTextColor: '#0f172a',
      outlineColor: '#cbd5f5',
      secondaryColor: '#1e293b',
      borderRadius: 8,
      shadowStrength: 0.22,
    },
  },
);

function ShadcnProvider({
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

export const shadcnAdapter: ChemistAdapter = {
  id: 'shadcn',
  label: 'shadcn/ui',
  Provider: ShadcnProvider,
};

export function getShadcnTheme(
  input?: ThemeDefinition | ThemeId,
) {
  return resolveTheme(input);
}

function resolveTheme(input?: ThemeDefinition | ThemeId) {
  if (typeof input === 'string') {
    return getTheme(input) ?? shadcnTheme;
  }

  return input ?? shadcnTheme;
}

