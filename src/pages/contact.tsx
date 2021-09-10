import React from 'react'
import { graphql } from 'gatsby'

import ContactUs from '../components/pages/contact'
import { ContactPageProps } from '../components/pages/contact/types'

export const pageQuery = graphql`
  query ContactUsPage {
    strapiContactUsPage {
      Page {
        Content
        Page {
          SiteTitle
          HeroText
          HeroImage {
            childImageSharp {
              fluid() {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      metaGroup {
        title
        description
      }
      image {
        childImageSharp {
          fluid() {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ContactUsPage = (props: ContactPageProps) => <ContactUs {...props} />

export default ContactUsPage
