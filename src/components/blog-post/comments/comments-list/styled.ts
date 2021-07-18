import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../../../utils/theme'
import Text from '../../../text'

export const Container = styled(Text)`
  ${tw`rounded w-full md:w-1/2`}// background-color: ${theme.colors.secondary};
    // border: 1px solid ${theme.colors.main};
`
