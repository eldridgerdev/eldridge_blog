import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ImageProps } from './types'

const CustomImage: React.FC<ImageProps> = ({
  Image,
  imageProps = {},
}: ImageProps) => {
  const image = getImage(Image)
  if (!image) {
    return <div>TODO: Error</div>
  }

  return <GatsbyImage {...imageProps} image={image} alt="temp" />
}

export default CustomImage
