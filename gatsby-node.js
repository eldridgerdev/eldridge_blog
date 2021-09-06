const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const {
  createSchemaCustomization,
} = require('./CMSSettings/strapi/schemaCustomizations')

const activeEnv =
  process.env.GATSBY_ACTIVE_env || process.env.NODE_ENV || 'development'
const previewMode = process.env.PUBLICATION_STATE === 'preview'

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.

    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createSchemaCustomization = createSchemaCustomization

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const publicationState = activeEnv === 'staging' ? 'PREVIEW' : 'LIVE'

  // Query for articles nodes to use in creating pages.
  const getArticles = makeRequest(
    graphql,
    `{
    allStrapiBlogPost {
      edges {
        node {
          id
          Slug
          ppreviewOnly
          Hide
        }
      }
    }
  }`
  ).then(result => {
    // Create pages for each article
    result.data.allStrapiBlogPost.edges.forEach(({ node }) => {
      const { Hide: hide, ppreviewOnly: previewOnly } = node

      if (hide) {
        return
      }

      if (!previewMode && previewOnly) {
        return
      }

      createPage({
        path: `/${node.Slug || node.id}`,
        component: path.resolve(`src/templates/blog-post-page.tsx`),
        context: {
          postId: node.id,
          slug: node.Slug,
        },
      })
    })
  })

  return getArticles
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  const generateResolver = (name = 'image', test = false) => ({
    [name]: {
      type: 'File',
      resolve(source, args, context, info) {
        const remoteUrl = source[name] && source[name].url

        if (test) {
          console.log('_______________________________________________________')
          console.log(source)
        }

        if (!remoteUrl) {
          return
        }

        // Don't use cloudinary in Dev, use local
        const isDev = () =>
          activeEnv === 'development' ? 'http://localhost:3002' : ''

        return createRemoteFileNode({
          url: `${isDev()}${remoteUrl}`,
          store,
          cache,
          createNode,
          createNodeId,
          reporter,
        })
      },
    },
  })

  createResolvers({
    StrapiBlogPost: Object.assign(
      {},
      generateResolver('image'),
      generateResolver('HeroImage')
    ),
    StrapiBlogPostBlogContent: generateResolver('Image'),
    StrapiBlogListPage: generateResolver('heroImage'),
    StrapiIndexPagePage: generateResolver('HeroImage'),
    StrapiFeaturedPostBlog_post: generateResolver('image'),
    StrapiComingSoonPagePage: generateResolver('HeroImage'),
    StrapiAboutPagePagePage: generateResolver('HeroImage'),
    StrapiFourOFourPagePagePage: generateResolver('HeroImage'),
    StrapiFourOFourPage: generateResolver('image'),
    StrapiContactUsPagePagePage: generateResolver('HeroImage'),
    StrapiContactUsPage: generateResolver('image'),
    StrapiLogo: generateResolver('LogoImage'),
  })
}
