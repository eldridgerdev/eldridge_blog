import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { DocumentNode, useMutation } from '@apollo/client'

import theme from '../../utils/theme'
import Text from '../text'
import FormContainer, { CustomFormProps } from './FormContainer'

// @TODO - copied from text-section, turn into component
const Container = styled(Text)`
  ${tw`w-full md:w-1/2 pt-10`}
`

const AnimationContainer = styled.div`
  ${tw`transition-all`}
`

// @TODO copy/paste from formContainer. make seperate component or export
const BaseInput = css`
  border-radius: 3px;
  border-color: ${theme.colors.main};
  color: ${theme.colors.main};
  ${tw`border py-2 px-3 text-black placeholder-gray-700 focus:ring-4`}
  --tw-ring-color: ${theme.colors.main};
  outline: none;
`

const SubmitMessage = styled.div`
  ${BaseInput}
  ${tw`transition-all`}
`

type FormComponentProps = {
  post_id?: string
  mutation?: DocumentNode
  messagePlaceholder: string
  emailSubText?: string
  submitMessage: string
  netlifyPost?: boolean
  netlifyPostName?: string
  titleText?: string
}

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
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [hidden, setHidden] = useState(false)
  const [serverResponse, setServerResponse] = React.useState(``)

  if (error) {
    console.error(error)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (addMessage) {
      await addMessage({
        variables: {
          username,
          text: message,
          post_id,
          email,
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

    setHidden(true)
  }

  const formProps: CustomFormProps = {
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

  const formData = [
    {
      label: 'Name',
      text: {
        name: 'name',
        id: 'name',
        placeholder: 'Your Name',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value),
        required: true,
      },
    },
    {
      label: 'Message',
      textarea: {
        name: 'message',
        id: 'message',
        placeholder: messagePlaceholder || 'Your Message',
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value),
        required: true,
      },
    },
    {
      label: 'Email',
      labelSubText: emailSubText,
      email: {
        name: 'email',
        id: 'email',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value),
      },
    },
  ]

  return (
    <Container>
      {!hidden && !loading && (
        <AnimationContainer>
          {/* @TODO: Use a styled <p> instead of h1 for SEO */}
          <h1>{titleText}</h1>
          <FormContainer formProps={formProps} data={formData} />
        </AnimationContainer>
      )}

      {hidden && !loading && submitMessage && (
        <SubmitMessage>{submitMessage}</SubmitMessage>
      )}
    </Container>
  )
}

export default FormComponent
