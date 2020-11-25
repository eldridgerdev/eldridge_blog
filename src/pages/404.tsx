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
    strapiFourOFourPage: {
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

query FourOFourPage {
  strapiFourOFourPage {
    Page {
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
      Content
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
  const pageData= data.strapiFourOFourPage.Page.Page
  const { SiteTitle: title, HeroText: text, HeroImage: image } = pageData;

  return (
    <Layout heroText={text} heroOverride={image?.childImageSharp.fluid}>
      <SEO title={title} />
      <h1>Not Found</h1>
      <p>{data.strapiFourOFourPage.Page.Content || 'This page does not exist.'}</p>
      <HomeButton to='/'>
        <HomeText><FontAwesomeIcon icon={faHome} style={{color: theme.colors.main}} /></HomeText>
      </HomeButton>
    </Layout>
  )
}

export default NotFoundPage

