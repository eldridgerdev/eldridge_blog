import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../../../utils/theme'

export const Username = styled.span`
  font-family: 'lato', sans-serif;
  font-weight: 800;
  ${tw`text-base uppercase`}
`
export const Timestamp = styled.span`
  font-family: 'lato', sans-serif;
  ${tw`text-xs uppercase`}
`

export const CommentHeader = styled.div`
  ${tw`leading-3`}
`

export const CommentContainer = styled.div`
  ${tw`py-3`}
`

export const ReplyContainer = styled.div`
  border-radius: 3px;
  border-color: ${theme.colors.main};
  background-color: ${theme.colors.light};
  // color: ${theme.colors.main};
  ${tw`ml-8 p-3 ring-1 mt-3`}
  --tw-ring-color: ${theme.colors.main};
`
