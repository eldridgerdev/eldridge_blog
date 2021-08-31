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

const LatestBlogContainer: React.FC<LatestBlogContainerProps> = ({
  featuredPost = null,
  multiPost,
}) => {
  const [{ node: latestPost }] = useAllBlogPosts()

  const post = featuredPost || latestPost
  const image = post.image?.childImageSharp?.fluid

  const Card = ({ cardPost }: CardProps) => (
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

  if (multiPost) {
    return (
      <Container>
        <ListItem>
          <LatestPost />
        </ListItem>
        <ListItem>
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
