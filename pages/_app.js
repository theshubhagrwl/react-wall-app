import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Awesome Wallpapers</title>
        <link rel="icon" href="/image.svg" />
      </Head>
      <Navbar /> <Component {...pageProps} />
    </>
  );
};

export default MyApp;
