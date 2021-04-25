import React from "react";
import Walls from "../components/Walls";
import axios from "axios";

const hotwalls = ({ allData }) => {
  return (
    <>
      <Walls walls={allData} />
    </>
  );
};

export default hotwalls;

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://www.reddit.com/r/wallpaper/hot.json?&limit=30&raw_json=1"
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
