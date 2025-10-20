import { useMemo } from 'react';
import { ConfigProvider } from 'antd';
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
  id: 'ant-design',
  label: 'Ant Design',
});

export const antDesignTheme = createTheme(
  'ant-design',
  {
    label: 'Ant Design',
    tokens: {
      primaryColor: '#1677ff',
      primaryTextColor: '#ffffff',
      surfaceColor: '#ffffff',
      surfaceTextColor: '#1f1f1f',
      mutedColor: '#f5f5f5',
      mutedTextColor: '#5a5a5a',
      accentColor: '#52c41a',
      accentTextColor: '#112a06',
      outlineColor: '#d9d9d9',
      secondaryColor: '#f5f5f5',
      borderRadius: 6,
      shadowStrength: 0.2,
    },
  },
  {
    tokens: {
      mutedColor: '#f2f4f8',
      surfaceColor: '#ffffff',
    },
  },
);

function AntDesignProvider({
  theme,
  brand,
  children,
}: ChemistAdapterProps) {
  const config = useMemo(() => createAntdConfig(brand), [brand]);

  return (
    <ConfigProvider theme={config}>
      <ThemeSurface theme={theme} brand={brand}>
        {children}
      </ThemeSurface>
    </ConfigProvider>
  );
}

export const antDesignAdapter: ChemistAdapter = {
  id: 'ant-design',
  label: 'Ant Design',
  Provider: AntDesignProvider,
};

export function getAntdTheme(
  input?: ThemeDefinition | ThemeId,
) {
  const resolved = resolveTheme(input);
  const brand = deriveBrandTokens({ tokens: resolved.tokens });
  return createAntdConfig(brand);
}

function createAntdConfig(brand: BrandTokens) {
  return {
    token: {
      colorPrimary: brand.primary,
      colorText: brand.surfaceText,
      colorTextLightSolid: brand.primaryText,
      colorBgContainer: brand.surface,
      colorBgElevated: brand.surface,
      colorBorder: brand.outline,
      controlHeight: 40,
      borderRadius: brand.radius,
      boxShadow: `0 8px 20px rgba(0,0,0,${brand.shadow})`,
    },
  };
}

function resolveTheme(input?: ThemeDefinition | ThemeId) {
  if (typeof input === 'string') {
    return getTheme(input) ?? antDesignTheme;
  }

  return input ?? antDesignTheme;
}

