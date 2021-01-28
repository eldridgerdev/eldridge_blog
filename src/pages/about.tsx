import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TextSection from '../components/text-section'

interface AboutPageProps extends PageProps {
  data: {
    strapiAboutPage: {
      Page: {
        Content: string
        Page: {
          SiteTitle: string
          HeroText: string
          HeroImage?: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }
    }
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

const AboutPage = ({ data, location }: AboutPageProps): JSX.Element => {
  const aboutData = data.strapiAboutPage
  const image = aboutData.Page.Page.HeroImage?.childImageSharp.fluid
  const { SiteTitle: title, HeroText: text } = aboutData.Page.Page

  return (
    <Layout
      heroOverride={image}
      heroText={text || null} /*location={location} title={siteTitle} */
    >
      <SEO title={title} />
      <TextSection title="About Us" text={aboutData.Page.Content} />
      {/* <h1>About us</h1>
      <p>Blah</p> */}
    </Layout>
  )
}

export default AboutPage
