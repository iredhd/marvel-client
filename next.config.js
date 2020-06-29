require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
  env: {
    REACT_APP_SECRET_KEY: process.env.REACT_APP_SECRET_KEY,
    REACT_APP_MARVEL_API_KEY: process.env.REACT_APP_MARVEL_API_KEY,
    REACT_APP_MARVEL_PRIVATE_KEY: process.env.REACT_APP_MARVEL_PRIVATE_KEY
  }
})
