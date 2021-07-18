import React from 'react'

import Comment from '../comment'
import { Container } from './styled'
import { CommentsProps } from './types'

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => {
  if (comments.length === 0) return <></>

  // @TODO: no h1 for SEO
  return (
    <Container>
      <h1>Comments</h1>
      {comments.map((comment, i) => {
        const { username, commentText, created_at } = comment
        return (
          <Comment
            key={i}
            username={username}
            commentText={commentText}
            created_at={created_at}
          />
        )
      })}
    </Container>
  )
}

export default Comments
