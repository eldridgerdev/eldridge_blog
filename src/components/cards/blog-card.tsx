import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

import theme from '../../utils/theme'
import tw from 'twin.macro'

// @TODO: same as LatestBlogCard
export type BlogCardProps = {
    image?: any,
    title: string,
    description: string,
    date: string,
    blogId?: string,
    height?: string,
    makeLong?: boolean,
    full?: boolean
}

const DefaultImage = styled.div`
    ${tw`min-w-full sm:min-w-full md:min-w-0 lg:min-w-0 xl:min-w-0 min-h-full`}
`

const DisplayImage = tw(({ image, className = '' }: { image: any, className?: string }) => {
    // if (image) {
        return <Image
            fluid={image}
            className={className}
            
            imgStyle={{
                objectPosition: 'left center',
            }}
        />
    // }

    // return <DefaultImage className={`${className} bg-gray-500`} />
})`
    flex-auto min-w-0
`

type TextContainerProps = {
    height?: string
}

const TextContainer = styled.div`
    // ${(props: TextContainerProps) => props.height && `height: ${props.height};`}

    background-color: #FFFFFF;
    ${tw`min-w-0 lg:min-w-1/3`}
    
    & > h1 {
        ${tw`text-base lg:text-xl`}
    }

    & > p {
        ${tw`text-sm lg:text-base`}
    }

    & > h2 {
        ${tw`text-xs lg:text-sm`}
    }
    ${tw`
        p-5
        leading-tight
    `}
`

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    ${tw`font-bold mb-2`}
`

const Line = styled.hr`
    height: 0px;
    width: 90%;
    border-top: 1px solid ${theme.colors.secondary};
    align-self: center;
    ${tw`mt-2 mb-2`}
`

const Description = styled.p`
    font-weight: 400;
    line-height: 19px;
    font-family: 'Alegreya', serif;
    ${tw`text-gray-700 text-base`}
`

const Date = styled.h2`
    font-weight: normal;
`

const CardLink = styled(Link)<{ $makeLong: boolean, $height?: string }>`
    ${(props) => props.$height && `height: ${props.$height};`}
    display: flex;
    width: 100%;
    ${ ({ $makeLong }) => $makeLong ? `
        flex-direction: row;
    `: `
        flex-direction: column;
        // height: 75vh;
    `}

    // ${({ $makeLong }) => !$makeLong && tw`max-w-md`}

    & > img:hover {
        .blog-image {
            filter: contrast(100%);
        }
    }

    &:hover {
        transform: scale(1.05, 1.05);
        box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.2), 
            -5px -5px 30px 15px rgba(0,0,0,0.2);
    }
    transition: .4s;
    border: 1px solid rgba(0,0,0,0.2);
    margin: 0 auto;
    ${tw`rounded overflow-hidden shadow-lg`}
`

const ListItem = styled.li<{ $full: boolean }>`
    ${tw`w-full mb-4 px-2`}
    ${ (props) => !props.$full && tw`sm:w-full md:w-1/2`}
    display: flex;
    padding: 1rem;
`

// const Container = styled(({ children, $full }) => (
//     <ListItem $full={$full}>
//         {children}
//     </ListItem>
// ))`
//     display: flex;
//     padding: 1rem;
// `

const BlogCard = ({
    title, description, image, blogId, date, height, makeLong=false, full=false
}: BlogCardProps) => {
    if (!height) {
        makeLong ? height='45vh' : height='70vh'
    }

    return (
        <ListItem $full={full}>
            <CardLink $height={height} $makeLong={makeLong} to={`/${blogId}`}>
                {/* <div className='rounded overflow-hidden shadow-lg'> */}
                    <DisplayImage image={image} />
                    <TextContainer>
                        <Title>{title}</Title>
                        <Date>{date}</Date>
                        <Line />
                        <Description>{description}</Description>
                    </TextContainer>
                {/* </div> */}
            </CardLink>
        </ListItem>
    )
}

export default BlogCard