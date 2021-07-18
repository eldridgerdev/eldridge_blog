import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import theme from '../../../utils/theme'
import Text from '../../text'
import BaseInput from '../base-input'

export const Container = styled(Text)`
  ${tw`w-full md:w-1/2 pt-10`}
`

export const AnimationContainer = styled.div`
  ${tw`transition-all`}
`

export const SubmitMessage = styled.div`
  ${BaseInput}
  ${tw`transition-all`}
`
export const Form = styled.form`
  ${tw`flex flex-col mb-4`}
`

export const Submit = styled.button`
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

export const HiddenP = styled.p`
  ${tw`invisible`}
`
