import React from 'react'

import Text from '../../../text'
import AffiliateLinks from '../affiliate-links'
import BlogImage from '../blog-image'

import {
  BlogContent,
  StrapiComponent,
  ImageWidthOptions,
} from '../../../../hooks/use-all-posts/types'

import { SectionLine, Container, BlogTextSection } from './styled'
import { SectionProps } from './types'

// @TODO: text-section doesn't seem to be the best descriptor. Rethink this.

const defaultContent = (text: string, i?: number) => (
  <BlogTextSection key={i} dangerouslySetInnerHTML={{ __html: text }} />
)

const renderText = (content: BlogContent) => {
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
                <AffiliateLinks
                  key={i}
                  linkText={item.AffiliateLinkText}
                  hide={item.Hide}
                />
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

const Section: React.FC<SectionProps> = ({
  title,
  content = [],
  text = '',
}) => (
  <Container>
    {title && renderTitle(title)}
    {content && content.length > 0 ? renderText(content) : defaultContent(text)}
    <SectionLine />
  </Container>
)

export default Section
