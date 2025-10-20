import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    '@chemist-ui/core',
    '@chemist-ui/react',
  ],
};

export default withMDX(config);
