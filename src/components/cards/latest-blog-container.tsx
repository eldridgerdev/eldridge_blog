import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import LatestBlogCard from './latest-blog-card'

type Props = {}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

const LatestBlogContainer: React.FC<Props> = () => {
    const data = useStaticQuery(graphql`
        query LatestBlog {
            allStrapiBlogPost(sort: {fields: published_at, order: DESC}, limit: 1) {
                edges {
                    node {
                    id
                    published_at
                    Title
                    Description
                    image {
                        childImageSharp {
                            fixed (height: 250) {
                                ...GatsbyImageSharpFixed
                            }
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

    const post = data.allStrapiBlogPost.edges[0].node
    const image = post.image?.childImageSharp.fluid

    return (
        <LatestBlogCard
            blogId={post.id}
            title={post.Title}
            image={image}
            description={post.Description}
            date={formatDate(post.published_at)}
        />
    )
}

export default LatestBlogContainer