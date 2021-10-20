import { GatsbyImageProps } from 'gatsby-plugin-image'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

export type ImageProps = {
  Image: FileNode
  imageProps?: Omit<GatsbyImageProps, 'alt' | 'image'>
}
