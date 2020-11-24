import React from "react"
import { WindowLocation } from "@reach/router"
import { Link } from "gatsby"
import styled from 'styled-components'

// import { rhythm, scale } from "../utils/typography"
import Header from './header/header'
import HeroNotif from './hero-notification'
import Hero from './hero/hero'
import GlobalStyle from '../global-style'
import SEO from "./seo"
import BlogNav from './blog-nav'
import theme from '../utils/theme'
import Footer from './footer'

interface LayoutProps {
  // title: string,
  // location: WindowLocation
  heroOverride?: any,
  heroText?: string | null
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`
  //max-width: ${rhythm(24)};
  // padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
// `

const Blah = styled.div`
  // background-color: ${theme.colors.light}
`

// @TODO: Some of this stuff is first page only.
const Layout: React.FC<LayoutProps> = ({ children, heroOverride, heroText }) => {
  return (
    <>
      <SEO title='test'/>
      <GlobalStyle />
      <div className="flex flex-col h-screen">
        <Header />
        <Blah className="flex-1 overflow-y-auto">
          <Hero 
            image={heroOverride}
            text={heroText}
          />
          {/* <BlogNav /> */}
          {/* <HeroNotif /> */}
          <MainContainer className='mx-5'>
            {children}
          </MainContainer>
        </Blah>
        <Footer />
      </div>
    </>
  )
}

export default Layout
