import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import theme from '../../utils/theme'
import LatestBlogText from './latest-blog-text'

const Container = styled.div`
    width: 75%;
    // height: 350px;
    height: 250px;
    ${tw`min-w-full
    w-1/2 mb-4 px-2 flex-col`}
`

const FlexContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px;
    height: 100%;
    overflow: hidden;
    
    background: white;// ${theme.colors.trinary};
    color: black;
    border: rgba(0,0,0,0.3);
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // border-radius: 10px;
    border-radius: 0.25rem;
    // box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    // box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

    box-shadow: 15px 15px 20px 0px rgba(0,0,0,0.3);
    transition: .4s;

    &:hover {
        transform: scale(1.05, 1.05);
        box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.2), 
            -5px -5px 30px 15px rgba(0,0,0,0.2);
    }
`

const DefaultImage = styled.div`
    // height: 250px;
`

const DisplayImageContainer = styled.div.attrs(props => ({
    className: props.className,
}))`
    display: flex;
    width: 40%;
    overflow: hidden;
`

type DisplayImageProps = {
    image: any,
    className?: string
}
// @TODO: Responsiveify
const DisplayImage = styled(({ image, className }: DisplayImageProps) => {
    if (image) {
        return <Image
            fluid={image}
            className={className}
            imgStyle={{
                objectPosition: 'left center',
            }}/>
    }

    return <DefaultImage className={`${className} bg-gray-500`} />
})`
    display: flex;
    &:hover {
        .blog-image img {
            filter: contrast(100%);
        }
    }
`

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris urna, lobortis vitae nisi et, fermentum vehicula ante. Maecenas odio tellus, rutrum mollis pretium eu, dictum euismod risus. Cras vel bibendum turpis. Nam accumsan nisl leo, id egestas eros consequat eu. Quisque eget massa vel ligula imperdiet congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. CONSIDER 250-300 CHAR LIMIT'

type LatestBlogProps = {
    image?: any,
    title: string,
    description: string,
    date: string,
    blogId?: string
}

const LatestBlog: React.FC<LatestBlogProps> = ({ 
    image,
    title,
    description,
    date,
    blogId = '#'
}) => {

    return (
        <Container>
            {/* <Link to={`/${id}`}> */}
                <FlexContainer to={`/${blogId}`}>
                    <DisplayImageContainer>
                        <DisplayImage image={image} />
                    </DisplayImageContainer>
                    <LatestBlogText 
                        title={title}
                        description={description}
                        date={date}/>
                </FlexContainer>
            {/* </Link> */}
        </Container>
    )
}

export default LatestBlog