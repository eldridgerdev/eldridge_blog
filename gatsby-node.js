const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
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

  const publicationState = process.env.NODE_ENV === 'staging' ? 'PREVIEW' : 'LIVE';

  // Query for articles nodes to use in creating pages.
  const getArticles = makeRequest(graphql, `{
    allStrapiBlogPost {
      edges {
        node {
          id
          Slug
        }
      }
    }
  }`)
  .then(result => {
    // Create pages for each article
    result.data.allStrapiBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Slug || node.id}`,
        component: path.resolve(`src/templates/blog-post.tsx`),
        context: {
          id: node.id,
          strapiId: node.strapiId
        }
      })
    })
  })

  return getArticles;
}

exports.createSchemaCustomization =({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface BlogPost {
      Title: String!
      Description: String!
    }

    type StrapiComment implements Node {
      username: String
      commentText: String
      simpleReply: String
      created_at: Date @dateformat
    }

    type StrapiBlogPost implements Node {
      image: File
      comments: [StrapiComment]
    }

    type StrapiBlogPost implements Node {
        image: File
    }
    
  type StrapiBlogPost implements Node {
    HeroImage: File
  }

  type StrapiIndexPagePage implements Node {
    HeroImage: File
  }

  type StrapiFeaturedPostBlog_post implements Node {
    image: File
  }
  
  type StrapiBlogListPage implements Node {
    heroImage: File
  }
  type StrapiAboutPagePagePage implements Node {
    HeroImage: File
  }
  type StrapiFourOFourPagePagePage implements Node {
    HeroImage: File
  }
  
  type StrapiFourOFourPage implements Node {
    image: File
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

  const generateResolver = (name='image') => ({
    [name]: {
      type: 'File',
      resolve(source, args, context, info) {
        return createRemoteFileNode({
          url: `${source[name].url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
          store,
          cache,
          createNode,
          createNodeId,
          reporter,
        })
      },
    }
  })

  createResolvers({
    StrapiBlogPost: generateResolver('image'),
    StrapiBlogPost: generateResolver('HeroImage'),
    StrapiBlogListPage: generateResolver('heroImage'),
    StrapiIndexPagePage: generateResolver('HeroImage'),
    StrapiFeaturedPostBlog_post: generateResolver('image'),
    StrapiComingSoonPagePage: generateResolver('HeroImage'),
    StrapiAboutPagePagePage: generateResolver('HeroImage'),
    StrapiFourOFourPagePagePage: generateResolver('HeroImage'),
    StrapiFourOFourPage: generateResolver('image'),
    StrapiLogo: generateResolver('LogoImage')
  })

//   // createResolvers({
//   //   StrapiBlogListPage: imageResolver,
//   //   StrapiBlogPostImage: imageResolver,
//   //   StrapiFeaturedPostBlog _post: imageResolver,
//   //   StrapiIndexPagePageHero: imageResolver,
//   //   StrapiComingSoonPagePageHero: imageResolver,
    
//   // })

//   // const ImageNodes = [
//   //   'StrapiBlogListPageHeroImage',
//   //   'StrapiBlogPostImage',
//   //   'StrapiBlogListPageHeroImage',
//   //   'StrapiFeaturedPostBlog_postImage',
//   //   'StrapiIndexPagePageHeroImage',
//   //   'StrapiComingSoonPagePageHeroImage'
//   // ]
//   // const createNodeObj = (n) => ({
//   //   [n]: imageResolver
//   // })
//   // createResolvers({}.assign(...(ImageNodes.map(createNodeObj))))
}