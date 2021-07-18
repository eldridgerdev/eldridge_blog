import React from 'react'

import BasicForm from '../basic-form'
import { ContactFormProps } from './types'
import { EMAIL_SUBTEXT, SUBMIT_MESSAGE } from './constants'

const ContactForm: React.FC<ContactFormProps> = ({ post_id }) => {
  return (
    <BasicForm
      post_id={post_id}
      messagePlaceholder="Your Message"
      emailSubText={EMAIL_SUBTEXT}
      submitMessage={SUBMIT_MESSAGE}
      netlifyPost
      netlifyPostName="contact"
    />
  )
}

export default ContactForm
