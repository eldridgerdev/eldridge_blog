import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'
import { ImageWidthOptions } from '../../../../hooks/use-all-posts/types'

export interface ImageProps {
  image: FileNode
  caption?: string
  width?: ImageWidthOptions
}

export interface ImageContainerProps {
  $width?: ImageWidthOptions
}
