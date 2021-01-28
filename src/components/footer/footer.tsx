import React from 'react'
import styled from 'styled-components'

import theme from '../../utils/theme'

const FooterStyle = styled.footer`
  width: 100%;
  height: 25px;
  background-color: ${theme.colors.main};
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
`

const Footer = (): JSX.Element => (
  <FooterStyle>©2020, Ryan Eldridge</FooterStyle>
)

export default Footer
