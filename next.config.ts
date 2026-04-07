import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true, // xohlasang o‘chirsa ham bo‘ladi
  },
};

export default nextConfig;