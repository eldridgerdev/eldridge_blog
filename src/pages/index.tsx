import React from 'react'
import { graphql } from 'gatsby'

import { HomePageProps } from '../components/pages/home/types'
import BlogIndex from '../components/pages/home'

export const pageQuery = graphql`
  query IndexPage {
    strapiIndexPage {
      Page {
        SiteTitle
        HeroText
        ...GetHeroImage
      }
      description
      subDescription
      multiPost
      metaGroup {
        title
        description
      }
    }

    strapiFeaturedPost {
      blog_post {
        id
        Slug
        published_at
        Title
        Description
        ...GetImageLower
      }
    }
  }
`
export default function Home(props: HomePageProps) {
  return <BlogIndex {...props} />
}
