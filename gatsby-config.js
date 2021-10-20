require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const CMSSettings = require('./CMSSettings/strapi/gatsby-config')

module.exports = {
  siteMetadata: {
    title: `Eldridge Expedition`,
    author: {
      name: `Ryan Eldridge`,
    },
    description: `A blog for our travels`,
    siteUrl: `https://www.eldridgeexpedition.com`,
    social: {
      twitter: null,
    },
  },
  plugins: [
    ...CMSSettings,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `@raae/gatsby-remark-oembed`,
      options: {
        // usePrefix defaults to false
        // usePrefix: true is the same as ["oembed"]
        usePrefix: ['oembed', 'video'],
        providers: {
          // Important to exclude providers
          // that adds js to the page.
          // If you do not need them.
          exclude: ['Reddit'],
        },
      },
    },

    {
      // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.
      resolve: `gatsby-remark-embed-video`,
      options: {
        maxWidth: 799,
        ratio: 0.77,
        height: 399,
        related: false,
        noIframerder: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `opensans\:400,600,700`,
          `alegreya\:400,700`,
          `raleway\:400,400i,700,700i`,
          `ubuntu mono\:400,700,800`,
          `lato\:400,700`,
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-L0W6P9XDZ6`],
        // trackingId: `UA-134987693-1`,
        // head: true
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    'gatsby-plugin-gatsby-cloud',
  ],
}
