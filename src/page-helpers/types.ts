import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

//@TODO: find a better location for this

export type MetaType = {
  title?: string
  description?: string
}

export type TextPageType = {
  Content: string
  Page: PageType
  metaGroup?: MetaType
}

export type PageType = {
  SiteTitle: string
  HeroText: string
  HeroImage?: FileNode
}
