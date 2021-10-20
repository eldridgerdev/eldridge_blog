import React from 'react'

import Text from '../../../text'
import AffiliateLinks from '../affiliate-links'
import BlogImage from '../blog-image'

import {
  BlogContent,
  StrapiComponent,
  ImageWidthOptions,
  BlogContentImageItem,
  BlogContentAffiliateItem,
  BlogContentTextItem,
} from '../../../../hooks/use-all-posts/types'

import { SectionLine, Container, BlogTextSection } from './styled'
import { SectionProps } from './types'

// @TODO: This isn't just text-section any more. Rename or move some stuff to their own components.

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
              const image = item as BlogContentImageItem
              if (!image.Image || !image.Image.childImageSharp) {
                return
              }

              const width =
                (item as BlogContentImageItem).ImageWidth ||
                ImageWidthOptions.SMALL

              return (
                <Text key={i}>
                  <BlogImage
                    image={image.Image}
                    caption={image.ImageCaption}
                    width={width}
                  />
                </Text>
              )
            }
            case StrapiComponent.AFFILIATE: {
              const affiliateItem = item as BlogContentAffiliateItem
              if (!affiliateItem.AffiliateLinkText) {
                return
              }

              return (
                <AffiliateLinks
                  key={i}
                  linkText={affiliateItem.AffiliateLinkText}
                  hide={affiliateItem.Hide}
                  blockText={affiliateItem.BlockText}
                />
              )
            }
            default: {
              const textItem = item as BlogContentTextItem
              if (!textItem.Text) {
                return
              }
              return defaultContent(textItem.Text, i)
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
