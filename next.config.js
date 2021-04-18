const withImages = require('next-images');
module.exports = withImages({
  images: {
    domains: ['twitch.tv'],
  },
  async redirects() {
    return [
      {
        source: '/Videos',
        destination: '/videos',
        permanent: true,
      },
    ];
  },
});
