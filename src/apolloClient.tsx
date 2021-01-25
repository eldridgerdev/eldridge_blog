import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch'

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.API_URL || "http://localhost:1337"}/graphql`,
        fetch,
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
})

export default client;