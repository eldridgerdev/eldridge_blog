import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from '../utils/theme'

interface AboutPageProps extends PageProps {
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

const AboutPage = ({ data, location }: AboutPageProps) => {
//   const siteTitle = data.site.siteMetadata.title

  return (
    <Layout /*location={location} title={siteTitle} */>
      <SEO title="About Us" />
      <h1>About us</h1>
      <p>Blah</p>
    </Layout>
  )
}

export default AboutPage

