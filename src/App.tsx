import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {TodoPage} from './pages/TodoPage'



const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}> 
   
      <TodoPage/>
 
    </ApolloProvider>
  );
}

export default App;
