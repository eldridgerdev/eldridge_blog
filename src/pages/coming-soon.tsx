import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from '../utils/theme'

interface NotFoundPageProps extends PageProps {
  data: {
    strapiComingSoon: {
      Page: {
        Content: string,
        Page: {
          SiteTitle: string,
          HeroText: string,
          HeroImage: any
        }
      }
    }
  }
}

export const pageQuery = graphql`
  query ComingSoonPage {
    strapiComingSoon {
      Page {
        Content
        Page {
          SiteTitle
          HeroText
          HeroImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const HomeButton = styled(Link)`
  ${tw`bg-white hover:bg-gray-100 mt-4
    font-semibold py-3 px-5 border border-gray-400 rounded shadow`}
`

const HomeText = styled.span`
  font-size: 48px;
  line-height: 65px;
  display: flex;
  align-items: center;
  text-align: center;
`

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const pageData = data.strapiComingSoon.Page

  return (
    <Layout heroText={pageData.Page.HeroText} heroOverride={pageData.Page.HeroImage?.childImageSharp.fluid}>
      <SEO title={pageData.Page.SiteTitle} />
      <h1>Coming Soon</h1>
      <p>{ pageData.Content || "This page does not exist yet, check back later"}</p>
      <HomeButton to='/'>
        <HomeText><FontAwesomeIcon icon={faHome} style={{color: theme.colors.main}} /></HomeText>
      </HomeButton>
    </Layout>
  )
}

export default NotFoundPage

