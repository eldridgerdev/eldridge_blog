import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import theme from '../../../utils/theme'
import { TextContainerProps, CardLinkProps, ListItemProps } from './types'

export const TextContainer = styled.div<TextContainerProps>`
  background-color: #ffffff;
  ${tw`min-w-0 lg:min-w-1/3`}
  ${(props: TextContainerProps) => props.$extraCSS && props.$extraCSS}
  
& h1 {
    ${tw`text-base lg:text-xl`}
  }

  & p {
    ${tw`text-sm lg:text-base`}
  }

  & h2 {
    ${tw`text-xs lg:text-sm`}
  }

  ${tw`p-5 leading-tight`}
`

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  ${tw`font-bold mb-2`}
`

export const Description = styled.p`
  font-weight: 400;
  line-height: 19px;
  font-family: 'Alegreya', serif;
  ${tw`text-gray-700 text-base`}
`

export const Date = styled.h2`
  font-weight: normal;
`

export const PostNumber = styled.div`
  height: 40px;
  width: 40px;
  float: right;
  border-radius: 50%;
  border: 3px solid ${theme.colors.main};
  justify-content: center;

  display: flex;
  & > h1 {
    display: flex;
    align-self: center;
  }
`

export const CardLink = styled(Link)<CardLinkProps>`
  ${(props: CardLinkProps) => props.$height && `height: ${props.$height};`}
  display: flex;
  width: 100%;

  & > img:hover {
    .blog-image {
      filter: contrast(100%);
    }
  }

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.2),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.2);
  }
  transition: 0.4s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  ${tw`flex-col rounded overflow-hidden shadow-lg`}
  ${(props: CardLinkProps) => props.$extraCSS}
`

export const ListItem = styled.li<ListItemProps>`
  ${tw`w-full mb-4 px-2`}
  ${props => !props.$full && tw`sm:w-full md:w-1/2`}
  display: flex;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    height: 100%;
  }

  &.card-enter {
    opacity: 0;
  }
  &.card-enter-active {
    opacity: 1;
    transition: opacity 800ms ease-in;
  }
  &.card-exit {
    opacity: 1;
  }
  &.card-exit-active {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
`
