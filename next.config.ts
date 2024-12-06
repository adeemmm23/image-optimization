import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Match any image URL on a domain
        hostname: "i.ibb.co",
        // Match any image URL that ends in .png
      },
      {
        hostname: "via.placeholder.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
