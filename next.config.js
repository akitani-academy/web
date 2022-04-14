/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["yoshikitam.wpx.jp"],
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    prependData: '@import "styles/_V.scss";',
  },
  experimental: {
    // concurrentFeatures: true,
    // serverComponents: true,
    // urlImports: ["https://yubinbango.github.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
