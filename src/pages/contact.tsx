import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TextSection from '../components/text-section'
import ContactForm from '../components/forms/ContactForm'

interface ContactPageProps extends PageProps {
  data: {
    strapiContactUsPage: {
      Page: {
        Content: string
        Page: {
          SiteTitle: string
          HeroText: string
          HeroImage: any
        }
      }
    }
  }
}

export const pageQuery = graphql`
  query ContactUsPage {
    strapiContactUsPage {
      Page {
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
        Content
      }
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
const EMAIL_SUBTEXT = 'Enter your email address so we can get back to you.'

const ContactUsPage = ({ data, location }: ContactPageProps) => {
  const page = data.strapiContactUsPage.Page
  const pageData = page.Page
  const content = page.Content

  const { SiteTitle: title, HeroText: text, HeroImage: image } = pageData

  return (
    <Layout heroText={text} heroOverride={image?.childImageSharp?.fluid}>
      <SEO title={title} />
      <TextSection content={[content]}></TextSection>
      <ContactForm />
    </Layout>
  )
}

export default ContactUsPage
