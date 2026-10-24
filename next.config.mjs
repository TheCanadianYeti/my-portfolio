/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/about', destination: '/' },
      { source: '/projects', destination: '/' },
      { source: '/contact', destination: '/' },
    ];
  },
};

export default nextConfig;
