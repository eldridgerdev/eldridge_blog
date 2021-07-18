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
  <>
    <input type="hidden" name="form-name" value="contact" />
    <HiddenP>
      <label>
        Don’t fill this out if you’re human:{' '}
        <input name="bot-field" value="contact" />
      </label>
    </HiddenP>
  </>
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

    if (netlifyPost) {
      function encode(data: any) {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&')
      }

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': netlifyPostName,
          ['bot-field']: 'test',
          name: values.username,
          message: values.message,
          email: values.email,
        }),
        // body: JSON.stringify({
        //   variables: {
        //     username,
        //     text: message,
        //     post_id,
        //     email,
        //   },
        // }),
      })
      // setServerResponse(response)
    }

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
    formProps.method = 'POST'
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
            {netlifyPost && <NetlifyInput />}
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
