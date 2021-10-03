import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { BlogListPageProps } from '../components/pages/blog-post-list/types'
import BlogPosts from '../components/pages/blog-post-list'
import { useBlogListPage } from '../hooks/use-blog-list-page'

interface BlogPostProps extends PageProps {
  pageContext: {
    category?: string
  }
}

const BlogPostsPage: React.FC<BlogPostProps> = props => {
  const blogPageData = useBlogListPage()

  return <BlogPosts data={blogPageData} category={props.pageContext.category} />
}

export default BlogPostsPage
