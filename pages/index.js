import Head from "next/head";
import { render } from "react-dom";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Walls from "../components/Walls";
import axios from "axios";

export default function Home({ data }) {
  var walls = data.data.children;
  return (
    <div>
      <Head>
        <title> Wallpaper App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Walls walls={walls} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1`
  );
  const data = await res.data;

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
