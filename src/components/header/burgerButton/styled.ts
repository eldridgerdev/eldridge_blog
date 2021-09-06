import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../../utils/theme'

export const Button = styled.button`
  align-self: center;
  justify-self: center;
  border-color: ${theme.colors.main};
  &:hover {
    border-color: ${theme.colors.secondary};
  }
  & .fa-bars:hover {
    color: 'white';
  }
  ${tw`flex items-center px-3 py-2 border rounded`}
`

export const Container = styled.div`
  justify-content: flex-end;
  ${tw`flex md:hidden lg:hidden xl:hidden mr-6`}
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.main};
`
