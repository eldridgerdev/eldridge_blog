import styled from 'styled-components'
import tw from 'twin.macro'

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
