require('dotenv').config();

module.exports = {
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    NEWS_SHEET_KEY: process.env.NEWS_SHEET_KEY,
    MUSIC_SHEET_KEY: process.env.MUSIC_SHEET_KEY
  }
}