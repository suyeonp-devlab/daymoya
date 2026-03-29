import type { NextConfig } from "next";

const API_BASE_URL = process.env.API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined');
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/api/:path*', destination: `${API_BASE_URL}/api/:path*` },
    ];
  },
};

export default nextConfig;
