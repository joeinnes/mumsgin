import Head from "next/head";
import { Text } from "@chakra-ui/react";

import GinPanel from "../components/GinPanel";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home({ gins = [], preview = false }) {
  return (
    <>
      <Head>
        <title>A Year Of Gin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout hero={Hero}>
        <Menu items={gins} preview={preview} />
        {gins.map((gin, index) => (
          <GinPanel gin={gin} index={index} key={index} preview={preview} />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  try {
    const fetchedGins = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/mumsgin`
    );
    const { data: gins } = await fetchedGins.json();
    gins.sort(
      (ginA, ginB) =>
        new Date(ginA.display_after) - new Date(ginB.display_after)
    );
    return {
      props: {
        gins,
        preview,
      },
      revalidate: 30,
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        gins: [],
        preview,
      },
      revalidate: 30,
    };
  }
}
