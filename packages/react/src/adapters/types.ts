import type { ReactNode } from 'react';
import type {
  BrandTokens,
  DesignSystemId,
  ThemeDefinition,
} from '@chemist-ui/core';

export interface ChemistAdapterProps {
  readonly theme: ThemeDefinition;
  readonly brand: BrandTokens;
  readonly children: ReactNode;
}

export interface ChemistAdapter {
  readonly id: DesignSystemId;
  readonly label: string;
  readonly Provider: (props: ChemistAdapterProps) => JSX.Element;
}

