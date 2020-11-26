import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { useMedia } from 'react-media'

import LatestBlogCard, { LatestBlogProps } from './latest-blog-card'
import BlogCard, { BlogCardProps } from './blog-card'
import styled from 'styled-components'
import tw from 'twin.macro'

type Props = {}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    ${tw`mt-4 container`}
`

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

    const isMobileView = useMedia({ query: "(max-width: 1024px)" })

    const GetCard = ({ ...props }: BlogCardProps) => {
        // @TODO: LatestBlogCard is currently broken
        // if (isMobileView) {
            // @TODO: Fix ul/li
            return (
                <Container>
                    <BlogCard {...props}/>
                </Container>
            )
        // } else {
            // return <LatestBlogCard {...props} />
        // }
    }

    return (
        <GetCard
            blogId={post.id}
            title={post.Title}
            image={image}
            description={post.Description}
            date={formatDate(post.published_at)}
            makeLong={!isMobileView}
            full={true}
        />
    )
}

export default LatestBlogContainer