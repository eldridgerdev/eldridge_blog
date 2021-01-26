import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import BlogText from '../components/blog-post/blog-post-text-section'
import BlogComments from '../components/blog-post/blog-post-comments'
import BlogCreateComment from '../components/blog-post/create-comment'

// @TODO types for data
const BlogPost: React.FC<{data: any}> = ({ data }) => {
  const { HeroImage: image,  text, Title: title, comments, strapiId } = data.strapiBlogPost

  return (
    <Layout
      heroOverride={image?.childImageSharp.fluid}
      heroText={null}
    >
      <BlogText title={title} text={text} />
      <BlogComments comments={comments} />
      <BlogCreateComment post_id={strapiId} />
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
      strapiId,
      published_at,
      comments {
        username,
        commentText,
        created_at
      },
      HeroImage {
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
