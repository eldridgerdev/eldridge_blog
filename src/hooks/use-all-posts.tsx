import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

export type FluidImageType = {
  childImageSharp: {
    fluid: FluidObject
  }
}

export type CommentType = {
  username: string
  commentText: string
  created_at: string
}

export type BlogPost = {
  id: string
  strapiId: string
  Slug: string
  published_at: string
  Hide: boolean
  Title: string
  Description: string
  postNumber: number
  comments: [CommentType]
  image?: FluidImageType
  HeroImage?: FluidImageType
  text: string
}

export type EdgeType = {
  node: BlogPost
}

interface QueryProps {
  allStrapiBlogPost: {
    edges: [EdgeType]
  }
}

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
            comments {
              username
              commentText
              created_at
            }
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            HeroImage {
              childImageSharp {
                fluid {
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
