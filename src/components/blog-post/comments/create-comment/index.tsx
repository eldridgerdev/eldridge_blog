import React from 'react'

import BasicForm from '../../../forms/basic-form'
import { CreateCommentProps } from './types'
import { EMAIL_SUBTEXT, SUBMIT_MESSAGE, TITLE_TEXT } from './constants'
import { ADD_COMMENT } from './graphql'

const CreateComment: React.FC<CreateCommentProps> = ({ post_id }) => {
  return (
    <BasicForm
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
