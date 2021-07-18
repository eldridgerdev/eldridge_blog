import moment from 'moment'
import React from 'react'

import Line from '../../../line/line'
import { Username, Timestamp, CommentHeader, CommentContainer } from './styled'
import { CommentProps } from './types'

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
