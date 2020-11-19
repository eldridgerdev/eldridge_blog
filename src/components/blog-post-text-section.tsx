import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

// @TODO: This isn't just for blogs
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 50px 0px;
    width: 75%;
`

const Text = styled.div`
    color: #000000;
    font-family: 'Alegreya', serif;
    font-weight: 400;

    ${tw`leading-tight text-base`}

    & > h2 {
        ${tw`leading-loose text-2xl md:text-4xl`}
    }

    & > h3 {
        ${tw`leading-loose text-xl md:text-3xl`}
    }

    & > h4 {
        ${tw`leading-loose text-base md:text-2xl`}
    }

    & > h5 {
        ${tw`leading-loose text-sm md:text-xl`}
    }
`

const Section: React.FC<{ text: string }> = ({ text }) => (
    <Container>
        <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
)

export default Section