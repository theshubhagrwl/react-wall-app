import Head from "next/head";
import { render } from "react-dom";
// import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Wallpaper App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello This is a Wallpaper App </h1>
      </main>
    </div>
  );
}
