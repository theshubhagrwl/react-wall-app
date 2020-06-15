import React, { useState, useEffect } from "react";
import WallCard from "./WallCard";
import { Container } from "reactstrap";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.reddit.com/r/wallpapers.json?&limit=20").then((res) =>
      res.json().then((response) => {
        let newArr = [];
        // console.log(response.data.children);
        response.data.children.map((item) => {
          // const parent_img = item.data.preview.images[0].resolutions[4].url;
          // console.log(parent_img.replace("amp;", "s"));
          // console.log(parent_img);
          // parent_img.map((img) => console.log(parent_img));
          newArr.push({
            id: item.data.id,
            title: item.data.title,
            thumbnail: item.data.thumbnail,
            url: item.data.url,
            author: item.data.author,
          });
          // parent_img.map((img) => console.log(img.resolutions[4]));
        });
        setData([newArr]);
      })
    );
  }, []);
  return (
    <div>
      <WallCard data={data} />
      <Container
        fluid
        tag="footer"
        className="text-center bg-info dixed-bottom p-3"
      >
        <p className="love">
          Made with ❤ by{" "}
          <a
            href="https://www.instagram.com/theshubhagrwl/"
            target="_blank"
            className="text-white"
          >
            Shubh
          </a>
        </p>
      </Container>
    </div>
  );
}
