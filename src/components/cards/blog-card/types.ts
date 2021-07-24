import { FluidObject } from 'gatsby-image'

export type BlogCardProps = {
  image?: FluidObject
  title: string
  description: string
  date: string
  blogId?: string
  height?: string
  makeLong?: boolean
  full?: boolean
  extraCSS?: string
  extraCardCSS?: string
  postNumber?: number | null
}

export type DisplayImageProps = {
  image?: FluidObject
  className?: string
}

export type TextContainerProps = { $extraCSS?: string }
export type CardLinkProps = { $height?: string; $extraCSS?: string }
export type ListItemProps = {
  $full: boolean
  $state?: string
  $duration?: number
}
