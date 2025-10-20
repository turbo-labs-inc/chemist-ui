export interface BrandTokens {
  primary: string;
  primaryText: string;
  surface: string;
  surfaceText: string;
  muted: string;
  mutedText: string;
  accent: string;
  accentText: string;
  outline: string;
  radius: number;
  shadow: number;
}

export interface ThemeTokenSource {
  tokens: Record<string, string | number>;
}

export const chemistBrandDefaults: BrandTokens = {
  primary: '#f09819',
  primaryText: '#1a1f3a',
  surface: '#fef7d6',
  surfaceText: '#3b4371',
  muted: '#f8eaa4',
  mutedText: '#5b638c',
  accent: '#edde5d',
  accentText: '#1a1f3a',
  outline: '#f3904f',
  radius: 10,
  shadow: 0.18,
};

export function deriveBrandTokens(
  theme: ThemeTokenSource,
  fallback: BrandTokens = chemistBrandDefaults,
): BrandTokens {
  return {
    primary: getToken(theme, 'primaryColor', fallback.primary),
    primaryText: getToken(theme, 'primaryTextColor', fallback.primaryText),
    surface: getToken(theme, 'surfaceColor', fallback.surface),
    surfaceText: getToken(theme, 'surfaceTextColor', fallback.surfaceText),
    muted: getToken(theme, 'mutedColor', fallback.muted),
    mutedText: getToken(theme, 'mutedTextColor', fallback.mutedText),
    accent: getToken(theme, 'accentColor', fallback.accent),
    accentText: getToken(theme, 'accentTextColor', fallback.accentText),
    outline: getToken(theme, 'outlineColor', fallback.outline),
    radius: getRadius(theme, 'borderRadius', fallback.radius),
    shadow: getNumber(theme, 'shadowStrength', fallback.shadow),
  };
}

function getToken(
  theme: ThemeTokenSource,
  key: string,
  fallback: string,
): string {
  const value = theme.tokens[key];
  return typeof value === 'string' ? value : fallback;
}

function getRadius(
  theme: ThemeTokenSource,
  key: string,
  fallback: number,
): number {
  const value = theme.tokens[key];
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  return fallback;
}

function getNumber(
  theme: ThemeTokenSource,
  key: string,
  fallback: number,
): number {
  const value = theme.tokens[key];
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  return fallback;
}
