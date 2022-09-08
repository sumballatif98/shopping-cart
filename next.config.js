/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images-eu.ssl-images-amazon.com",
      "cdn.shopify.com",
      "static-01.daraz.pk",
      "images.squarespace-cdn.com",
      "dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
