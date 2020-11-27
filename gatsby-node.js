const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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

  // Query for articles nodes to use in creating pages.
  const getArticles = makeRequest(graphql, `{
    allStrapiBlogPost {
      edges {
        node {
          id
        }
      }
    }
  }`)
  .then(result => {
    // Create pages for each article
    result.data.allStrapiBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/blog-post.tsx`),
        context: {
          id: node.id
        }
      })
    })
  })

  return getArticles;
}

exports.sourceNodes =({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface BlogPost {
      Title: String!
      Description: String!
    }

    type StrapiBlogPost implements Node & BlogPost @infer {
      Title: String!
      Description: String!
    }
  
    type StrapiFeaturedPost implements Node {
      blog_post: StrapiBlogPost
    }
  `

  createTypes(typeDefs)
}