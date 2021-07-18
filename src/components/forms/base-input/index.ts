import { css } from 'styled-components'
import tw from 'twin.macro'

import theme from '../../../utils/theme'

export default css`
  border-radius: 3px;
  border-color: ${theme.colors.main};
  color: ${theme.colors.main};
  ${tw`border py-2 px-3 text-black placeholder-gray-700 focus:ring-4`}
  --tw-ring-color: ${theme.colors.main};
  outline: none;
`
