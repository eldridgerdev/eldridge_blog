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
            ppreviewOnly
            metaGroup {
              title
              description
            }
            BlogContent {
              strapi_component
              Text
              AffiliateLinkText
              BlockText
              Hide
              ImageCaption
              ImageWidth
              Image {
                childImageSharp {
                  fluid(quality: 99) {
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
                fluid(quality: 99) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            HeroImage {
              childImageSharp {
                fluid(quality: 99) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiBlogPost.edges.filter((edge: EdgeType) => {
    const { Hide: hide, ppreviewOnly: previewOnly } = edge.node
    const previewMode = process.env.PUBLICATION_STATE === 'preview'

    if (hide) {
      return false
    }

    if (!previewMode && previewOnly) {
      console.error(`previewMode: ${previewMode} previewOnly: ${previewOnly}`)
      console.error(`id: ${edge.node.id}, title: ${edge.node.Title}`)
      return false
    }

    return true
  })
}
