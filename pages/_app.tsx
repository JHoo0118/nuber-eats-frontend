import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4000/graphql';
  return (
    <SWRConfig value={{ fetcher: () => fetch(BASE_URL).then((response) => response.json()) }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
