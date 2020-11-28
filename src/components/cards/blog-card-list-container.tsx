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
                        Slug
                        published_at
                        Hide
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

    const posts = data.allStrapiBlogPost.edges.filter((edge: any) => !edge.node.Hide)

    return <BlogList data={posts} />
}

export default ListContainer