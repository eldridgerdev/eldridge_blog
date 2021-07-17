import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Image, { FluidObject } from 'gatsby-image'

import Line from './line/line'
import Text from './text'
import theme from './../utils/theme'
import {
  BlogContent,
  BlogContentItem,
  StrapiComponent,
  ImageWidthOptions,
} from '../hooks/use-all-posts'

interface SectionProps {
  title?: string
  content?: BlogContent
}

const TextSection = styled(Text)`
  width: 100%;
  ${tw`flex-auto`}
`

const SectionLine = styled(Line)`
  border-top: 2px solid ${theme.colors.main};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 50px 0px;
  width: 50%;
  ${tw`w-full md:w-1/2`}
`

const getWidth = (width?: ImageWidthOptions) => {
  switch (width) {
    case ImageWidthOptions.SMALL: {
      return '50%'
    }
    case ImageWidthOptions.MEDIUM: {
      return '75%'
    }
    case ImageWidthOptions.LARGE: {
      return '100%'
    }
    default: {
      return '50%'
    }
  }
}
const ImageContainer = styled.div<{ $width?: ImageWidthOptions }>`
  width: ${(props: { $width?: ImageWidthOptions }) => getWidth(props.$width)};
  ${tw`flex-auto min-w-0 mx-auto my-3`}
`

//@TODO: Move to it's own file
const AffiliateLinkContainer = styled.div`
  background-color: ${theme.colors.light};
  & ul {
    ${tw`flex flex-wrap justify-evenly w-full`}
  }
  & li {
    ${tw`flex`}
  }

  & p {
    ${tw`text-sm md:text-sm text-center`}
  }

  ${tw`flex-auto min-w-0 p-2 my-3`}
`

const AffiliateLinkRow = styled.div`
  ${tw`flex justify-center my-1`}
`

const BlogTextSection = styled(Text)`
  ${tw`my-3`}
`

type AffiliateLinkProps = {
  linkText: string
}

const AffiliateLinks = ({ linkText }: AffiliateLinkProps) => (
  <AffiliateLinkContainer>
    <AffiliateLinkRow>
      <Text>
        <p>
          <i>
            We earn a small commision if you purchase a recommended product
            through our affiliate link
          </i>
        </p>
      </Text>
    </AffiliateLinkRow>
    <AffiliateLinkRow dangerouslySetInnerHTML={{ __html: linkText }} />
  </AffiliateLinkContainer>
)

type ImageProps = {
  image: FluidObject
  caption?: string
  width?: ImageWidthOptions
}

// @TODO: Probably deserves it's own file.
const renderImage = ({ image, caption, width }: ImageProps) => (
  <ImageContainer $width={width}>
    <br />
    <figure className="image image_resized image-style-align-center">
      <Image
        fluid={image}
        imgStyle={{
          objectPosition: 'left center',
        }}></Image>
      <figcaption>{caption}</figcaption>
    </figure>
    <br />
  </ImageContainer>
)

const renderText = (content: BlogContent) => {
  const defaultContent = (text: string, i: number) => (
    <BlogTextSection key={i} dangerouslySetInnerHTML={{ __html: text }} />
  )
  return (
    <div>
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
                  {renderImage({
                    image: item.Image.childImageSharp.fluid,
                    caption: item.ImageCaption,
                    width: width,
                  })}
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
    </div>
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
    {/* <Text dangerouslySetInnerHTML={{ __html: text }} /> */}
  </Container>
)

export default Section
