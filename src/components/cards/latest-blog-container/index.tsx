import React from 'react'

import BlogCard from '../blog-card'
import { BlogCardProps } from '../blog-card/types'
import { useAllBlogPosts } from '../../../hooks/use-all-posts'
import { CardProps, LatestBlogContainerProps } from './types'
import {
  Container,
  extraCSS,
  extraCardCSS,
  LatestText,
  ListItem,
} from './styled'
import { BlogPost } from '../../../hooks/use-all-posts/types'

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

// @TODO: Using this for things other than Latest, consider renaming
const LatestBlogContainer: React.FC<LatestBlogContainerProps> = ({
  featuredPost = null,
  multiPost = false,
  nextPost = null,
  previousPost = null,
}) => {
  const [{ node: latestPost }] = useAllBlogPosts()

  const post = featuredPost || latestPost

  const Card = ({ cardPost }: CardProps) => {
    const image = cardPost.image?.childImageSharp?.fluid
    return (
      <BlogCard
        extraCSS={extraCSS}
        extraCardCSS={extraCardCSS}
        blogId={cardPost.Slug || cardPost.id}
        title={cardPost.Title}
        fluidImage={image}
        description={cardPost.Description}
        date={formatDate(cardPost.published_at)}
        full
        makeLong={false}
      />
    )
  }

  const LatestPost = () => (
    <Container
      style={
        {
          // width: 300,
        }
      }>
      <LatestText>Latest Adventure</LatestText>
      <Card cardPost={latestPost} />
    </Container>
  )

  const FeaturedPost = () => {
    if (!featuredPost) {
      return null
    }
    return (
      <Container
        style={
          {
            // width: 300,
          }
        }>
        <LatestText>Featured Post</LatestText>
        <Card cardPost={featuredPost} />
      </Container>
    )
  }

  const NextPost = () => {
    if (!nextPost) {
      return null
    }

    return (
      <Container>
        <LatestText>Next Post</LatestText>
        <Card cardPost={nextPost} />
      </Container>
    )
  }

  const PreviousPost = () => {
    if (!previousPost) {
      return null
    }

    return (
      <Container>
        <LatestText>Previous Post</LatestText>
        <Card cardPost={previousPost} />
      </Container>
    )
  }
  // @TODO: Clean up, this is messy
  if (nextPost || previousPost) {
    const isSingle = !(nextPost && previousPost)
    return (
      <Container>
        {previousPost && (
          <ListItem $full={isSingle}>
            <PreviousPost />
          </ListItem>
        )}
        {nextPost && (
          <ListItem $full={isSingle}>
            <NextPost />
          </ListItem>
        )}
      </Container>
    )
  }

  if (multiPost) {
    return (
      <Container>
        <ListItem $full={false}>
          <LatestPost />
        </ListItem>
        <ListItem $full={false}>
          <FeaturedPost />
        </ListItem>
      </Container>
    )
  }

  return (
    <Container>{featuredPost ? <FeaturedPost /> : <LatestPost />}</Container>
  )
}

export default LatestBlogContainer
