import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

import Line from '../line';
import Text from '../text'
import theme from '../../utils/theme'

const SectionLine = styled(Line)`
    border-top: 2px solid ${theme.colors.main};
`

// @TODO: This isn't just for blogs
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 50px 0px;
    width: 50%;
    ${tw`w-full md:w-1/2`}
`

const Section: React.FC<{ text: string, title: string }> = ({ text, title }) => (
    <Container>
        <Text>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </Text>

        <br />
        <SectionLine />
        {/* <Text dangerouslySetInnerHTML={{ __html: text }} /> */}
    </Container>
)

export default Section