import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

import ComingSoon from '../components/pages/coming-soon'
import { ComingSoonPageProps } from '../components/pages/coming-soon/types'

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

const ComingSoonPage = (props: ComingSoonPageProps) => <ComingSoon {...props} />

export default ComingSoonPage
