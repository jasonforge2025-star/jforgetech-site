/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://jforgetech.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/404", "/500", "/studio", "/studio/*"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/"],
      },
    ],
  },
};

export default config;