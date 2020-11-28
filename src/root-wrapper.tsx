import React from 'react'
import GlobalStyle from './global-style'

export const wrapRootElement = ({ element }: { element: React.Component}) => (
    <>
      <GlobalStyle />
      {element}
      {/* <Layout>{element}</Layout> */}
    </>
  )