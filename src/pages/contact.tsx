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
          ...GetHeroImage
        }
      }
      metaGroup {
        title
        description
      }
      ...GetImageLower
    }
  }
`

const ContactUsPage = (props: ContactPageProps) => <ContactUs {...props} />

export default ContactUsPage
