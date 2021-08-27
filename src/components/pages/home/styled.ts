import { Link } from 'gatsby'
import tw from 'twin.macro'
import styled from 'styled-components'
import theme from '../../../utils/theme'

// @TODO responsive width
export const LatestContainer = styled.div`
  display: flex;
  width: 75%;
  ${tw`w-full md:w-3/4`}
  ${tw`flex justify-center flex-wrap flex-col`}
`

export const LatestText = styled.span`
  // color: ${theme.colors.trinary};
  color: ${theme.colors.selectedHeader};
  font-weight: 400;
  line-height: 49px;
  font-size: 36px;
  align-self: center;
  ${tw`mt-3 text-3xl sm:text-3xl md:text-4xl`}
`
export const MorePosts = styled(Link)`
  // color: ${theme.colors.trinary};
  &:hover {
    color: ${theme.colors.trinary};
  }
  color: ${theme.colors.selectedHeader};
  font-size: 28px;
  font-weight: 400;
  line-height: 49px;
  align-self: flex-end;
  ${tw`mb-3`}
  ${tw`text-2xl sm:text-2xl md:text-3xl`}
  text-decoration: underline; // @TODO Grab underline version from google fonts?
`

export const IconContainer = styled.div`
  align-self: center;
`
