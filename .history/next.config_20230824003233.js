/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/Kulyampa-old",
        destination: "/Kulyampa",
        permanent: true,
      },
    ];
  },
};
