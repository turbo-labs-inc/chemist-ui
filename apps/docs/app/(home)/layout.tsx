import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: HomeLayoutProps) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
