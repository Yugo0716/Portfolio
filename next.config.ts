import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint エラーがあってもビルドを続行
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


export default nextConfig;
