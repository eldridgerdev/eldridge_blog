const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const activeEnv =
  process.env.GATSBY_ACTIVE_env || process.env.NODE_ENV || 'development'

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

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type StrapiBlogPost implements Node {

//     }
//   `
//   createTypes(typeDefs)
// }

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
        }
      }
    }
  }`
  ).then(result => {
    // Create pages for each article
    result.data.allStrapiBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Slug || node.id}`,
        component: path.resolve(`src/templates/blog-post-page.tsx`),
        context: {
          postId: node.id,
        },
      })
    })
  })

  return getArticles
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface BlogPost {
      Title: String!
      Description: String!
      meta: Meta
    }

    interface Meta {
      title: String
      description: String
    }

    interface Social {
      twitter: String
    }

    type SiteSiteMetadata implements Node {
      social: Social
    }

    type StrapiBlogPostBlogContent implements Node {
      Image: File
      Text: String
      ImageCaption: String
      AffiliateLinkText: String
      ImageWidth: String
      Hide: Boolean
    }

    type StrapiCommentReply implements Node {
      username: String!
      text: String!
    }

    type StrapiComment implements Node {
      username: String
      commentText: String
      reply: StrapiCommentReply
      created_at: Date @dateformat
      email: String
    }

    type StrapiCategory implements Node {
      text: String!
    }

    type StrapiFeaturedPost implements Node {
      blog_post: StrapiFeaturedPostBlog_post!
    }

    type StrapiBlogPost implements Node {
      image: File
      comments: [StrapiComment]
      categories: [StrapiCategory]
      HeroImage: File
      meta: Meta
    }

    type StrapiIndexPage implements Node {
      meta: Meta
    }

    type StrapiIndexPagePage implements Node {
      HeroImage: File
    }

    type StrapiFeaturedPostBlog_post implements Node {
      image: File
    }
    
    type StrapiBlogListPage implements Node {
      heroImage: File
      meta: Meta
    }
    type StrapiAboutPagePage implements Node {
      meta: Meta
    }
    type StrapiAboutPagePagePage implements Node {
      HeroImage: File
    }

    type StrapiFourOFourPagePage implements Node {
      meta: Meta
    }
    type StrapiFourOFourPagePagePage implements Node {
      HeroImage: File
    }
    
    type StrapiFourOFourPage implements Node {
      image: File
      meta: Meta
    }
    type StrapiContactUsPagePagePage implements Node {
      HeroImage: File
    }
    
    type StrapiContactUsPage implements Node {
      image: File
      meta: Meta
    }
    type StrapiComingSoonPage implements Node {
      meta: Meta
    }
    type StrapiComingSoonPagePage implements Node {
      HeroImage: File
    }
    type StrapiLogo implements Node {
      LogoImage: File
    }
    
  `
  createTypes(typeDefs)
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
