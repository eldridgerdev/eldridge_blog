import Image, { FixedObject } from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { useLogo } from '../../hooks/use-logo'
import theme from '../../utils/theme'

const LogoArea = styled.div`
  color: ${theme.colors.secondary};
  height: 72px;
  overflow: hidden;
`

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: fit-content;
`

interface LogoProps {
  logo: FixedObject
}

const Logo: React.FC = () => {
  const logo = useLogo()
  return (
    <LogoArea>
      <LogoContainer>
        <Image fixed={logo} />
      </LogoContainer>
    </LogoArea>
  )
}

export default Logo
