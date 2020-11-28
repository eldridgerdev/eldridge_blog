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
    strapiAboutPage: any
  }
}

export const pageQuery = graphql`
  query getAboutPage {
    strapiAboutPage {
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

const AboutPage = ({ data, location }: AboutPageProps) => {
  const aboutData = data.strapiAboutPage
  const image = aboutData.Page.Page.HeroImage?.childImageSharp.fluid
  const { SiteTitle: title, HeroText: text } = aboutData.Page.Page

  return (
    <Layout heroOverride={image} heroText={text || null} /*location={location} title={siteTitle} */>
      <SEO title={title} />
      <BlogText text={aboutData.Page.Content} />
      {/* <h1>About us</h1>
      <p>Blah</p> */}
    </Layout>
  )
}

export default AboutPage

