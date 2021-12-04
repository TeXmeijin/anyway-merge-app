/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ABLY_IS_ACTIVE: !!process.env.ABLY_API_KEY,
    ABLY_API_ENDPOINT: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/ably-create-token`
      : `http://localhost:3000/api/ably-create-token`,
  },
};
