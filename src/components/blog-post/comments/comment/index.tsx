import moment from 'moment'
import React from 'react'

import Line from '../../../line/line'
import {
  Username,
  Timestamp,
  CommentHeader,
  CommentContainer,
  ReplyContainer,
} from './styled'
import { CommentProps, MainCommentProps } from './types'

const Comment: React.FC<CommentProps> = ({
  username,
  commentText,
  created_at,
  reply,
  updated_at,
}) => {
  const date = created_at && moment(created_at).format('LL')
  const time = created_at && moment(created_at).format('LT')

  const replyDate = updated_at && moment(updated_at).format('LL')
  const replyTime = updated_at && moment(updated_at).format('LT')

  const MainComment = ({
    date,
    time,
    username,
    commentText,
  }: MainCommentProps) => (
    <>
      <CommentHeader>
        <Username>{username}</Username>
        <br />
        {date && time && (
          <Timestamp>
            {date} AT {time}
          </Timestamp>
        )}
      </CommentHeader>
      {commentText}
    </>
  )
  return (
    <CommentContainer>
      <MainComment
        username={username}
        commentText={commentText}
        date={date}
        time={time}
      />
      {reply && (
        <ReplyContainer>
          <MainComment
            username={reply.username}
            commentText={reply.text}
            date={replyDate}
            time={replyTime}
          />
        </ReplyContainer>
      )}
      <br />
      <Line />
    </CommentContainer>
  )
}

export default Comment
