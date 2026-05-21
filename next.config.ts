import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // ← CRITICAL: Enables static HTML export
  images: {
    unoptimized: true,     // ← Required for static export (no next/image optimization)
  },
  trailingSlash: true,     // ← Helps with routing on static hosts
};

export default nextConfig;
