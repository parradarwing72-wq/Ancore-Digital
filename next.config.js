/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ui-avatars.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig

