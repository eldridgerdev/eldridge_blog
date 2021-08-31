import { PageProps } from 'gatsby'
import { FixedObject, FluidObject } from 'gatsby-image'
import { MetaType } from '../../../page-helpers/types'

export interface BlogListPageProps extends PageProps {
  data: {
    strapiBlogListPage: {
      heroImage?: {
        childImageSharp: {
          fluid: FluidObject
          fixed?: FixedObject
        }
      }
      heroText?: string
      metaGroup: MetaType
      siteTitle: string
    }
  }
}
