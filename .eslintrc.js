/** @type {import('eslint-config-next')*/
module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-img-element": "off",
  },
};
