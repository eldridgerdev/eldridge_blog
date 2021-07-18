import React from 'react'

import BgImage from '../bgImage'
import { HeroImageStyledProps, HeroTextProps, HeroProps } from './types'
import {
  HeroContainer,
  HeroText,
  height,
  mobileHeight,
  CustomImage,
  CustomImageStyle,
} from './styled'

// const HeroTextComponent = ({ text, img, title }: HeroTextProps) => {
//   const TextComponent = () => {
//     if (!text) return null
//     return (
//       <HeroText className="text-2xl font-bold">
//         <h1>{text}</h1>
//       </HeroText>
//     )
//   }

//   if (img) {
//     return (
//       // <HeroImage url={img.src}>
//       //     <TextComponent />
//       // </HeroImage>
//       <BgImage
//         title={title || 'Hero Image'}
//         fluid={img}
//         height={`${height}vh`}
//         mobileHeight={`${mobileHeight}vh`}>
//         <TextComponent />
//       </BgImage>
//     )
//   } else {
//     return (
//       // <HeroContainer>
//       <TextComponent />
//       // </HeroContainer>
//     )
//   }
// }

const Hero: React.FC<HeroProps> = ({ image, text }) => {
  return (
    <HeroContainer>
      {/* <HeroGradient /> */}
      {/* <HeroTextComponent
        text={text || ''}
        img={image}
        // title={data.strapiHeroText.strapiId}
      /> */}
      {image && (
        <CustomImage
          Tag="section"
          fluid={image}
          height={height}
          mobileHeight={mobileHeight}
          imgStyle={CustomImageStyle}
        />
      )}
    </HeroContainer>
  )
}

export default Hero
