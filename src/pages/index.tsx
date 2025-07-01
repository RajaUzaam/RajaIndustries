import Header from "../components/Header";
import Head from 'next/head'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    <Head>
      <title>Raja Industries</title>
      <meta name="description" content="Welcome to Raja Industries!" />
    </Head>
    <Header />
    <Footer />
    </>
  );
}
