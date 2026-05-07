import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
  async redirects() {
    return [
      // ── Old WordPress date-based datadirect posts → case study ──────────
      {
        source: '/:year/:month/:day/datadirect-:num',
        destination: '/work/datadirect',
        permanent: true,
      },
      {
        source: '/:year/:month/:day/datadirect-:num/',
        destination: '/work/datadirect',
        permanent: true,
      },
      // ── All other old WordPress date-based posts → blog ─────────────────
      {
        source: '/:year/:month/:day/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year/:month/:day/:slug/',
        destination: '/blog',
        permanent: true,
      },
      // ── Old blog pagination (e.g. /blogs/2/) → blog ──────────────────────
      {
        source: '/blogs/:path*',
        destination: '/blog',
        permanent: true,
      },
      // ── WordPress RSS feeds → blog ───────────────────────────────────────
      {
        source: '/feed',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:path*/feed',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:path*/feed/',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
