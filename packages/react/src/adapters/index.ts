import type { DesignSystemId } from '@chemist-ui/core';
import type { ChemistAdapter } from './types';

import {
  antDesignAdapter,
  antDesignTheme,
  getAntdTheme,
} from './ant-design';
import {
  chakraUiAdapter,
  chakraUiTheme,
  getChakraUiTheme,
} from './chakra-ui';
import {
  materialUiAdapter,
  materialUiTheme,
  getMaterialUiTheme,
} from './material-ui';
import {
  shadcnAdapter,
  shadcnTheme,
  getShadcnTheme,
} from './shadcn';

export const defaultDesignSystem: DesignSystemId = 'ant-design';

export const chemistAdapters: Record<
  DesignSystemId,
  ChemistAdapter
> = {
  'ant-design': antDesignAdapter,
  'material-ui': materialUiAdapter,
  'chakra-ui': chakraUiAdapter,
  shadcn: shadcnAdapter,
};

export function getChemistAdapter(id: DesignSystemId) {
  return chemistAdapters[id];
}

export {
  antDesignAdapter,
  antDesignTheme,
  getAntdTheme,
  chakraUiAdapter,
  chakraUiTheme,
  getChakraUiTheme,
  materialUiAdapter,
  materialUiTheme,
  getMaterialUiTheme,
  shadcnAdapter,
  shadcnTheme,
  getShadcnTheme,
};

export * from './types';

