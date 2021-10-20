import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

export type BlogCardProps = {
  image?: FileNode
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
  image?: FileNode
  className?: string
}

export type TextContainerProps = { $extraCSS?: string }
export type CardLinkProps = { $height?: string; $extraCSS?: string }
export type ListItemProps = {
  $full: boolean
  $state?: string
  $duration?: number
}
