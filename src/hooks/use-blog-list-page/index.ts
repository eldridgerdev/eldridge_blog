import { graphql, useStaticQuery } from 'gatsby'
import { BlogListPageData } from './types'

export const useBlogListPage = (): BlogListPageData => {
  return useStaticQuery(graphql`
    query getBlogListPAge {
      strapiBlogListPage {
        siteTitle
        heroText
        heroImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        metaGroup {
          title
          description
        }
      }
    }
  `)
}
