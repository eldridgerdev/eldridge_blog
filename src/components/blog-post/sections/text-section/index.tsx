import React from 'react'

import Text from '../../../text'
import AffiliateLinks from '../affiliate-links'
import BlogImage from '../blog-image'

import {
  BlogContent,
  StrapiComponent,
  ImageWidthOptions,
} from '../../../../hooks/use-all-posts'

import { SectionLine, Container, BlogTextSection } from './styled'
import { SectionProps } from './types'

// @TODO: text-section doesn't seem to be the best descriptor. Rethink this.

const renderText = (content: BlogContent) => {
  const defaultContent = (text: string, i: number) => (
    <BlogTextSection key={i} dangerouslySetInnerHTML={{ __html: text }} />
  )
  return (
    <>
      {content &&
        content.map((item, i) => {
          if (typeof item === 'string') {
            return defaultContent(item, i)
          }
          switch (item.strapi_component) {
            case StrapiComponent.IMAGE: {
              if (!item.Image || !item.Image.childImageSharp) {
                return
              }

              const width = item.ImageWidth || ImageWidthOptions.SMALL

              return (
                <Text key={i}>
                  <BlogImage
                    image={item.Image.childImageSharp.fluid}
                    caption={item.ImageCaption}
                    width={width}
                  />
                </Text>
              )
            }
            case StrapiComponent.AFFILIATE: {
              if (!item.AffiliateLinkText) {
                return
              }

              return (
                <AffiliateLinks key={i} linkText={item.AffiliateLinkText} />
              )
            }
            default: {
              if (!item.Text) {
                return
              }
              return defaultContent(item.Text, i)
            }
          }
        })}
      <br />
    </>
  )
}

const renderTitle = (title: string) => (
  <Text>
    <h1>{title}</h1>
  </Text>
)

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <Container>
    {title && renderTitle(title)}
    {content && renderText(content)}
    <SectionLine />
  </Container>
)

export default Section
