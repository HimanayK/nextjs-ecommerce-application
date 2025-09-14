import type { NextConfig } from "next";

// Next.js configuration object
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",   // Allow images served over HTTPS
        hostname: "cdn.sanity.io",  // Allow images from Sanity's CDN
      },
    ],
  },
};

export default nextConfig;

