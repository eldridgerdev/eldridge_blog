import React from "react"
import { graphql, Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import theme from '../utils/theme'
import CardList from '../components/cards/blog-card-list-container'

const Inner = styled.div`
    width: 75%;
    
`

const BlogPostsPage: any = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title

  return (
    <Layout /*location={location} title={siteTitle} */>
      <SEO title="Blog" />
      {/* <h1>Coming Soon</h1>
      <p>This page does not exist yet, check back later</p> */}
      <Inner>
          <CardList />
      </Inner>
    </Layout>
  )
}

export default BlogPostsPage

