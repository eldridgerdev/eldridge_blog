import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../../utils/theme'
import Text from '../../text'
import Comment, { CommentProps } from './comment'

interface Comments {
  comments?: [CommentProps]
}

const Container = styled(Text)`
  ${tw`rounded w-full md:w-1/2`}// background-color: ${theme.colors.secondary};
    // border: 1px solid ${theme.colors.main};
`

const Comments: React.FC<Comments> = ({ comments = [] }) => {
  if (comments.length === 0) return <></>

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
