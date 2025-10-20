'use client';

import { useState } from 'react';

interface ComponentPreviewProps {
  /**
   * The component to preview
   */
  children: React.ReactNode;
  /**
   * The source code to display
   */
  code: string;
  /**
   * Language for syntax highlighting (default: tsx)
   */
  lang?: string;
}

export function ComponentPreview({
  children,
  code,
  lang = 'tsx',
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-fd-border bg-fd-card">
      <div className="flex items-center justify-between border-b border-fd-border bg-fd-muted/30 px-4">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`relative px-3 py-2.5 text-sm font-medium transition-colors ${
              activeTab === 'preview'
                ? 'text-fd-foreground'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
            style={{
              borderBottom: activeTab === 'preview' ? '2px solid currentColor' : '2px solid transparent',
            }}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`relative px-3 py-2.5 text-sm font-medium transition-colors ${
              activeTab === 'code'
                ? 'text-fd-foreground'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
            style={{
              borderBottom: activeTab === 'code' ? '2px solid currentColor' : '2px solid transparent',
            }}
          >
            Code
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex h-7 items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-2.5 text-xs font-medium text-fd-muted-foreground shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {activeTab === 'preview' ? (
        <div className="flex min-h-[350px] items-center justify-center p-8">
          {children}
        </div>
      ) : (
        <div className="max-h-[450px] overflow-auto">
          <pre className="p-4 text-sm">
            <code className={`language-${lang}`}>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
