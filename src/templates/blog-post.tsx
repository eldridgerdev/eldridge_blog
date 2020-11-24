import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import BlogText from '../components/blog-post-text-section'

// @TODO types for data
const BlogPost: React.FC<{data: any}> = ({ data }) => {
  return (
    <Layout
      heroOverride={data.strapiBlogPost.image?.childImageSharp.fluid}
      heroText={data.strapiBlogPost.Title}
    >
      <BlogText text={data.strapiBlogPost.text} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    strapiBlogPost(id: {eq: $id}) {
      Title,
      Description,
      text,
      id,
      published_at,
      Image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
