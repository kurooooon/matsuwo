const sitemap = require("nextjs-sitemap-generator");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

sitemap({
  baseUrl: "https://matsuwo.netlify.com",
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: "public/",
});

module.exports = withBundleAnalyzer({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});
