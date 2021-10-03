import { FixedObject, FluidObject } from 'gatsby-image'
import { MetaType } from '../../page-helpers/types'

export interface BlogListPageData {
  strapiBlogListPage: {
    siteTitle: string
    heroText?: string
    heroImage?: {
      childImageSharp: {
        fluid: FluidObject
        fixed?: FixedObject
      }
    }
    metaGroup?: MetaType
  }
}
