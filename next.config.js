/** @format */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/services/googleads',
        destination: '/googleads',
      },
      {
        source: '/services/socialmedia',
        destination: '/socialmedia',
      },
      {
        source: '/services/youtube',
        destination: '/youtube',
      },
      {
        source: '/services/seo',
        destination: '/seo',
      },
      {
        source: '/services/metamarketing',
        destination: '/metamarketing',
      },
      {
        source: '/services/contentmarketing',
        destination: '/contentmarketing',
      },
      {
        source: '/about/whoweare',
        destination: '/whoweare',
      },
      {
        source: '/about/whatwedo',
        destination: '/whatwedo',
      },
    ];
  },
};
