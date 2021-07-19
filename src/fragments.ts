import { graphql } from 'gatsby'

// @TODO: Might need to switch to gatsby-source-graphql to use these...
//    Not doing anything for now but it would be nice in the future

export const textPageQuery = graphql`
  fragment textPageData on TextPage {
    Content
    PageData {
      ...pageData
    }
  }
`

export const pageQuery = graphql`
  fragment pageData on PageData {
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
`
