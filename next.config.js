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
        source: '/services/youtubemarketing',
        destination: '/youtubemarketing',
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
      {
        source: '/about/howwework',
        destination: '/howwework',
      },
      { source: '/about/ourleadership', destination: '/ourleadership' },
      {
        source: '/services/linkedin',
        destination: '/linkedin',
      },
      {
        source: '/services/influencer',
        destination: '/influencer',
      },
    ];
  },
};
