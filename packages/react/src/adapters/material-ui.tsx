import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as createMuiTheme,
} from '@mui/material/styles';
import {
  createTheme,
  defineDesignSystem,
  deriveBrandTokens,
  getTheme,
  type BrandTokens,
  type ThemeDefinition,
  type ThemeId,
} from '@chemist-ui/core';
import { ThemeSurface } from '../theme-surface';
import type { ChemistAdapter, ChemistAdapterProps } from './types';

defineDesignSystem({
  id: 'material-ui',
  label: 'Material UI',
});

export const materialUiTheme = createTheme(
  'material-ui',
  {
    label: 'Material UI',
    tokens: {
      primaryColor: '#1976d2',
      primaryTextColor: '#ffffff',
      surfaceColor: '#ffffff',
      surfaceTextColor: '#0f1c2c',
      mutedColor: '#e3f2fd',
      mutedTextColor: '#0f1c2c',
      accentColor: '#90caf9',
      accentTextColor: '#0f1c2c',
      outlineColor: '#c5d8f1',
      secondaryColor: '#e3f2fd',
      borderRadius: 6,
      shadowStrength: 0.18,
    },
  },
);

function MaterialUiProvider({
  theme,
  brand,
  children,
}: ChemistAdapterProps) {
  const muiTheme = useMemo(() => buildMaterialUiTheme(brand), [brand]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeSurface theme={theme} brand={brand}>
        {children}
      </ThemeSurface>
    </MuiThemeProvider>
  );
}

export const materialUiAdapter: ChemistAdapter = {
  id: 'material-ui',
  label: 'Material UI',
  Provider: MaterialUiProvider,
};

export function getMaterialUiTheme(
  input?: ThemeDefinition | ThemeId,
) {
  const resolved = resolveTheme(input);
  const brand = deriveBrandTokens({ tokens: resolved.tokens });
  return buildMaterialUiTheme(brand);
}

function buildMaterialUiTheme(brand: BrandTokens) {
  return createMuiTheme({
    palette: {
      mode: 'light',
      primary: {
        main: brand.primary,
        contrastText: brand.primaryText,
      },
      background: {
        default: brand.surface,
        paper: brand.surface,
      },
      text: {
        primary: brand.surfaceText,
        secondary: brand.mutedText,
      },
    },
    shape: {
      borderRadius: brand.radius,
    },
    shadows: Array(25).fill(
      `0 8px 30px rgba(0,0,0,${brand.shadow})`,
    ) as any,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: brand.radius,
          },
        },
      },
    },
  });
}

function resolveTheme(input?: ThemeDefinition | ThemeId) {
  if (typeof input === 'string') {
    return getTheme(input) ?? materialUiTheme;
  }

  return input ?? materialUiTheme;
}

