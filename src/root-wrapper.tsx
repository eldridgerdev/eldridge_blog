import React from 'react'
import { ApolloProvider } from '@apollo/client'

import GlobalStyle from './global-style'
import client from './apolloClient'


export const wrapRootElement = ({ element }: { element: React.Component}) => (
    <ApolloProvider client={client}>
      <GlobalStyle />
      {element}
      {/* <Layout>{element}</Layout> */}
    </ApolloProvider>
  )