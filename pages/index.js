import Head from "next/head";
import { render } from "react-dom";
import Navbar from "../components/Navbar";
import Walls from "../components/Walls";
import axios from "axios";

export default function Home({ allData }) {
  return (
    <div>
      <Head>
        <title> Wallpaper App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Walls walls={allData} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://www.reddit.com/r/wallpapers/${""}.json?&limit=25&raw_json=1`
  );
  const data = await res.data;
  var allData = [];
  data.data.children.map((item) => {
    try {
      const parent_img = item.data.preview.images[0].resolutions[3].url;
      allData.push({
        id: item.data.id,
        title: item.data.title,
        url: item.data.url,
        author: item.data.author,
        small_img: parent_img,
        ups: item.data.ups,
        permalink: item.data.permalink,
      });
    } catch (e) {
      console.log(e);
    }
  });

  return {
    props: {
      allData,
    },
  };
}
