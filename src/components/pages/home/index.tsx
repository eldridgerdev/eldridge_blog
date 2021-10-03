import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { HomePageProps } from './types'
import { LatestContainer, MorePosts } from './styled'
import Layout from '../../layout'
import SEO from '../../seo'
import LatestBlog from '../../cards/latest-blog-container'

const MoreIcon = () => (
  // <IconContainer>
  <FontAwesomeIcon icon={faAngleDoubleRight} />
  // </IconContainer>
)

const BlogIndex: React.FC<HomePageProps> = ({ data }) => {
  const featuredPost = data.strapiFeaturedPost.blog_post
  const pageData = data.strapiIndexPage.Page
  const meta = data.strapiIndexPage.metaGroup
  const image = pageData.HeroImage?.childImageSharp.fluid
  const multiPost = data.strapiIndexPage.multiPost

  const { description, subDescription } = data.strapiIndexPage

  return (
    <>
      <Layout
        heroOverride={image}
        heroText={pageData.HeroText}
        description={description}
        subDescription={subDescription}>
        <SEO
          title={meta?.title || pageData.SiteTitle}
          description={meta?.description}
        />

        <LatestContainer $multipost={multiPost}>
          <LatestBlog multiPost={multiPost} featuredPost={featuredPost} />
          <MorePosts to="/blog-post-list">
            More Posts
            <MoreIcon />
          </MorePosts>
        </LatestContainer>
      </Layout>
    </>
  )
}

export default BlogIndex
