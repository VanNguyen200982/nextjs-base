const withImages = require('next-images')
module.exports = withImages({
   images: {
    domains: ['images.dog.ceo'],
  },
  webpack(config, options) {
    return config
  }
})


