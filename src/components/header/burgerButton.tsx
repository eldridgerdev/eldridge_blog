import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../utils/theme'

const Button = styled.button`
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

const Container = styled.div`
  justify-content: flex-end;
  ${tw`flex md:hidden lg:hidden xl:hidden mr-6`}
`

const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.main};
`

interface BurgerButtonProps {
  onClick: (e: MouseEvent) => void
}

const defaultOnClick = () => {
  return
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  onClick = defaultOnClick,
}) => (
  <Container>
    <Button onClick={e => onClick(e)}>
      <Icon icon={faBars} />
    </Button>
  </Container>
)

export default BurgerButton
