import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch'

console.log(process.env.REACT_APP_BACKEND_URL);
console.log(process.env.GATSBY_REACT_APP_BACKEND_URL);
console.log(process.env.GATSBY_API_URL);
console.log(process.env.API_URL);

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.GATSBY_API_URL}/graphql`,
        fetch,
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
})

export default client;