import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useAllBlogPosts } from '../../../hooks/use-all-posts'
import Categories from '../../categories/category-list'

import BlogCard from '../blog-card'
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
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = (() => {
    if (selectedCategory === 'All') {
      return posts
    }

    return posts.filter(post =>
      post.node.categories.some(category => category.text === selectedCategory)
    )
  })()

  return (
    <>
      <Categories
        selectedItem={selectedCategory}
        makeSelection={val => {
          setSelectedCategory('none')
          setTimeout(() => {
            setSelectedCategory(val)
          }, 100)
        }}
      />
      <Container>
        <TransitionGroup component={null}>
          {filteredPosts.map((post, i) => {
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
              <CSSTransition key={i} timeout={800} classNames="card">
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
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </Container>
    </>
  )
}

export default BlogList
