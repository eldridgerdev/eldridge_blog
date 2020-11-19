import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from '../utils/theme'
import BlogText from '../components/blog-post-text-section'

interface AboutPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }

    strapiAboutPage: any
  }
}

export const pageQuery = graphql`
  query getAboutData {
    site {
      siteMetadata {
        title
      }
    }

    strapiAboutPage {
      id
      text
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const AboutPage = ({ data, location }: AboutPageProps) => {
//   const siteTitle = data.site.siteMetadata.title
  const aboutData = data.strapiAboutPage;
  const image = aboutData.image?.childImageSharp.fluid;
  return (
    <Layout heroOverride={image} heroText={null} /*location={location} title={siteTitle} */>
      <SEO title="About Us" />
      <BlogText text={aboutData.text} />
      {/* <h1>About us</h1>
      <p>Blah</p> */}
    </Layout>
  )
}

export default AboutPage

