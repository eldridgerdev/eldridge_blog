import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

import theme from '../../utils/theme'
import tw from 'twin.macro'

type BlogCardProps = {
    title: string,
    img?: any,
    id: string,
    date: string,
    desc: string
}

const Container = styled(({ children }) => (
    <li className='
        min-w-full sm:min-w-full md:min-w-0 lg:min-w-0 xl:min-w-0
        w-1/2 mb-4 px-2
    '>
        {children}
    </li>
))`
    // background-color: ${theme.colors.light}
    display: flex;
    padding: 1rem;
    @media(min-width: 40rem) {
      width: 50%;
    }
    @media(min-width: 56rem) {
      width: 33.3333%;
    }
`

const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    height: 450px;
    // padding: 1rem;
    // @media(min-width: 40rem) {
    //     width: 50%;
    // }
    // @media(min-width: 56rem) {
    //     width: 33.3333%;
    // }
    &:hover {
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
    border: rgba(0,0,0,0.3);
    ${tw`rounded overflow-hidden shadow-lg max-w-md`}

`

const DefaultImage = styled.div`
    ${tw`min-w-full sm:min-w-full md:min-w-0 lg:min-w-0 xl:min-w-0 min-h-full`}
`

const Content = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
    ${tw`px-6 py-4`}
`

const DisplayImage = ({ image, className = '' }: { image: any, className?: string }) => {
    // if (image) {
        return <Image fluid={image} className={`${className}`} backgroundColor={true} />
    // }

    // return <DefaultImage className={`${className} bg-gray-500`} />
}

const TextContainer = styled.div`
    line-height: 15px;
    ${tw`p-5`}
`

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    ${tw`font-bold text-xl mb-2`}
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
    font-size: 20px;
    line-height: 19px;
    font-family: 'Alegreya', serif;
    ${tw`text-gray-700 text-base`}
`

const Date = styled.h2`
    font-weight: normal;
    font-size: 18px;
`

const BlogCard = ({ title, desc, img, id, date }: BlogCardProps) => (
    <Container>
        <CardLink to={`/${id}`}>
            {/* <div className='rounded overflow-hidden shadow-lg'> */}
                <DisplayImage image={img} />
                <TextContainer>
                    <Title>{title}</Title>
                    <Date>{date}</Date>
                    <Line />
                    <Description>{desc}</Description>
                </TextContainer>
            {/* </div> */}
        </CardLink>
    </Container>
)

export default BlogCard