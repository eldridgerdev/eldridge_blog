import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

// @TODO: This isn't just for blogs
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 50px 0px;
    width: 50%;
`

const Text = styled.div`
    color: #000000;
    font-family: 'raleway', serif;
    font-weight: 400;

    ${tw`leading-tight text-base md:text-xl`}

    & > h1 {
        // font-family: 'alegreya', serif;
        font-weight: bold;
        // text-transform: capitalize;
        ${tw`leading-loose text-3xl md:text-4xl`}
    }

    & > h2 {
        ${tw`leading-loose text-3xl md:text-4xl`}
    }

    & > h3 {
        ${tw`leading-loose text-2xl md:text-3xl`}
    }

    & > h4 {
        ${tw`leading-loose text-xl md:text-2xl`}
    }

    & > h5 {
        ${tw`leading-loose text-xl md:text-xl`}
    }

    & .image-style-align-center {
        margin: 0 auto;
    }

    & figcaption {
        ${tw`text-xs text-center`}
    }

    & ul {
        list-style: disc;
        padding-left: 40px;
        margin-top: 20px;
    }

    & ol {
        list-style: decimal;
        padding-left: 40px;
        margin-top: 20px;
    }
`

const Section: React.FC<{ text: string, title: string }> = ({ text, title }) => (
    <Container>
        <Text>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </Text>
        {/* <Text dangerouslySetInnerHTML={{ __html: text }} /> */}
    </Container>
)

export default Section