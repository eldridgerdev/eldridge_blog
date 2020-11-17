import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../utils/theme';

const Container = styled.div`
    background-color: ${theme.colors.main};
    ${tw`flex items-center flex-wrap p-1`}
`

const SubscribeContainer = styled.div`
    ${tw`flex items-center justify-between`}
    margin: auto;
`
const Text = styled.span`
    color: ${theme.colors.light};
    text-decoration: none;
`

const InputField = styled.input`

`

const Submit = styled.button`
    background-color: ${theme.colors.light}
`

const HeroNotif = () => {
    return (
        <Container>
            <SubscribeContainer>
                <Text>Enter your email to get notifications for new posts!</Text>
                <InputField />
                <Submit>Submit</Submit>
            </SubscribeContainer>
        </Container>
    )
}

export default HeroNotif