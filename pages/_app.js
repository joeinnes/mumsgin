import Head from "next/head";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

import "../styles/globals.css";

const fonts = {
  body: "'Work Sans', sans-serif",
  heading: "'Playfair Display', sans-serif",
  mono: "'My Monospaced Font', monospace",
};

const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <title>A Year Of Gin</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
