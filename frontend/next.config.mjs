/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "backend",
      "dataforgood.fr",
      "strapi.services.dataforgood.fr",
      "s3.fr-par.scw.cloud",
      "images.pexels.com",
    ],
  },
  // VRAIMENT PAS OUF
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
