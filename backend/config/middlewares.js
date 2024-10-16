const UPLOAD_URL = `https://${process.env.AWS_S3_UPLOAD_BUCKET_NAME}.s3.${process.env.AWS_REGION}.scw.cloud/strapi-uploads`;

module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", UPLOAD_URL],
          "media-src": ["'self'", "data:", "blob:", UPLOAD_URL],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
