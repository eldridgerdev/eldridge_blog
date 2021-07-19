import styled from 'styled-components'
import tw from 'twin.macro'

import Text from '../../../text'
import Line from '../../../line/line'
import theme from '../../../../utils/theme'

// @TODO: rename this, it's interfering with the component
export const TextSection = styled(Text)`
  width: 100%;
  ${tw`flex-auto`}
`

export const SectionLine = styled(Line)`
  border-top: 2px solid ${theme.colors.main};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 50px 0px;
  width: 50%;
  ${tw`w-full md:w-1/2`}
`

export const BlogTextSection = styled(Text)`
  ${tw`my-3`}
`
