import React from 'react'

import Layout from '../../layout'
import SEO from '../../seo'
import TextSection from '../../../components/blog-post/sections/text-section'

import { AboutPageProps } from './types'

const About = ({ data, location }: AboutPageProps): JSX.Element => {
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

export default About
