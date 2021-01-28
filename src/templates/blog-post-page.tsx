import React from 'react'

import Layout from '../components/layout'
import TextSection from '../components/text-section'
import BlogComments from '../components/blog-post/comments/comments-list'
import BlogCreateComment from '../components/blog-post/comments/create-comment'
import { useAllBlogPosts } from '../hooks/use-all-posts'
import { navigate } from 'gatsby'

interface BlogPostProps {
  pageContext: {
    postId: string
  }
}

const BlogPost: React.FC<BlogPostProps> = props => {
  const allPosts = useAllBlogPosts()
  const post = allPosts.find(p => p.node.id === props.pageContext.postId)

  if (!post) {
    navigate('/404')
    return null
  }

  const { HeroImage: hero, text, Title: title, comments, strapiId } = post.node

  return (
    <Layout heroOverride={hero?.childImageSharp.fluid} heroText={null}>
      <TextSection title={title} text={text} />
      <BlogComments comments={comments} />
      <BlogCreateComment post_id={strapiId} />
    </Layout>
  )
}

export default BlogPost

// export const query = graphql`
//   query BlogPostTemplate($id: String!) {
//     strapiBlogPost(id: { eq: $id }) {
//       Title
//       Description
//       text
//       id
//       strapiId
//       published_at
//       comments {
//         username
//         commentText
//         created_at
//       }
//       HeroImage {
//         url
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `