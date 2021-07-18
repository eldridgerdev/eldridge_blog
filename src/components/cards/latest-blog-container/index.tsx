import React from 'react'

import BlogCard from '../blog-card'
import { BlogCardProps } from '../blog-card/types'
import { useAllBlogPosts } from '../../../hooks/use-all-posts'
import { LatestBlogContainerProps } from './types'
import { Container, extraCSS, extraCardCSS } from './styled'

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const LatestBlogContainer: React.FC<LatestBlogContainerProps> = ({
  featuredPost = null,
}) => {
  const [{ node: latestPost }] = useAllBlogPosts()

  const post = featuredPost || latestPost
  const image = post.image?.childImageSharp?.fluid

  const GetCard = ({ ...props }: BlogCardProps) => {
    return (
      <Container>
        <BlogCard {...props} />
      </Container>
    )
  }

  return (
    <GetCard
      extraCSS={extraCSS}
      extraCardCSS={extraCardCSS}
      blogId={post.Slug || post.id}
      title={post.Title}
      image={image}
      description={post.Description}
      date={formatDate(post.published_at)}
      full
    />
  )
}

export default LatestBlogContainer
