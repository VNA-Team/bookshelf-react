import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { concatPagination } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SCHEMA_PATH,
});
const authLink = setContext((request, previousContext) => {
  const token = localStorage.getItem('token');
  const authHeader = token ? `Bearer ${token}` : undefined;

  return { headers: { authorization: authHeader } };
});

const apolloClient = new ApolloClient({
  ssrMode: false,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getBooks: concatPagination(),
          getListItems: concatPagination(),
        },
      },
    },
  }),
});

export { apolloClient };
