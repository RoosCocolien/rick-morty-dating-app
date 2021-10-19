const { VanillaExtractPlugin, createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const nextConfig = {};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
  withVanillaExtract(nextConfig) {
    createVanillaExtractPlugin();
  }
}
