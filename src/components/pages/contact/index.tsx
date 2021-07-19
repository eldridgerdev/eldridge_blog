import React from 'react'

import Layout from '../../layout'
import SEO from '../../seo'
import { ContactPageProps } from './types'
import TextSection from '../../blog-post/sections/text-section'
import ContactForm from '../../forms/contact-form'

const ContactUs = ({ data, location }: ContactPageProps) => {
  const page = data.strapiContactUsPage.Page
  const pageData = page.Page
  const content = page.Content

  const { SiteTitle: title, HeroText: text, HeroImage: image } = pageData

  return (
    <Layout heroText={text} heroOverride={image?.childImageSharp?.fluid}>
      <SEO title={title} />
      <TextSection text={content}></TextSection>
      <ContactForm />
    </Layout>
  )
}

export default ContactUs
