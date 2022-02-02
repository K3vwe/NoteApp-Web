import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// import global style
import GlobalStyle from './components/GlobalStyle';

// import pages
import Pages from './pages';

// configure the API URI and Cacha
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

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
  resolvers: {},
  connectToDevTools: true
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
