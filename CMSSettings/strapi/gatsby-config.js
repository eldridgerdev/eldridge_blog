const plugins = [
  {
    resolve: 'gatsby-source-strapi',
    options: {
      apiURL: process.env.API_URL || 'http://localhost:3002',
      contentTypes: [
        // List of the Content Types you want to be able to request from Gatsby.
        'blog-post',
        'comment',
        'category',
      ],
      singleTypes: [
        'coming-soon',
        'logo',
        'contact-us-page',
        'four-o-four-page',
        'about-page',
        'index-page',
        'blog-list-page',
        'featured-post',
      ],
      queryLimit: 1000,
    },
  },
  {
    // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.
    resolve: `gatsby-remark-embed-video`,
    options: {
      maxWidth: 800,
      ratio: 1.77,
      height: 400,
      related: false,
      noIframerder: true,
    },
  },
  {
    resolve: `gatsby-remark-responsive-iframe`,
    options: {
      wrapperStyle: `margin-bottom: 1.0725rem`,
    },
  },
]

module.exports = plugins
