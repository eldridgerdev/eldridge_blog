import { FluidObject } from 'gatsby-image'
import { BlogContent } from '../hooks/use-all-posts'

//@TODO: find a better location for this

export type TextPageType = {
  Content: string
  Page: PageType
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
