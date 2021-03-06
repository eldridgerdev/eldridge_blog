import { graphql } from 'gatsby'
import React from 'react'

import NotFoundPage from '../components/pages/404'
import { NotFoundPageProps } from '../components/pages/404/types'

export const query = graphql`
  query FourOFourPage {
    strapiFourOFourPage {
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
      }
      image {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default function FourOFour(props: NotFoundPageProps) {
  return <NotFoundPage {...props} />
}
