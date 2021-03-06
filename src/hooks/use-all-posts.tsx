import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

export type FluidImageType = {
  childImageSharp: {
    fluid: FluidObject
  }
}

export type ReplyType = {
  username: string
  text: string
}

export type CommentType = {
  username: string
  commentText: string
  created_at?: string
  reply?: ReplyType
  updated_at?: string
}

export enum StrapiComponent {
  OLD_TEXT = 'text',
  IMAGE = 'posts.blog-post-image',
  TEXT = 'posts.blog-post-text',
  AFFILIATE = 'posts.affiliate-link',
}

export enum ImageWidthOptions {
  SMALL = 'FiftyPercent',
  MEDIUM = 'SeventyFivePercent',
  LARGE = 'OneHundredPercent',
}

export type BlogContentItem = {
  strapi_component: StrapiComponent
  Image?: FluidImageType
  Text?: string
  ImageCaption?: string
  AffiliateLinkText?: string
  ImageWidth?: ImageWidthOptions
  Hide?: boolean
}

export type BlogContent = BlogContentItem[]

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
  BlogContent?: BlogContent
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
