import React from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import postcssConfig from "../../postcss.config"
import BlogCard from '../components/cards/blog-card'
import LatestBlog from '../components/cards/latest-blog-container'
import tw from "twin.macro"
import styled from "styled-components"
import theme from "../utils/theme"

type DataType = {
  allStrapiBlogPost: {
    edges: [{
      node: {
        strapiId: string,
        id: string,
        Title: string,
        Description: string,
        image?: any
      }
    }]
  }
}

const BlogIndex: React.FC = ({ location }: any) => {
  // @TODO responsive width
  const LatestContainer = styled.div`
    display: flex;
    width: 75%;
    // width: 715px;
    ${tw`flex justify-center flex-wrap flex-col`}
  `

  const LatestText = styled.span`
    // color: ${theme.colors.trinary};
    color: ${theme.colors.selectedHeader};
    font-weight: 400;
    line-height: 49px;
    font-size: 36px;
    align-self: center;
    ${tw`text-3xl sm:text-3xl md:text-4xl`}
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

  return (
    <>
      <Layout /* location={location} /* title='title'*/>
        <LatestContainer>
          <LatestText>Latest Adventure</LatestText>
          <LatestBlog />
          <MorePosts to='/blog-post-list'>More Posts<MoreIcon /></MorePosts>
        </LatestContainer>
        {/* @TODO: card list */}
        {/* <div className='flex -mx-2 flex-wrap'>
          {data.allStrapiBlogPost.edges.map((post) => (
            <BlogCard
              title={post.node.Title}
              description={post.node.Description}
              image={post.node.image?.childImageSharp.fluid}
              key={post.node.strapiId}
              id={post.node.id}
            />
          ))}
        </div> */}
      </Layout>
    </>
  )
}

export default BlogIndex
