import React from "react";
import "./App.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default function WallCard(props) {
  return (
    <div
      className="container"
      style={{ textAlign: "center", minHeight: "100vh" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="display-3 mx-auto px-auto ">Wallpapers</h1>
        <p style={{ textAlign: "center" }}>Get Latest & Cool Walls</p>
      </div>
      <br />

      {props.data.map((item) =>
        item.map((i) => {
          return (
            <div key={i.id}>
              <CardDeck>
                <Card>
                  <CardImg top src={i.url} alt={i.title} />
                  <CardBody>
                    <CardTitle>{i.title}</CardTitle>
                    <CardSubtitle>{i.author}</CardSubtitle>
                    <a href={i.url}>
                      <Button color="primary">
                        Click To View Full Size Image
                      </Button>
                    </a>
                  </CardBody>
                </Card>
              </CardDeck>
              <br />
              <br />
            </div>
          );
        })
      )}
    </div>
  );
}
