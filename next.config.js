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

// Only initialize OpenNext for Cloudflare when deploying to Cloudflare
if (process.env.CLOUDFLARE) {
  const { initOpenNextCloudflareForDev } = await import("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
}

export default nextConfig;
