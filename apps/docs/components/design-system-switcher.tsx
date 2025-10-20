'use client';

import type { DesignSystemId } from '@chemist-ui/core';
import { useDocDesignSystem } from '@/app/providers';
import { useMemo } from 'react';

const OPTIONS: Array<{ id: DesignSystemId; label: string }> = [
  { id: 'ant-design', label: 'Ant Design' },
  { id: 'material-ui', label: 'Material UI' },
  { id: 'chakra-ui', label: 'Chakra UI' },
  { id: 'shadcn', label: 'shadcn/ui' },
];

export function DesignSystemSwitcher() {
  const { designSystem, setDesignSystem } = useDocDesignSystem();

  const options = useMemo(() => OPTIONS, []);

  return (
    <label className="inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
      Design System
      <select
        value={designSystem}
        onChange={(event) => setDesignSystem(event.target.value as DesignSystemId)}
        className="rounded-md border border-fd-muted bg-fd-background px-2 py-1 text-sm font-medium text-fd-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
