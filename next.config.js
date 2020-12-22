const withImages = require('next-images')
const withLess = require('@zeit/next-less')
module.exports = withImages(
  {
    images: {
      domains: ['images.dog.ceo'],
    },
    webpack(config, options) {
      return config
    }
  },
  withLess()
)


