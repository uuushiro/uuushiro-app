import React from 'react'
import { AppProps } from 'next/app'; // 型定義を追加
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

// Functional Componentに書き直して型定義を追加
// コンポーネント名をMyAppからAppに変更
const App = ({Component, pageProps}: AppProps) => {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
}

const client = new ApolloClient({
  uri: 'http://localhost:3300/graphql',
  cache: new InMemoryCache()
});

export default App