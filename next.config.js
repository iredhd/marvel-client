require('dotenv').config();
const withImages = require('next-images');

module.exports = withImages({
  env: {
    'REACT_APP_SECRET_KEY': process.env.REACT_APP_SECRET_KEY
  }
});