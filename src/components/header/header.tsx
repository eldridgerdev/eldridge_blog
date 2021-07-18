import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../utils/theme'
import Logo from './logo'
import BurgerButton from './burgerButton'

//@TODO: Break out Nav Component?

type HeaderProps = {
  title?: string
}

const navHeaders = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Blog',
    link: '/blog-post-list',
  },
  {
    title: 'Contact Us',
    link: '/contact',
  },
]

const Nav = styled.header`
  background-color: ${theme.colors.light};

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  border-bottom: ${theme.colors.main};
  border-bottom-width: thick;
  border-style: solid;
`

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

  const EmptyDiv = styled.div`
    ${tw`flex sm:flex md:hidden lg:hidden xl:hidden`}
  `

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

const NavButton = styled.a`
  color: ${theme.colors.secondary};
  &:hover {
    color: ${theme.colors.selectedHeader};
  }
  margin-right: 50px;
  align-self: center;
  ${tw`
        font-semibold block text-lg
        mr-0 md:mr-10
    `}
`

const TitleSpan = styled.span`
  ${tw`font-semibold text-xl tracking-tight`};
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
          <NavButton href={header.link} key={key}>
            {header.title}
          </NavButton>
        ))}
      </NavButtonContainer>
    </Nav>
  )
}

export default Header
