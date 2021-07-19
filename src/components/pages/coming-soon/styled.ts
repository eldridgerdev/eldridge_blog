import { Link } from 'gatsby'
import tw from 'twin.macro'
import styled from 'styled-components'

export const HomeButton = styled(Link)`
  ${tw`bg-white hover:bg-gray-100 mt-4
    font-semibold py-3 px-5 border border-gray-400 rounded shadow`}
`

export const HomeText = styled.span`
  font-size: 48px;
  line-height: 65px;
  display: flex;
  align-items: center;
  text-align: center;
`
