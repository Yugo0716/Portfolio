import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint エラーがあってもビルドを続行
    ignoreDuringBuilds: true,
  },
  
};

module.exports = {
  images: {
    unoptimized: true, // デプロイ時に画像最適化をスキップ
  },
}


export default nextConfig;
