import styled from 'styled-components'
import tw from 'twin.macro'

export const CategoryListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  ${tw`
  auto-cols-auto
  container mx-auto justify-center mt-3
  list-none 
  `}
`

export const CategoryLabel = styled.h2`
  ${tw`mt-3 text-center`}
`
