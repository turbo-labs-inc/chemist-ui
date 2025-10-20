'use client';

import { useState, createContext, useContext } from 'react';

type LibraryId = 'ant-design' | 'material-ui' | 'shadcn' | 'chakra-ui';

interface LibraryFilterContextValue {
  selectedLibrary: LibraryId;
  setSelectedLibrary: (library: LibraryId) => void;
}

const LibraryFilterContext = createContext<LibraryFilterContextValue | null>(null);

export function useLibraryFilter() {
  const context = useContext(LibraryFilterContext);
  if (!context) {
    throw new Error('useLibraryFilter must be used within LibraryFilterProvider');
  }
  return context;
}

export function LibraryFilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryId>('ant-design');

  return (
    <LibraryFilterContext.Provider value={{ selectedLibrary, setSelectedLibrary }}>
      {children}
    </LibraryFilterContext.Provider>
  );
}

const LIBRARIES = [
  { id: 'ant-design' as const, label: 'Ant Design' },
  { id: 'material-ui' as const, label: 'Material UI' },
  { id: 'shadcn' as const, label: 'shadcn/ui' },
  { id: 'chakra-ui' as const, label: 'Chakra UI' },
];

export function LibraryFilter() {
  const { selectedLibrary, setSelectedLibrary } = useLibraryFilter();

  return (
    <div className="border-b border-fd-border p-3">
      <select
        value={selectedLibrary}
        onChange={(e) => setSelectedLibrary(e.target.value as LibraryId)}
        className="w-full rounded-lg border border-fd-border bg-fd-background px-3 py-2.5 text-sm font-medium text-fd-foreground shadow-sm transition-colors hover:bg-fd-accent focus:outline-none focus:ring-2 focus:ring-fd-ring"
      >
        {LIBRARIES.map((library) => (
          <option key={library.id} value={library.id}>
            {library.label}
          </option>
        ))}
      </select>
    </div>
  );
}
