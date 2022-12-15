/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
<<<<<<< HEAD
  }
=======
  },
  distDir: 'build',
>>>>>>> e63f0e0c542f9befb775ba71b9f525a637d24f0e
}

module.exports = nextConfig