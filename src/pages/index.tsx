import React from 'react'
import { Link, graphql, PageProps, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import postcssConfig from '../../postcss.config'
import BlogCard from '../components/cards/blog-card'
import LatestBlog from '../components/cards/latest-blog-container'
import tw from 'twin.macro'
import styled from 'styled-components'
import theme from '../utils/theme'
import { PageType } from '../page-helpers/types'

type DataType = {
  strapiIndexPage: {
    Page: PageType
  }
  strapiFeaturedPost: any
}

export const pageQuery = graphql`
  query IndexPage {
    strapiIndexPage {
      Page {
        SiteTitle
        HeroText
        HeroImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    strapiFeaturedPost {
      blog_post {
        id
        Slug
        published_at
        Title
        Description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

type IndexProps = {
  data: DataType
  location: any
}

const BlogIndex: React.FC<IndexProps> = ({ data, location }) => {
  // @TODO responsive width
  const LatestContainer = styled.div`
    display: flex;
    width: 75%;
    ${tw`w-full md:w-3/4`}
    ${tw`flex justify-center flex-wrap flex-col`}
  `

  const LatestText = styled.span`
    // color: ${theme.colors.trinary};
    color: ${theme.colors.selectedHeader};
    font-weight: 400;
    line-height: 49px;
    font-size: 36px;
    align-self: center;
    ${tw`mt-3 text-3xl sm:text-3xl md:text-4xl`}
  `
  const MorePosts = styled(Link)`
    // color: ${theme.colors.trinary};
    &:hover {
      color: ${theme.colors.trinary};
    }
    color: ${theme.colors.selectedHeader};
    font-size: 28px;
    font-weight: 400;
    line-height: 49px;
    align-self: flex-end;
    ${tw`mb-3`}
    ${tw`text-2xl sm:text-2xl md:text-3xl`}
    text-decoration: underline; // @TODO Grab underline version from google fonts?
  `

  const IconContainer = styled.div`
    align-self: center;
  `

  const MoreIcon = () => (
    // <IconContainer>
    <FontAwesomeIcon icon={faAngleDoubleRight} />
    // </IconContainer>
  )

  const featuredPost = data.strapiFeaturedPost.blog_post
  const pageData = data.strapiIndexPage.Page
  const image = pageData.HeroImage?.childImageSharp.fluid

  return (
    <>
      <Layout heroOverride={image} heroText={pageData.HeroText}>
        <SEO title={pageData.SiteTitle} />
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
