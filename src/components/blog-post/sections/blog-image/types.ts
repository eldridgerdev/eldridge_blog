import { FluidObject } from 'gatsby-image'
import { ImageWidthOptions } from '../../../../hooks/use-all-posts/types'

export interface ImageProps {
  image: FluidObject
  caption?: string
  width?: ImageWidthOptions
}

export interface ImageContainerProps {
  $width?: ImageWidthOptions
}
