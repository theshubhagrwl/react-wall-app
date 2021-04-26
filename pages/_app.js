import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Awesome Wallpapers</title>
        <link rel="icon" href="/image.svg" />
      </Head>
      <Navbar /> <Component {...pageProps} /> <Footer />
    </>
  );
};

export default MyApp;
