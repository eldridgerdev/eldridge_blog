import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch'

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.GATSBY_REACT_APP_BACKEND_URL}/graphql`,
        fetch,
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
})

export default client;