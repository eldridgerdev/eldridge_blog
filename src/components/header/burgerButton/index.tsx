import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button, Container, Icon } from './styled'
import { BurgerButtonProps } from './types'

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
