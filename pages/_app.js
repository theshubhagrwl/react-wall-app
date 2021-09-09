import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routerChangeStart", handleStart);
      router.events.off("routerChangeComplete", handleStop);
      router.events.off("routerChangeError", handleStop);
    };
  }, [router]);

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
