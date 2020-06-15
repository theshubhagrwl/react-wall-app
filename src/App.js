import React, { useState, useEffect } from "react";
import WallCard from "./WallCard";
import { Container } from "reactstrap";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.reddit.com/r/wallpapers.json?&limit=25&raw_json=1").then(
      (res) =>
        res.json().then((response) => {
          let newArr = [];
          response.data.children.map((item) => {
            try {
              const parent_img = item.data.preview.images[0].resolutions[3].url;
              newArr.push({
                id: item.data.id,
                title: item.data.title,
                thumbnail: item.data.thumbnail,
                url: item.data.url,
                author: item.data.author,
                small_img: parent_img,
              });
            } catch (e) {
              console.log(e);
            }
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
