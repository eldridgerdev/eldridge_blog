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
interface BlogListPageProps extends PageProps {
  data: {
    strapiBlogListPage: any
  }
}

export const pageQuery = graphql`
  query getBlogListPAge {
    strapiBlogListPage {
      siteTitle
      heroText
      heroImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// Page {
//   SiteTitle
//   HeroText
//   HeroImage {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
const BlogPostsPage: React.FC<BlogListPageProps> = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title
  // const blogListData = data.strapiBlogListPage
  // const image = blogListData.Page.HeroImage?.childImageSharp.fluid
  // const { SiteTitle: title, HeroText: text } = blogListData.Page
  const blogListData = data.strapiBlogListPage
  const image = blogListData.heroImage?.childImageSharp.fluid
  const { siteTitle: title, heroText: text } = blogListData


  return (
    <Layout heroOverride={image} heroText={text || null} /*location={location} title={siteTitle} */>
      <SEO title={title} />
      {/* <h1>Coming Soon</h1>
      <p>This page does not exist yet, check back later</p> */}
      <Inner>
          <CardList />
      </Inner>
    </Layout>
  )
}

export default BlogPostsPage

