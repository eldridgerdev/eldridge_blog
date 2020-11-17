import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../utils/theme'

const TextContainer = styled.div`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 0px 0px 10px;

    position: static;
    width: 60%;
    height: 100%;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    align-self: flex-start;
    flex-grow: 0;
    margin: 1px 0px;

    color: ${theme.colors.secondary};
    font-size: 24px;
    // line-height: 20px;

    ${tw`p-4 leading-tight`};
`

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    ${tw`text-base sm:text-base md:text-2xl`}
`

const PostDate = styled.h3`
    font-weight: normal;
    ${tw`text-base sm:text-base md:text-2xl`}
`

const Line = styled.hr`
    height: 0px;
    width: 90%;
    border-top: 1px solid ${theme.colors.secondary};
    align-self: center;
    ${tw`mt-2 mb-2`}
`

const Description = styled.div`
    font-weight: 400;
    // font-size: 20px;
    // line-height: 19px;
    font-family: 'Alegreya', serif;
    ${tw`text-sm sm:text-sm md:text-base`}
`

type LatestBlogTextProps = {
    title: string,
    description: string,
    date: string
}

const LatestBlogText: React.FC<LatestBlogTextProps> = ({ title, description, date }) => (
    <TextContainer>
        <Title>{title}</Title>
        <PostDate>{date}</PostDate>
        <Line />
        <Description>{description}</Description>
        <Line />
    </TextContainer>
)

export default LatestBlogText