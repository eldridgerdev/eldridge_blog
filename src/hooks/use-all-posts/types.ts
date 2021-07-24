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
  categories: [
    {
      text: string
    }
  ]
  meta?: {
    title?: string
    description?: string
  }
}

export type EdgeType = {
  node: BlogPost
}

export interface QueryProps {
  allStrapiBlogPost: {
    edges: [EdgeType]
  }
}
