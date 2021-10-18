import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import BurgerButton from './burgerButton'
import { EmptyDiv, Nav, NavButton } from './styled'
import { HeaderProps } from './types'
import { navHeaders } from './navigation'

// @TODO: Screen size adjustments. Font size smaller? Remove Logo Text?
const NavButtonContainer = styled(({ className, open, children }) => {
  const openClasses = [`flex`, `flex-col `]
  const closedClasses = [`hidden`]
  const bigClasses = [`flex`, `flex-row`, `w-full`, `flex-grow`]
  const smallClasses = open ? openClasses : closedClasses

  const addPrefix = (classes: string[], prefix = '') => {
    return classes.reduce((prev, classString) => {
      return `${prev} ${prefix}${classString}`
    }, '')
  }

  return (
    <>
      {open && <EmptyDiv />}
      <div
        className={`
                    flex
                    ${className}
                    ${addPrefix(smallClasses)}
                    ${addPrefix(smallClasses, 'sm:')}
                    ${addPrefix(bigClasses, 'md:')}
                    ${addPrefix(bigClasses, 'lg:')}
                    ${addPrefix(bigClasses, 'xl:')}
                `}>
        {children}
      </div>
      {open && <EmptyDiv />}
    </>
  )
})`
  align-items: flex-start;
`

const Header: React.FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <Nav>
      <Logo />
      <div className="flex sm:flex md:hidden lg:hidden xl:hidden" />
      <BurgerButton onClick={() => setNavbarOpen(!navbarOpen)} />
      <NavButtonContainer open={navbarOpen}>
        {navHeaders.map((header, key) => (
          <NavButton to={header.link} key={key}>
            {header.title}
          </NavButton>
        ))}
      </NavButtonContainer>
    </Nav>
  )
}

export default Header
