import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>nextjs-component-template</title>
        <meta content="Applicatoin" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
