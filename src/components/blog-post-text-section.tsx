import React from 'react'
import styled from 'styled-components';

// @TODO: responsive width
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 0px;
    width: 715px;
`

const Text = styled.div`
    color: #000000;
    line-height: 24px;
    font-size: 18px;
    font-family: 'Alegreya', serif;
    font-weight: 400;
`

const Section: React.FC<{ text: string }> = ({ text }) => (
    <Container>
        <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
)

export default Section