import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My top - наш лучший топ</title>
      <link key={1} rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
