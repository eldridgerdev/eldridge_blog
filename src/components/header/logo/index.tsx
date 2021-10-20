import React from 'react'

import { useLogo } from '../../../hooks/use-logo'
import { LogoArea, LogoContainer } from './styled'
import CustomImage from '../../image'

const Logo: React.FC = () => {
  const logo = useLogo()
  return (
    <LogoArea>
      <LogoContainer to={'/'}>
        <CustomImage Image={logo} />
      </LogoContainer>
    </LogoArea>
  )
}

export default Logo
