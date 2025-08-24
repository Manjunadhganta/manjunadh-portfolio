import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.microlink.io"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ignores ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ignores TypeScript errors during build
  },
};

export default nextConfig;
