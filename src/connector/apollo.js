import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch'


const client = new ApolloClient({
  link: new HttpLink({
    fetch: fetch,
    uri: 'https://api.graphcms.com/simple/v1/escPandaMattressTesting',
  }),
  cache: new InMemoryCache(),
})

export default client;