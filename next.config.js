const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "i.dailymail.co.uk",
      "static.independent.co.uk",
      "encrypted-tbn0.gstatic.com",
      "platform-lookaside.fbsbx.com",
      "lh3.googleusercontent.com",
      "cdn.sanity.io",
    ],

    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
