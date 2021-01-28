import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Line from '../../line/line'
import { CommentType } from '../../../hooks/use-all-posts'

export type CommentProps = CommentType

const Username = styled.span`
  font-family: 'lato', sans-serif;
  font-weight: 800;
  ${tw`text-base uppercase`}
`
const Timestamp = styled.span`
  font-family: 'lato', sans-serif;
  ${tw`text-xs uppercase`}
`

const CommentHeader = styled.div`
  ${tw`leading-3`}
`

const CommentContainer = styled.div`
  ${tw`py-3`}
`

const Comment: React.FC<CommentProps> = ({
  username,
  commentText,
  created_at,
}) => {
  const date = moment(created_at).format('LL')
  const time = moment(created_at).format('LT')
  return (
    <CommentContainer>
      <CommentHeader>
        <Username>{username}</Username>
        <br />
        <Timestamp>
          {date} AT {time}
        </Timestamp>
      </CommentHeader>
      {commentText}
      <br />
      <Line />
    </CommentContainer>
  )
}

export default Comment
