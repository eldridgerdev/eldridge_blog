import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'
import { MetaType } from '../../page-helpers/types'

export interface BlogListPageData {
  strapiBlogListPage: {
    siteTitle: string
    heroText?: string
    heroImage?: FileNode
    metaGroup?: MetaType
  }
}
