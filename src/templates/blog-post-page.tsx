import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import TextSection from '../components/blog-post/sections/text-section'
import BlogComments from '../components/blog-post/comments/comments-list'
import BlogCreateComment from '../components/blog-post/comments/create-comment'
import { BlogContent, StrapiComponent } from '../hooks/use-all-posts/types'
import { useAllBlogPosts } from '../hooks/use-all-posts'
import SEO from '../components/seo'
import { LatestContainer } from '../components/pages/home/styled'
import LatestBlog from '../components/cards/latest-blog-container'

interface BlogPostProps {
  pageContext: {
    postId: string
  }
}

const defaultContent = (text: string): BlogContent => [
  {
    strapi_component: StrapiComponent.OLD_TEXT,
    Text: text,
  },
]

const BlogPost: React.FC<BlogPostProps> = props => {
  const allPosts = useAllBlogPosts()
  const post = allPosts.find(p => p.node.id === props.pageContext.postId)
  const nextPost =
    post && allPosts.find(p => p.node.postNumber === post.node.postNumber + 1)
  const previousPost =
    post && allPosts.find(p => p.node.postNumber === post.node.postNumber - 1)

  useEffect(() => {
    if (!post) {
      navigate('/404')
    }
  })

  if (!post) {
    console.error(`No post found: postId: ${props.pageContext.postId}`)
    console.error(`posts: ${JSON.stringify(allPosts, null, '  ')}`)
    return <div>ERROR</div>
  }

  const {
    HeroImage: hero,
    text,
    Title: title,
    comments,
    Description: description,
    strapiId,
    BlogContent: content,
    meta = {},
  } = post.node

  const blogContent =
    content && content.length > 0 ? content : defaultContent(text)

  return (
    <Layout heroOverride={hero?.childImageSharp.fluid} heroText={null}>
      <SEO
        title={meta.title || title}
        description={meta.description || description}
      />
      <TextSection title={title} content={blogContent} />
      <BlogComments comments={comments} />
      <BlogCreateComment post_id={strapiId} />
      {/* TODO: Move component to a more central location */}
      <LatestContainer $multipost>
        <LatestBlog
          nextPost={nextPost && nextPost.node}
          previousPost={previousPost && previousPost.node}
        />
      </LatestContainer>
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
