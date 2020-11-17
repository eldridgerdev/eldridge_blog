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
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout /*location={location} title={siteTitle} */>
      <SEO title="404: Not Found" />
      <h1>Coming Soon</h1>
      <p>This page does not exist yet, check back later</p>
      <HomeButton to='/'>
        <HomeText><FontAwesomeIcon icon={faHome} style={{color: theme.colors.main}} /></HomeText>
      </HomeButton>
    </Layout>
  )
}

export default NotFoundPage

