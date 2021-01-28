import React from 'react'
import BlogCard, { BlogCardProps } from './blog-card'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useAllBlogPosts, BlogPost } from '../../hooks/use-all-posts'

type Props = {
  featuredPost?: BlogPost
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  ${tw`mt-4 container`}
`

const LatestBlogContainer: React.FC<Props> = ({ featuredPost = null }) => {
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

  // react-media isn't SSR friendly, CSS is.
  const extraCSS = `
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        height: 12em;
    }
  `
  const extraCardCSS = `
    @media screen and (min-width: 1024px) { 
        @media (min-width: 1024px) {
            width: 40%;
        }
    }
  `

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
