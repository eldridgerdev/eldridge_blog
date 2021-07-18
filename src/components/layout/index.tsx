import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { rhythm, scale } from "../utils/typography"
import Header from '../header/header'
import Hero from '../hero'
import GlobalStyle from '../../global-style'
import SEO from '../seo'
import theme from '../../utils/theme'
import Footer from '../footer/footer'

import { LayoutProps } from './types'
import { MainContainer, ContentContainer, LayoutContainer } from './styled'

const Layout: React.FC<LayoutProps> = ({
  children,
  heroOverride,
  heroText,
}) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <LayoutContainer>
        <Header />
        <ContentContainer>
          <Hero image={heroOverride} text={heroText} />
          {/* <BlogNav /> */}
          {/* <HeroNotif /> */}
          <MainContainer>{children}</MainContainer>
        </ContentContainer>
        {/* <Footer /> */}
      </LayoutContainer>
    </>
  )
}

export default Layout
