import { PageProps } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { MetaType } from '../../../page-helpers/types'

export interface BlogListPageProps extends PageProps {
  data: {
    strapiBlogListPage: {
      heroImage?: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
      heroText?: string
      metaGroup: MetaType
      siteTitle: string
    }
  }
}
