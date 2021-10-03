import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { rhythm, scale } from "../utils/typography"
import Header from '../header'
import Hero from '../hero'
import Text from '../text'

import { LayoutProps } from './types'
import {
  MainContainer,
  ContentContainer,
  LayoutContainer,
  DescriptionContainer,
} from './styled'

const Layout: React.FC<LayoutProps> = ({
  children,
  heroOverride,
  heroText,
  description,
  subDescription,
}) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <LayoutContainer>
        <Header />
        <ContentContainer>
          <Hero image={heroOverride} text={heroText} />
          {description && (
            <DescriptionContainer>
              <Text>
                <h1>{description}</h1>
                {subDescription && <h2>{subDescription}</h2>}
              </Text>
            </DescriptionContainer>
          )}
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
