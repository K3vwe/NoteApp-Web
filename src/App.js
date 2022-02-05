import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient,
  ApolloProvider, 
  createHttpLink,
  gql
 } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// import customized cache
import { cache } from './cache' ;

// import global style
import GlobalStyle from './components/GlobalStyle';

// import pages
import Pages from './pages';

// isLoggedIn will be used to track if a user has an active session
const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

// configure the API URI and Cacha
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });

// check for a token and return theheader to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  // resolvers allows GraphQL queries on local cache
  resolvers: {},
  connectToDevTools: true,
  typeDefs
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={ client }>
        <GlobalStyle />
        <Pages />
      </ApolloProvider>
    </div>
  );
}

export default App;
