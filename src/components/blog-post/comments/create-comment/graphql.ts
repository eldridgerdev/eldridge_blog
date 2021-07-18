import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
  mutation AddComment(
    $email: String!
    $username: String!
    $text: String!
    $post_id: ID!
  ) {
    createComment(
      input: {
        data: {
          username: $username
          commentText: $text
          blog: $post_id
          email: $email
        }
      }
    ) {
      comment {
        username
        commentText
        email
        blog {
          id
        }
      }
    }
  }
`
