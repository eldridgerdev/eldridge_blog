import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

export interface HeroImageStyledProps {
  url: string
}

export type HeroProps = {
  image?: FileNode
  text?: string | null
}

export interface CustomImageProps {
  height?: number | null
  mobileHeight?: number | null
}
