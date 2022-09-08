import Head from "next/head";
import { Body } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Body />
    </div>
  );
}
