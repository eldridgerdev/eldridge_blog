import React from 'react'
import Image from 'gatsby-image'

import { useLogo } from '../../../hooks/use-logo'
import { LogoArea, LogoContainer } from './styled'

const Logo: React.FC = () => {
  const logo = useLogo()
  return (
    <LogoArea>
      <LogoContainer to={'/'}>
        <Image fixed={logo} />
      </LogoContainer>
    </LogoArea>
  )
}

export default Logo
