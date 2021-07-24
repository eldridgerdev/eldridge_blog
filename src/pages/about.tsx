import { graphql } from 'gatsby'
import React from 'react'

import About from '../components/pages/about'
import { AboutPageProps } from '../components/pages/about/types'

export const query = graphql`
  query getAboutPage {
    strapiAboutPage {
      Page {
        Content
        Page {
          SiteTitle
          HeroText
          HeroImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta {
          title
          description
        }
      }
    }
  }
`
const AboutPage = (props: AboutPageProps): JSX.Element => {
  return <About {...props} />
}

export default AboutPage
