import React from 'react'
import { gql } from '@apollo/client'
import FormComponent from '../../forms/FormComponent'

const ADD_COMMENT = gql`
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

const EMAIL_SUBTEXT =
  'Enter your email if you wish to be notified when there is a reply.'

const SUBMIT_MESSAGE =
  'Thanks for submitting your comment! It will appear once it is approved.'

const TITLE_TEXT = 'Leave A Comment'

const CreateComment: React.FC<{ post_id: string }> = ({ post_id }) => {
  return (
    <FormComponent
      post_id={post_id}
      mutation={ADD_COMMENT}
      messagePlaceholder="Your Comment"
      emailSubText={EMAIL_SUBTEXT}
      submitMessage={SUBMIT_MESSAGE}
      titleText={TITLE_TEXT}
    />
  )
}

export default CreateComment
