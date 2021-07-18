import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import {
  Container,
  AnimationContainer,
  SubmitMessage,
  Form,
  Submit,
  HiddenP,
} from './styled'
import { FormComponentProps } from './types'
import TextField from '../text-field'

const defaultState = {
  username: '',
  message: '',
  email: '',
  hidden: false,
}

const NetlifyInput = () => (
  <HiddenP>
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </HiddenP>
)

const FormComponent: React.FC<FormComponentProps> = ({
  post_id,
  mutation,
  messagePlaceholder,
  emailSubText,
  submitMessage,
  netlifyPost = false,
  netlifyPostName,
  titleText = '',
}) => {
  const [addMessage, { loading, error }] = mutation
    ? useMutation(mutation)
    : [null, { loading: false, error: false }]

  const [values, setValues] = useState(defaultState)
  // const [serverResponse, setServerResponse] = React.useState(``)

  if (error) {
    console.error(error)
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (addMessage) {
      addMessage({
        variables: {
          username: values.username,
          text: values.message,
          post_id,
          email: values.email,
        },
      })
    }

    // if (netlifyPost) {
    //   const response = await window.fetch('/api/form', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       variables: {
    //         username,
    //         text: message,
    //         post_id,
    //         email,
    //       },
    //     }),
    //   })
    //   setServerResponse(response)
    // }

    setValues(prev => ({
      ...prev,
      hidden: true,
    }))
  }

  const formProps: any = {
    action: '/',
    onSubmit,
    autoComplete: 'off',
  }

  if (netlifyPost) {
    formProps.method = 'post'
    formProps['netlify-honeypot'] = 'bot-field'
    formProps['data-netlify'] = 'true'
    formProps.name = netlifyPostName || 'contact'
  }

  return (
    <Container>
      {!values.hidden && !loading && (
        <AnimationContainer>
          {/* @TODO: Use a styled <p> or something instead of h1 for SEO */}
          <h1>{titleText}</h1>
          <Form {...formProps}>
            {formProps['data-netlify'] && formProps.name && <NetlifyInput />}
            <TextField
              label="Name"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={(username: string) =>
                setValues(prev => ({
                  ...prev,
                  username,
                }))
              }
              required
            />
            <TextField
              label="Message"
              type="textarea"
              name="message"
              placeholder={messagePlaceholder || 'Your Message'}
              onChange={(message: string) =>
                setValues(prev => ({
                  ...prev,
                  message,
                }))
              }
              required
            />
            <TextField
              label="Email"
              labelSubText={emailSubText}
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={(email: string) =>
                setValues(prev => ({
                  ...prev,
                  email,
                }))
              }
              required
            />
            <Submit type="submit">Submit</Submit>
          </Form>
        </AnimationContainer>
      )}

      {values.hidden && !loading && submitMessage && (
        <SubmitMessage>{submitMessage}</SubmitMessage>
      )}
    </Container>
  )
}

export default FormComponent
