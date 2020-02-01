require('dotenv').config();
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');

module.exports = withCSS({
  env: {
    NEWS_SHEET_KEY: process.env.NEWS_SHEET_KEY,
    MUSIC_SHEET_KEY: process.env.MUSIC_SHEET_KEY
  },
  webpack(config) {
   config.plugins.push(
     new webpack.DefinePlugin({
       'GA_ID': JSON.stringify(process.env.GA_ID),
      })
    );
    return config;
  }
});