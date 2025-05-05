/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "charlie.icu",
      },
    ],
  },
};

module.exports = nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
