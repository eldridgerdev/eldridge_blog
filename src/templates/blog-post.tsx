import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import BlogText from '../components/blog-post-text-section'

// @TODO types for data
const BlogPost: React.FC<{data: any}> = ({ data }) => {
  const { HeroImage: image,  text, Title: title } = data.strapiBlogPost
  return (
    <Layout
      heroOverride={image?.childImageSharp.fluid}
      heroText={null}
    >
      <BlogText title={title} text={text} />
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
      HeroImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
