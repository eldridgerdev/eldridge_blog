import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import theme from '../../utils/theme'
import Line from '../line/line'
import tw from 'twin.macro'

//@TODO: This file is a mess. featured and blog-list look different and it isn't handled well

export type BlogCardProps = {
  image?: FluidObject
  title: string
  description: string
  date: string
  blogId?: string
  height?: string
  makeLong?: boolean
  full?: boolean
  extraCSS?: string
  extraCardCSS?: string
  postNumber?: number | null
}

const DisplayImage = tw(
  ({ image, className = '' }: { image?: FluidObject; className?: string }) => {
    if (!image) {
      return null
    }
    return (
      <Image
        fluid={image}
        className={className}
        imgStyle={{
          objectPosition: 'left center',
        }}
      />
    )
  }
)`
    flex-auto min-w-0
`

const TextContainer = styled.div<{ $extraCSS?: string }>`
  background-color: #ffffff;
  ${tw`min-w-0 lg:min-w-1/3`}
  ${(props: { $extraCSS?: string }) => props.$extraCSS && props.$extraCSS}
    
  & h1 {
    ${tw`text-base lg:text-xl`}
  }

  & p {
    ${tw`text-sm lg:text-base`}
  }

  & h2 {
    ${tw`text-xs lg:text-sm`}
  }

  ${tw`p-5 leading-tight`}
`

const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  ${tw`font-bold mb-2`}
`

const Description = styled.p`
  font-weight: 400;
  line-height: 19px;
  font-family: 'Alegreya', serif;
  ${tw`text-gray-700 text-base`}
`

const Date = styled.h2`
  font-weight: normal;
`

const PostNumber = styled.div`
  height: 40px;
  width: 40px;
  float: right;
  border-radius: 50%;
  border: 3px solid ${theme.colors.main};
  justify-content: center;

  display: flex;
  & > h1 {
    display: flex;
    align-self: center;
  }
`

const CardLink = styled(Link)<{ $height?: string; $extraCSS?: string }>`
  ${props => props.$height && `height: ${props.$height};`}
  display: flex;
  width: 100%;

  & > img:hover {
    .blog-image {
      filter: contrast(100%);
    }
  }

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.2),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.2);
  }
  transition: 0.4s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  ${tw`flex-col rounded overflow-hidden shadow-lg`}
  ${props => props.$extraCSS}
`

const ListItem = styled.li<{ $full: boolean }>`
  ${tw`w-full mb-4 px-2`}
  ${props => !props.$full && tw`sm:w-full md:w-1/2`}
    display: flex;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    height: 100%;
  }
`

const BlogCard = ({
  title,
  description,
  image,
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
    <ListItem $full={full}>
      <CardLink $extraCSS={extraCSS} $height={height} to={`/${blogId}`}>
        {/* <div className='rounded overflow-hidden shadow-lg'> */}
        <DisplayImage image={image} />
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
