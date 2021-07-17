import React from 'react'
import FormComponent from './FormComponent'

const EMAIL_SUBTEXT = 'Enter your email so we can respond to your message.'

const SUBMIT_MESSAGE = `Thanks for submitting your message! We'll get back to you as soon as possible!`

const ContactForm: React.FC<{ post_id?: string }> = ({ post_id }) => {
  return (
    <FormComponent
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
