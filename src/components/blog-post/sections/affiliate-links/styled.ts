import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../../../utils/theme'

export const AffiliateLinkContainer = styled.div`
  background-color: ${theme.colors.light};
  & ul {
    ${tw`flex flex-wrap justify-evenly w-full`}
  }
  & li {
    ${tw`flex`}
  }

  & p {
    ${tw`text-sm md:text-sm text-center`}
  }

  ${tw`flex-auto min-w-0 p-2 my-3`}
`

export const AffiliateLinkRow = styled.div`
  ${tw`flex justify-center my-1`}
`
