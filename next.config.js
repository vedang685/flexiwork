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
  images: {
    domains: ['aqotszcgadglwexnsnpj.supabase.co'],
  },
};

module.exports = nextConfig
