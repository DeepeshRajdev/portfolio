/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com','brandeps.com']
    },
    eslint: {
        ignoreDuringBuilds: true,
      }
};

export default nextConfig;
