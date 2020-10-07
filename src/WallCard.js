import React from "react";
import "./App.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";

export default function WallCard(props) {
  return (
    <div
      className="container"
      style={{ textAlign: "center", minHeight: "100vh" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1 id="title" className="display-3 mx-auto px-auto ">Wallpapers</h1>
        <p style={{ textAlign: "center" }}>Get Latest & Cool Walls</p>
      </div>
      <br />
      <Row>
        {props.data.map((item) =>
          item.map((i) => {
            return (
              <Col
                key={i.id}
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ minWidth: "200px" }}
              >
                <div>
                  <CardDeck>
                    <Card>
                      <CardImg
                        top
                        src={i.small_img}
                        alt={i.title}
                        style={{ height: "auto" }}
                      />
                      <CardBody>
                        <CardTitle>{i.title}</CardTitle>
                        <CardSubtitle>{i.author}</CardSubtitle>
                        <a href={i.url} target="blank">
                          <Button color="primary" className="m-3 p-2">
                            Click To View Full Size Image
                          </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </CardDeck>
                  <br />
                  <br />
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
}
