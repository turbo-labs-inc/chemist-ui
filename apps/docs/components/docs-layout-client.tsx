'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { PageTree } from 'fumadocs-core/server';
import { useMemo } from 'react';
import { LibraryFilter, useLibraryFilter } from '@/components/library-filter';

interface DocsLayoutClientProps {
  children: React.ReactNode;
  pageTree: PageTree;
  baseOptions: BaseLayoutProps;
}

function filterPageTree(tree: PageTree, selectedLibrary: string): PageTree {
  // Recursively filter the tree
  const filterNode = (node: PageTree.Node): PageTree.Node | null => {
    // If it's a folder, recursively filter its children
    if ('children' in node && node.children) {
      const filteredChildren = node.children
        .map(filterNode)
        .filter((child): child is PageTree.Node => child !== null);

      // Keep the folder if it has children after filtering
      if (filteredChildren.length > 0) {
        return {
          ...node,
          children: filteredChildren,
        };
      }

      // Also keep folder if its URL matches the library
      if ('url' in node && node.url?.includes(`/${selectedLibrary}`)) {
        return node;
      }

      return null;
    }

    // For page nodes, check if URL matches the selected library
    if ('url' in node && node.url) {
      if (node.url.includes(`/${selectedLibrary}`)) {
        return node;
      }
      return null;
    }

    // For separator nodes, always include them (they'll be filtered out if between empty sections)
    if ('type' in node && node.type === 'separator') {
      return node;
    }

    return null;
  };

  const filteredChildren = tree.children
    ?.map(filterNode)
    .filter((child): child is PageTree.Node => child !== null) || [];

  return {
    ...tree,
    children: filteredChildren,
  };
}

export function DocsLayoutClient({ children, pageTree, baseOptions }: DocsLayoutClientProps) {
  const { selectedLibrary } = useLibraryFilter();

  const filteredTree = useMemo(
    () => filterPageTree(pageTree, selectedLibrary),
    [pageTree, selectedLibrary]
  );

  return (
    <DocsLayout
      tree={filteredTree}
      {...baseOptions}
      sidebar={{
        banner: <LibraryFilter />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
