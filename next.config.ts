import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cellphones.com.vn",
      },
      {
        protocol: "https",
        hostname: "cdn2.cellphones.com.vn",
      },
      {
        protocol: "https",
        hostname: "dashboard.cellphones.com.vn",
      },
      {
        protocol: "https",
        hostname: "images.dmca.com",
      },
      {
        protocol: "https",
        hostname: "cdn-static.smember.com.vn",
      },
      {
        protocol: "https",
        hostname: "cdn-media.sforum.vn",
      },
    ],
  },
};

export default nextConfig;
