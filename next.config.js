const sitemap = require('nextjs-sitemap-generator');
// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

sitemap({
  baseUrl: 'https://matsuwo.netlify.app',
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: 'public/',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
});
