import styled from 'styled-components'
import tw from 'twin.macro'

import BaseInput from '../base-input'

export const InputField = styled.input`
  ${BaseInput}
`
export const TextAreaField = styled.textarea`
  ${BaseInput}
  height: 10em;
`

export const Label = styled.label`
  ${tw`mb-2 uppercase font-bold text-lg text-gray-700`}
`
export const LabelSubtext = styled.p`
  ${tw`text-sm italic`}
`

export const InputContainer = styled.div`
  ${tw`flex flex-col mb-4`}
`
