import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ApolloProvider } from '@apollo/client';
import { client } from '@libs/client/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((response) => response.json()) }}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SWRConfig>
  );
}

export default MyApp;
