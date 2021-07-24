import { FluidObject } from 'gatsby-image'

//@TODO: find a better location for this

export type MetaType = {
  title?: string
  description?: string
}

export type TextPageType = {
  Content: string
  Page: PageType
  metaGroup: MetaType
}

export type PageType = {
  SiteTitle: string
  HeroText: string
  HeroImage?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
