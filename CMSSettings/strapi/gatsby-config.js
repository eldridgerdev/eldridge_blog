const plugins = [
    {
        resolve: "gatsby-source-strapi",
        options: {
          apiURL: process.env.API_URL || "http://localhost:1337",
          contentTypes: [
            // List of the Content Types you want to be able to request from Gatsby.
            "blog-post",
            "category",
          ],
          singleTypes: [
            'hero-text',
            'logo',
            '404-page',
            'about-page',
            'index-page'
          ],
          queryLimit: 1000,
        },
      }
]

module.exports = plugins