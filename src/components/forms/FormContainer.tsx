import React, { FormHTMLAttributes, InputHTMLAttributes } from 'react'
import { TextareaHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import theme from '../../utils/theme'

// @TODO: The filenames for forms are backwards and different from common React conventions, fix this.

interface CustomFormData {
  label?: string
  labelSubText?: string
  type?: string
  email?: InputHTMLAttributes<HTMLInputElement>
  text?: InputHTMLAttributes<HTMLInputElement>
  textarea?: TextareaHTMLAttributes<HTMLTextAreaElement>
}

export interface CustomFormProps extends FormHTMLAttributes<HTMLFormElement> {
  method?: string
  'netlify-honeypot'?: string
  'data-netlify'?: string
  name?: string
}

export interface FormProps {
  data: CustomFormData[]
  formProps: CustomFormProps
}

const Form = styled.form`
  ${tw`flex flex-col mb-4`}
`

const InputContainer = styled.div`
  ${tw`flex flex-col mb-4`}
`

const Label = styled.label`
  ${tw`mb-2 uppercase font-bold text-lg text-gray-700`}
`
const LabelSubtext = styled.p`
  ${tw`text-sm italic`}
`
const BaseInput = css`
  border-radius: 3px;
  border-color: ${theme.colors.main};
  color: ${theme.colors.main};
  ${tw`border py-2 px-3 text-black placeholder-gray-700 focus:ring-4`}
  --tw-ring-color: ${theme.colors.main};
  outline: none;
`

const InputField = styled.input`
  ${BaseInput}
`
const TextAreaField = styled.textarea`
  ${BaseInput}
  height: 10em;
`
const Submit = styled.button`
  background-color: ${theme.colors.main};
  border-color: ${theme.colors.main};
  color: white;
  &:focus {
    outline: none;
  }
  // --tw-ring-color: ${theme.colors.main}
  ${tw`font-bold py-3 px-5 border rounded shadow w-1/2 self-center`}
  ${tw`focus:ring-2 ring-opacity-50 ring-black`}
`

const NetlifyInput = ({ value }: { value: string }) => (
  <input type="hidden" name="bot-field" value={value} />
)

const FormContainer = ({ data, formProps }: FormProps) => {
  return (
    <Form {...formProps}>
      {data.map((formElement: CustomFormData, i: number) => {
        // @TODO: cleaner if pull out into named function outside the component
        const { label, labelSubText, email, text, textarea } = formElement
        const elementData = textarea || email || text

        if (!elementData) {
          return
        }

        const hasLabel = () =>
          label && <Label htmlFor={elementData.name}>{label}</Label>
        const hasLabelSubText = () =>
          labelSubText && <LabelSubtext>{labelSubText}</LabelSubtext>
        const textType = () => {
          if (textarea) {
            return <TextAreaField {...textarea} />
          }

          if (email) {
            return <InputField type="email" {...email} />
          }

          if (text) {
            return <InputField type="text" {...text} />
          }
        }

        return (
          <InputContainer key={i}>
            {formProps['data-netlify'] && formProps.name && (
              <NetlifyInput value={formProps.name} />
            )}
            {hasLabel()}
            {hasLabelSubText()}
            {textType()}
          </InputContainer>
        )
      })}
      <Submit type="submit">Submit</Submit>
    </Form>
  )
}

export default FormContainer
