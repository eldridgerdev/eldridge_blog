import { FluidObject } from 'gatsby-image'

//@TODO: find a better location for this

export type MetaType = {
  title?: string
  description?: string
}

export type TextPageType = {
  Content: string
  Page: PageType
  meta: MetaType
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
