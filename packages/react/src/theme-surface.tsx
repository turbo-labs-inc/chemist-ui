import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { deriveBrandTokens, type BrandTokens, type ThemeDefinition } from '@chemist-ui/core';

export interface ThemeSurfaceProps {
  readonly theme: ThemeDefinition;
  readonly brand?: BrandTokens;
  readonly children: ReactNode;
  readonly style?: CSSProperties;
}

/**
 * Applies Chemist theme tokens as CSS variables for downstream components.
 */
export function ThemeSurface({
  theme,
  brand,
  children,
  style,
}: ThemeSurfaceProps) {
  const resolvedBrand = useMemo(
    () => brand ?? deriveBrandTokens({ tokens: theme.tokens }),
    [brand, theme],
  );

  const surfaceStyle = useMemo<CSSProperties>(
    () => ({
      '--chemist-primary-color': resolvedBrand.primary,
      '--chemist-primary-text': resolvedBrand.primaryText,
      '--chemist-surface-color': resolvedBrand.surface,
      '--chemist-surface-text': resolvedBrand.surfaceText,
      '--chemist-muted-color': resolvedBrand.muted,
      '--chemist-muted-text': resolvedBrand.mutedText,
      '--chemist-accent-color': resolvedBrand.accent,
      '--chemist-accent-text': resolvedBrand.accentText,
      '--chemist-outline-color': resolvedBrand.outline,
      '--chemist-border-radius': `${resolvedBrand.radius}px`,
      '--chemist-shadow-strength': resolvedBrand.shadow.toString(),
      ...style,
    }),
    [resolvedBrand, style],
  );

  return (
    <div style={surfaceStyle} className="contents">
      {children}
    </div>
  );
}

