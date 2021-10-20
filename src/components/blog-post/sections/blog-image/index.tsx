import React from 'react'

import { ImageContainer } from './styled'
import { ImageProps } from './types'
import CustomImage from '../../../image'

export default function BlogImage({ image, caption = '', width }: ImageProps) {
  return (
    <ImageContainer $width={width}>
      <br />
      <figure className="image image_resized image-style-align-center">
        <CustomImage
          Image={image}
          imageProps={{
            style: {
              objectPosition: 'left center',
            },
          }}></CustomImage>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <br />
    </ImageContainer>
  )
}
