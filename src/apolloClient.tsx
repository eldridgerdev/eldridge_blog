import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch'

console.log(process.env.REACT_APP_BACKEND_URL);

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
        fetch,
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
})

export default client;