export type ThemeId = 'ant-design' | 'material-ui' | 'chakra-ui' | 'shadcn';
export type DesignSystemId = ThemeId;

export type ThemeTokens = Record<string, string | number>;

export interface ThemeConfig {
  readonly id: ThemeId;
  readonly label: string;
  readonly tokens: ThemeTokens;
}

export type ThemeOverrides = Partial<Omit<ThemeConfig, 'id'>>;

export interface ThemeDefinition extends ThemeConfig {
  readonly tokens: ThemeTokens;
}

const registry = new Map<ThemeId, ThemeDefinition>();
const designSystems = new Map<DesignSystemId, DesignSystemConfig>();

export interface DesignSystemConfig {
  readonly id: DesignSystemId;
  readonly label: string;
}

export function defineTheme(theme: ThemeDefinition) {
  registry.set(theme.id, theme);
  return theme;
}

export function getTheme(id: ThemeId): ThemeDefinition | undefined {
  return registry.get(id);
}

export function createTheme(
  id: ThemeId,
  base: Omit<ThemeConfig, 'id'>,
  overrides: ThemeOverrides = {},
): ThemeDefinition {
  const theme: ThemeDefinition = {
    id,
    label: overrides.label ?? base.label,
    tokens: {
      ...base.tokens,
      ...(overrides.tokens ?? {}),
    },
  };

  return defineTheme(theme);
}

export function defineDesignSystem(config: DesignSystemConfig) {
  designSystems.set(config.id, config);
  return config;
}

export function getDesignSystem(id: DesignSystemId) {
  return designSystems.get(id);
}

export function listDesignSystems() {
  return Array.from(designSystems.values());
}

export {
  chemistBrandDefaults,
  deriveBrandTokens,
} from './brand';
export type { BrandTokens } from './brand';
