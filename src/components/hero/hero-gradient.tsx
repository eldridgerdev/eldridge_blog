import React from 'react'
import styled from 'styled-components'

const Gradient = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(196, 196, 196, 0) 100%);
`

const HeroGradient = () => (
    <Gradient />
)

export default HeroGradient