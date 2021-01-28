import styled from 'styled-components'
import tw from 'twin.macro'

import theme from '../../utils/theme'

const Line = styled.hr`
  height: 0px;
  width: 90%;
  border-top: 1px solid ${theme.colors.secondary};
  align-self: center;
  ${tw`mt-2 mb-2`}
`

export default Line
