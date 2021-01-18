const withImages = require('next-images')
const withLess = require('@zeit/next-less')
module.exports = withImages(
  {
    images: {
      domains: ['images.prismic.io'],
    },
    webpack(config, options) {
      return config
    }
  },
  withLess(),
  {
    "pagesDir": './src/pages'
  },
)


