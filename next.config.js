const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ABLY_IS_ACTIVE: !!process.env.ABLY_API_KEY,
  },
  webpack: (config) => {
    config.resolve.alias["~"] = path.join(__dirname, ".");
    return config;
  },
};
