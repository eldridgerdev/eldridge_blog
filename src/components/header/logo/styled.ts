import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../utils/theme'

export const LogoArea = styled.div`
  color: ${theme.colors.secondary};
  height: 72px;
  overflow: hidden;
`

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: fit-content;
`
