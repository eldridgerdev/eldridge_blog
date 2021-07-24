import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { Category, QueryProps } from './types'

export const useAllCategories = (): Category[] => {
  const data: QueryProps = useStaticQuery(graphql`
    query GetAllCategories {
      allStrapiCategory {
        edges {
          node {
            text
          }
        }
      }
    }
  `)

  return data.allStrapiCategory.edges.map(edge => edge.node)
}
