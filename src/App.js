import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GlobalStyle from './components/GlobalStyle';
import Pages from './pages';

const client = new ApolloClient({
  uri: process.env.API_URI,
  cache: new InMemoryCache(),
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
