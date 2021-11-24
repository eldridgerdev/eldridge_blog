import { graphql } from 'gatsby'

// @TODO: Split into files, maybe w/ compatible components?
// @TODO: Expand this, there's a lot of copy/paste in queries

export const lowerHeroImageQuery = graphql`
  fragment GetHeroImageLower on IHasHeroImageLower {
    heroImage {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export const heroImageQuery = graphql`
  fragment GetHeroImage on IHasHeroImage {
    HeroImage {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export const ImageQueryLower = graphql`
  fragment GetImageLower on IHasImageLower {
    image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`

export const ImageQuery = graphql`
  fragment GetImageUpper on IHasImageUpper {
    Image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`

export const sitePageFragment = graphql`
  fragment SitePageData on ISitePage {
    Page {
      SiteTitle
      HeroText
      HeroImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
    description
    subDescription
    multiPost
    metaGroup {
      title
      description
    }
  }
`

export const metaGroupFragment = graphql`
  fragment Metagroup on MetaOage {
    title
    description
  }
`

export const textPageQuery = graphql`
  fragment textPageData on TextPage {
    Content
    PageData {
      ...pageData
    }
  }
`
