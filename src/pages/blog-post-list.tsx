import React from 'react'
import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/cards/blog-card-list'

const Inner = styled.div`
  width: 75%;
  ${tw`w-full md:w-3/4`}
`
interface BlogListPageProps extends PageProps {
  data: {
    strapiBlogListPage: any
  }
}

export const pageQuery = graphql`
  query getBlogListPAge {
    strapiBlogListPage {
      siteTitle
      heroText
      heroImage {
        url
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const BlogPostsPage: React.FC<BlogListPageProps> = ({ data, location }) => {
  const blogListData = data.strapiBlogListPage
  const image = blogListData.heroImage?.childImageSharp.fluid
  const { siteTitle: title, heroText: text } = blogListData

  return (
    <Layout
      heroOverride={image}
      heroText={text || null} /*location={location} title={siteTitle} */
    >
      <SEO title={title} />
      <Inner>
        <CardList />
      </Inner>
    </Layout>
  )
}

export default BlogPostsPage
