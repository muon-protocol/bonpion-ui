import { ApolloClient, InMemoryCache } from '@apollo/client';

export const aliceClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/rastegarishirazu/muon-nft',
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});