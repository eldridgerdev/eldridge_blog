import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useMedia } from 'react-media'

import BlogCard from './blog-card'

type BlogListProps = {
    data: [{
        node: {
            id: string,
            postNumber?: number,
            Slug?: string,
            published_at: string,
            Title: string,
            Description: string,
            image?: {
                childImageSharp: {
                    fluid: any
                }
            }
        }
    }]
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    ${tw`mt-4 container`}
`
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

const BlogList: React.FC<BlogListProps> = ({ data }) => {
    // const isMobileView = useMedia({ query: "(max-width: 1024px)" })

    return (
        <Container>
            {data.map((post, i) => {
                const { id, postNumber, Slug, published_at, Title: title, Description: desc, image } = post.node
                const imageSharp = image && image.childImageSharp;
                return <BlogCard
                    blogId={Slug || id}
                    date={formatDate(published_at)}
                    title={title}
                    description={desc}
                    image={imageSharp && imageSharp.fluid}
                    key={i}
                    postNumber={postNumber}
                    // height={'70vh'}
                    // height={isMobileView ? 'auto' : '75vh'}
                    full={false}
                />
            })}
        </Container>
    )
}

export default BlogList