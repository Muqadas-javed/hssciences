import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hssciences.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
    {
      source: "/fonts/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
