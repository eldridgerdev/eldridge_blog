import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import BlogCard from './blog-card'

type BlogListProps = {
    data: [{
        node: {
            id: string,
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
    const mql = window.matchMedia('(max-width: 1024px)')
    const [isMobileView, setIsMobileView] = useState(!!mql.matches);

    // @TODO: Memory leak, clean up listener
    mql.addEventListener('change', (e) => {
        setIsMobileView(!!e.matches);
    });

    return (
        <Container>
            {data.map((post, i) => {
                const { id, published_at, Title: title, Description: desc, image } = post.node
                return <BlogCard
                    blogId={id}
                    date={formatDate(published_at)}
                    title={title}
                    description={desc}
                    image={image?.childImageSharp.fluid}
                    key={i}
                    height={isMobileView ? 'auto' : '250px'}
                />
            })}
        </Container>
    )
}

export default BlogList