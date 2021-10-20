import React from 'react'

import { HeroProps } from './types'
import { HeroContainer, height, mobileHeight, CustomImage } from './styled'

// @TODO: Is this necessary anymore? Or convert straight to Image?
const Hero: React.FC<HeroProps> = ({ image, text }) => {
  return (
    <HeroContainer>
      {image && image.childImageSharp && (
        <CustomImage
          Image={image.childImageSharp}
          imageProps={{
            style: {
              position: 'initial',
              maxHeight: '60vh',
            },
            objectFit: 'contain',
            // height={}
          }}
          // Tag="section"
          height={height}
          mobileHeight={mobileHeight}
          // style={{
          //   position: 'initial',
          // }}
          // imgStyle={CustomImageStyle}
        />
      )}
    </HeroContainer>
  )
}

export default Hero
