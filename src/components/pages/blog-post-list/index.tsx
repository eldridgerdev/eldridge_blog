import React from 'react'

import Layout from '../../layout'
import SEO from '../../seo'
import CardList from '../../cards/blog-card-list'
import { BlogListPageProps } from './types'
import { Inner } from './styled'

const BlogPosts: React.FC<BlogListPageProps> = ({ data, location }) => {
  const blogListData = data.strapiBlogListPage
  const image = blogListData.heroImage?.childImageSharp.fluid
  const { siteTitle: title, heroText: text } = blogListData

  return (
    <Layout heroOverride={image}>
      <SEO title={title} />
      <Inner>
        <CardList />
      </Inner>
    </Layout>
  )
}

export default BlogPosts
