import React from 'react'
import Image from 'gatsby-image'

import { ImageContainer } from './styled'
import { ImageProps } from './types'

export default function BlogImage({ image, caption = '', width }: ImageProps) {
  return (
    <ImageContainer $width={width}>
      <br />
      <figure className="image image_resized image-style-align-center">
        <Image
          fluid={image}
          imgStyle={{
            objectPosition: 'left center',
          }}></Image>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <br />
    </ImageContainer>
  )
}
