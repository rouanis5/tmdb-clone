/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined, // The default build output, .next directory, that works with production mode next start or a hosting provider like Vercel
  // output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [{ hostname: 'image.tmdb.org' }],
  },
}

export default nextConfig
