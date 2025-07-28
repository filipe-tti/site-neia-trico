import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const repo = 'site-neia-trico';

module.exports = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo + '/',
};

export default nextConfig;
