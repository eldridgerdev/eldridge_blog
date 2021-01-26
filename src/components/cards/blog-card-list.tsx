import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import BlogCard from './blog-card'
import { useAllBlogPosts } from '../../hooks/use-all-posts'

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

const BlogList: React.FC = () => {
    const posts = useAllBlogPosts();
    return (
        <Container>
            {posts.map((post, i) => {
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
                    full={false}
                />
            })}
        </Container>
    )
}

export default BlogList