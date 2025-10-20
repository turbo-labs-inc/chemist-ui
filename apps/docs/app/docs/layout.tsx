import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import { LibraryFilterProvider } from '@/components/library-filter';
import { DocsLayoutClient } from '@/components/docs-layout-client';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: DocsLayoutProps) {
  return (
    <LibraryFilterProvider>
      <DocsLayoutClient pageTree={source.pageTree} baseOptions={baseOptions()}>
        {children}
      </DocsLayoutClient>
    </LibraryFilterProvider>
  );
}
