/** @type {import('next').NextConfig} */
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

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

export default nextConfig;

// Initialize OpenNext for Cloudflare
initOpenNextCloudflareForDev();
