import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../utils/theme'

export const Nav = styled.header`
  background-color: ${theme.colors.light};

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  border-bottom: ${theme.colors.main};
  border-bottom-width: thick;
  border-style: solid;
`

export const EmptyDiv = styled.div`
  ${tw`flex sm:flex md:hidden lg:hidden xl:hidden`}
`

export const NavButton = styled.a`
  color: ${theme.colors.secondary};
  &:hover {
    color: ${theme.colors.selectedHeader};
  }
  margin-right: 50px;
  ${tw`
        self-center
        font-semibold block text-lg
        mr-0 md:mr-10
    `}
`

export const TitleSpan = styled.span`
  ${tw`font-semibold text-xl tracking-tight`};
`
