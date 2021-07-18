import styled from 'styled-components'
import tw from 'twin.macro'

import { ImageContainerProps } from './types'
import getWidth from './get-width'

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props: ImageContainerProps) => getWidth(props.$width)};
  ${tw`flex-auto min-w-0 mx-auto my-3`}
`
