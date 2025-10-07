/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/p10_2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/p10_2' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  compress: false,
  poweredByHeader: false,
}

module.exports = nextConfig