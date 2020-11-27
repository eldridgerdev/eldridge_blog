const plugins = [
    {
        resolve: "gatsby-source-strapi",
        options: {
          apiURL: process.env.API_URL || "http://localhost:1337",
          contentTypes: [
            // List of the Content Types you want to be able to request from Gatsby.
            "blog-post",
          ],
          singleTypes: [
            'coming-soon',
            'logo',
            'four-o-four-page',
            'about-page',
            'index-page',
            'blog-list-page',
            'featured-post'
          ],
          queryLimit: 1000,
        },
      }
]

module.exports = plugins