import { FixedObject, FluidObject, GatsbyImageFluidProps } from 'gatsby-image'

export interface HeroImageStyledProps {
  url: string
}

export type HeroTextProps = {
  text: string
  img?: FluidObject | FixedObject
  title?: string
}

export type HeroProps = {
  image?: FluidObject | FixedObject
  text?: string | null
}

export interface CustomImageProps extends GatsbyImageFluidProps {
  height?: number | null
  mobileHeight?: number | null
}
