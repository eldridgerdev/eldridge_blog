import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { rhythm, scale } from "../utils/typography"
import Header from './header/header'
import HeroNotif from './hero/hero-notification'
import Hero from './hero/hero'
import GlobalStyle from '../global-style'
import SEO from './seo'
import theme from '../utils/theme'
import Footer from './footer/footer'

interface LayoutProps {
  heroOverride?: any
  heroText?: string | null
}

const MainContainer = styled.main`
  ${tw`flex flex-col items-center p-0`}
`

const ContentContainer = styled.div`
  ${tw`pb-7`}
`

// @TODO: Some of this stuff is first page only.
const Layout: React.FC<LayoutProps> = ({
  children,
  heroOverride,
  heroText,
}) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <div className="flex flex-col h-screen">
        <Header />
        <ContentContainer className="flex-1 overflow-y-auto">
          <Hero image={heroOverride} text={heroText} />
          {/* <BlogNav /> */}
          {/* <HeroNotif /> */}
          <MainContainer className="mx-5">{children}</MainContainer>
        </ContentContainer>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout
