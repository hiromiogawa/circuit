/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVICE_DOMAIN, 'localhost']
  },
  publicRuntimeConfig: {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN
  }
}

module.exports = nextConfig
