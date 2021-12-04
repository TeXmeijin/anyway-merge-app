/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ABLY_IS_ACTIVE: !!process.env.ABLY_API_KEY,
  },
};
