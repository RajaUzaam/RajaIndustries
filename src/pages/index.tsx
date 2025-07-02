import Header from "./basePages/Header";
import Head from 'next/head'
import Footer from "./basePages/Footer"
import Base from "./basePages/Home";

export default function Home() {
  return (
    <>
    <Head>
      <title>Raja Industries</title>
      <meta name="description" content="Welcome to Raja Industries!" />
    </Head>
    <Header />
    <Base />
    <Footer />
    </>
  );
}
