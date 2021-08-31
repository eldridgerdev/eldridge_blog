import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../../utils/theme'

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
export const LatestText = styled.li`
  // color: ${theme.colors.trinary};
  color: ${theme.colors.selectedHeader};
  font-weight: 400;
  line-height: 49px;
  font-size: 36px;
  align-self: center;
  ${tw`flex mx-auto mt-3 text-3xl sm:text-3xl md:text-4xl`}
`

export const ListItem = styled.li`
  ${tw`w-full sm:w-full md:w-1/2`}
`
