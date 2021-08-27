import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { HomePageProps } from './types'
import { LatestContainer, LatestText, MorePosts } from './styled'
import Layout from '../../layout'
import SEO from '../../seo'
import LatestBlog from '../../cards/latest-blog-container'
import Text from '../../text'
import { Container } from '../../blog-post/sections/text-section/styled'

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
  return (
    <>
      <Layout heroOverride={image} heroText={pageData.HeroText}>
        <SEO
          title={meta?.title || pageData.SiteTitle}
          description={meta?.description}
        />
        {/* @TODO: move container comp to more global location */}
        <Container>
          <Text>
            <h1>{data.strapiIndexPage.description}</h1>
          </Text>
        </Container>
        <LatestContainer>
          <LatestText>
            {featuredPost ? 'Featured Post' : 'Latest Adventure'}
          </LatestText>
          <LatestBlog featuredPost={featuredPost} />
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
