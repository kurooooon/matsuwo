require('dotenv').config();
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');
const sitemap = require('nextjs-sitemap-generator'); 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ANALYZE = process.env.ANALYZE;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

sitemap({  
  baseUrl: 'https://matsuwo.netlify.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});

module.exports = withBundleAnalyzer(withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    NEWS_SHEET_KEY: process.env.NEWS_SHEET_KEY,
    MUSIC_SHEET_KEY: process.env.MUSIC_SHEET_KEY
  },
  webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
   config.plugins.push(
     new webpack.DefinePlugin({
       'GA_ID': JSON.stringify(process.env.GA_ID),
       'GSC_VARIFICATION': JSON.stringify(process.env.GSC_VARIFICATION),
      }),
    );
    return config;
  }
}));