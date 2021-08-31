import React from 'react'
import Image, { GatsbyImageProps } from 'gatsby-image'
import tw from 'twin.macro'

import Line from '../../line/line'
import { DisplayImageProps, BlogCardProps } from './types'
import {
  ListItem,
  CardLink,
  PostNumber,
  Date,
  Description,
  Title,
  TextContainer,
} from './styled'

//@TODO: This file is a mess. featured and blog-list look different and it isn't handled well
const DisplayImage = tw(
  ({ fixedImage, fluidImage, className = '' }: DisplayImageProps) => {
    const Img = (props: GatsbyImageProps) => (
      <Image
        className={className}
        imgStyle={{ objectPosition: 'left center' }}
        {...props}
      />
    )

    if (fluidImage) {
      return <Img fluid={fluidImage} />
    }

    if (fixedImage) {
      return <Img fixed={fixedImage} />
    }

    return null
  }
)`
    flex-auto min-w-0
`

const BlogCard = ({
  title,
  description,
  fixedImage,
  fluidImage,
  blogId,
  date,
  height,
  postNumber = null,
  makeLong = false,
  full = false,
  extraCSS = '',
  extraCardCSS = '',
}: BlogCardProps): JSX.Element => {
  if (!height) {
    makeLong ? (height = '45vh') : (height = '75vh')
  }

  return (
    <ListItem $full={full} $duration={500} $state="entering">
      <CardLink $extraCSS={extraCSS} $height={height} to={`/${blogId}`}>
        {/* <div className='rounded overflow-hidden shadow-lg'> */}
        <DisplayImage fixedImage={fixedImage} fluidImage={fluidImage} />
        <TextContainer $extraCSS={extraCardCSS}>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Line />
          <Description>{description}</Description>
          {postNumber && (
            <PostNumber>
              <h1>{`#${postNumber}`}</h1>
            </PostNumber>
          )}
        </TextContainer>
        {/* </div> */}
      </CardLink>
    </ListItem>
  )
}

export default BlogCard
