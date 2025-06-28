/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/freelance' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/freelance/' : '',
  output: 'export',  // Static HTML export
}

module.exports = nextConfig