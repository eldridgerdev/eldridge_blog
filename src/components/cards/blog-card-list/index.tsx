import React from 'react'

import BlogCard from '../blog-card'
import { useAllBlogPosts } from '../../../hooks/use-all-posts'
import { Container } from './styled'

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const BlogList: React.FC = () => {
  const posts = useAllBlogPosts()
  return (
    <Container>
      {posts.map((post, i) => {
        const {
          id,
          postNumber,
          Slug,
          published_at,
          Title: title,
          Description: desc,
          image,
        } = post.node
        const imageSharp = image && image.childImageSharp
        return (
          <BlogCard
            blogId={Slug || id}
            date={formatDate(published_at)}
            title={title}
            description={desc}
            image={imageSharp && imageSharp.fluid}
            key={i}
            postNumber={postNumber}
            full={false}
          />
        )
      })}
    </Container>
  )
}

export default BlogList
