import { graphql, useStaticQuery } from 'gatsby'
import { FixedObject } from 'gatsby-image'

interface QueryProps {
  strapiLogo: {
    LogoImage: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }
}

export const useLogo = (): FixedObject => {
  const data: QueryProps = useStaticQuery(graphql`
    query GetLogo {
      strapiLogo {
        LogoImage {
          childImageSharp {
            fixed(height: 77, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return data.strapiLogo.LogoImage?.childImageSharp.fixed
}
