import { graphql, useStaticQuery } from 'gatsby'

import { EdgeType, QueryProps } from './types'

export const useAllBlogPosts = (): EdgeType[] => {
  const data: QueryProps = useStaticQuery(graphql`
    query GetAllBlogPosts {
      allStrapiBlogPost(sort: { fields: published_at, order: DESC }) {
        edges {
          node {
            id
            strapiId
            Slug
            published_at
            Hide
            Title
            Description
            postNumber
            text
            meta {
              title
              description
            }
            BlogContent {
              strapi_component
              Text
              AffiliateLinkText
              Hide
              ImageCaption
              ImageWidth
              Image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            categories {
              text
            }
            comments {
              username
              commentText
              created_at
              updated_at
              reply {
                username
                text
              }
            }
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            HeroImage {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiBlogPost.edges.filter(
    (edge: EdgeType) => !edge.node.Hide
  )
}
