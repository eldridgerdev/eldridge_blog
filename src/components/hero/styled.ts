import tw from 'twin.macro'
import styled from 'styled-components'
import Image from 'gatsby-image'

import theme from '../../utils/theme'
import { CustomImageProps } from './types'

export const height = 65
export const mobileHeight = 30

// @TODO: TW shortcuts

export const HeroContainer = styled.div`
  ${tw`mt-2`}

  max-height: 75%;
  @media screen and (max-width: 600px) {
    height: ${mobileHeight}vh;
  }
  position: relative;
  overflow: hidden;
`

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  color: ${theme.colors.light};
  ${tw`font-bold leading-tight
      text-xl sm:text-xl md:text-2xl
  `}
`

export const CustomImage = styled(Image)<CustomImageProps>`
  max-height: 100%;
  ${(props: CustomImageProps) => {
    let propStyles = ''
    if (props.height) {
      propStyles = `
          ${propStyles}
          height: ${props.height};
        `
    }

    if (props.mobileHeight) {
      propStyles = `
          ${propStyles}
          @media screen and (max-width: 600px) {
            height: ${props.mobileHeight};
          }
        `
    }

    return propStyles
  }}
`

// Has to be an object instead of normal styled components for gatsby-image's "imgStyle" prop
export const CustomImageStyle = {
  left: 0,
  right: 0,
  margin: '0 auto',
  width: 'auto',
}
