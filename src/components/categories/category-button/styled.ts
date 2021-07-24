import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../../utils/theme'
import { CategoryButtonLinkProps } from './types'

//   background-color: ${theme.colors.light};
export const ListItem = styled.li``

export const CategoryButtonLink = styled.a<CategoryButtonLinkProps>`
  border-color: ${theme.colors.main};
  ${props =>
    `color: ${
      props.$selected ? theme.colors.selectedHeader : theme.colors.secondary
    };`}
  ${tw`
      transition-all duration-500
      self-center block mr-0
      py-2 px-4 w-full
      font-bold text-base cursor-pointer capitalize text-center
      border-b-4 hover:border-b-8
  `};
  &:hover {
    color: ${theme.colors.selectedHeader};
    margin: -2px;
  }
`
