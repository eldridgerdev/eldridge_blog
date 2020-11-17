import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import BlogList from './blog-card-list'

// @TODO: Paginate
const ListContainer = () => {
    const data = useStaticQuery(graphql`
        query GetAllBlogPosts {
            allStrapiBlogPost(sort: {fields: published_at, order: DESC}) {
                edges {
                    node {
                        id
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
        }
    `)

    const posts = data.allStrapiBlogPost.edges

    return <BlogList data={posts} />
}

export default ListContainer