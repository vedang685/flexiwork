/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      { module: /node_modules\/ws\/lib\/(buffer-util|validation)\.js/ },
    ];
    return config;
  },
};

module.exports = nextConfig
