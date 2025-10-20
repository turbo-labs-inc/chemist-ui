import { useMemo } from 'react';
import {
  ChakraProvider,
  extendTheme as extendChakraTheme,
} from '@chakra-ui/react';
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
  id: 'chakra-ui',
  label: 'Chakra UI',
});

export const chakraUiTheme = createTheme(
  'chakra-ui',
  {
    label: 'Chakra UI',
    tokens: {
      primaryColor: '#319795',
      primaryTextColor: '#ffffff',
      surfaceColor: '#f7fafc',
      surfaceTextColor: '#1a202c',
      mutedColor: '#e6fffa',
      mutedTextColor: '#234e52',
      accentColor: '#b2f5ea',
      accentTextColor: '#1a202c',
      outlineColor: '#9ae6b4',
      secondaryColor: '#e6fffa',
      borderRadius: 8,
      shadowStrength: 0.16,
    },
  },
);

function ChakraUiProvider({
  theme,
  brand,
  children,
}: ChemistAdapterProps) {
  const chakraTheme = useMemo(
    () => buildChakraTheme(brand),
    [brand],
  );

  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeSurface theme={theme} brand={brand}>
        {children}
      </ThemeSurface>
    </ChakraProvider>
  );
}

export const chakraUiAdapter: ChemistAdapter = {
  id: 'chakra-ui',
  label: 'Chakra UI',
  Provider: ChakraUiProvider,
};

export function getChakraUiTheme(
  input?: ThemeDefinition | ThemeId,
) {
  const resolved = resolveTheme(input);
  const brand = deriveBrandTokens({ tokens: resolved.tokens });
  return buildChakraTheme(brand);
}

type ChakraTheme = ReturnType<typeof extendChakraTheme>;

function buildChakraTheme(brand: BrandTokens): ChakraTheme {
  return extendChakraTheme({
    colors: {
      chemist: {
        50: brand.accent,
        100: brand.muted,
        500: brand.primary,
      },
    },
    radii: {
      md: `${brand.radius}px`,
      lg: `${brand.radius + 4}px`,
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'var(--chakra-radii-md)',
        },
        defaultProps: {
          colorScheme: 'chemist',
        },
      },
    },
  });
}

function resolveTheme(input?: ThemeDefinition | ThemeId) {
  if (typeof input === 'string') {
    return getTheme(input) ?? chakraUiTheme;
  }

  return input ?? chakraUiTheme;
}
