require('dotenv').config();

module.exports = {
  env: {
    YOUTUBE_API_KEY: process.env.NODE_ENV === 'production'
      ? YOUTUBE_API_KEY : process.env.YOUTUBE_API_KEY,
    NEWS_SHEET_KEY: process.env.NODE_ENV === 'production'
      ? NEWS_SHEET_KEY : process.env.NEWS_SHEET_KEY
  }
}