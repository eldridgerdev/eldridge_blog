import { graphql, useStaticQuery } from 'gatsby'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

interface QueryProps {
  strapiLogo: {
    LogoImage: FileNode
  }
}

export const useLogo = (): FileNode => {
  const data: QueryProps = useStaticQuery(graphql`
    query GetLogo {
      strapiLogo {
        LogoImage {
          childImageSharp {
            gatsbyImageData(height: 77)
          }
        }
      }
    }
  `)

  return data.strapiLogo.LogoImage
}
