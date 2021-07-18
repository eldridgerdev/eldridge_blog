import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  ${tw`mt-4 container`}
`

// react-media isn't SSR friendly, CSS is.
export const extraCSS = `
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        height: 12em;
    }
`
export const extraCardCSS = `
    @media screen and (min-width: 1024px) { 
        @media (min-width: 1024px) {
            width: 40%;
        }
    }
`
