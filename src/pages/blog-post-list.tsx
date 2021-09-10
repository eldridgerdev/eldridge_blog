import React from 'react'
import { graphql } from 'gatsby'

import { BlogListPageProps } from '../components/pages/blog-post-list/types'
import BlogPosts from '../components/pages/blog-post-list'

export const pageQuery = graphql`
  query getBlogListPAge {
    strapiBlogListPage {
      siteTitle
      heroText
      heroImage {
        url
        childImageSharp {
          fluid() {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metaGroup {
        title
        description
      }
    }
  }
`

const BlogPostsPage: React.FC<BlogListPageProps> = props => (
  <BlogPosts {...props} />
)

export default BlogPostsPage
