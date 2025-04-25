import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import ClientProviders from '../components/ClientProviders';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zypher - Zero-Knowledge Identity Verification</title>
        <meta name="description" content="Privacy-preserving identity verification using zero-knowledge proofs" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientProviders>
        <Component {...pageProps} />
      </ClientProviders>
    </>
  );
} 