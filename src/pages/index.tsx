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
        HeroImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      description
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
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default function Home(props: HomePageProps) {
  return <BlogIndex {...props} />
}
