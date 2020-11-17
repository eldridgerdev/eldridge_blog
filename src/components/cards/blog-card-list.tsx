import React from 'react'
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
    return (
        <Container>
            {data.map((post, i) => {
                const { id, published_at, Title: title, Description: desc, image } = post.node
                return <BlogCard
                    id={id}
                    date={formatDate(published_at)}
                    title={title}
                    desc={desc}
                    img={image?.childImageSharp.fluid}
                    key={i}
                />
            })}
        </Container>
    )
}

export default BlogList