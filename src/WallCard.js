import React, { useCallback, useRef } from "react";

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
  Spinner
} from "reactstrap";

import { connect } from "react-redux";
import * as actions from "./store/actions/image/";

const WallCard = (props) => {

  const observer = useRef();
  const lastElement = useCallback(node => {
    // If we are loading, don't run the funtion
    if (props.loading) return
    // If we have an observer, just disconnect it.
    // so that we can connect it to a new one.
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        props.fetchImages(props.images.after)
      }
    })
    if (node) observer.current.observe(node)
  }, [props.loading])

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
      <Row>
        {props.images.data.map((item) =>
          item.map((i, index) => {
            return (
              <Col
                key={i.id}
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ minWidth: "200px" }}
              >
                <div
                  // If the element is the last one, attach the callback function
                  ref={item.length === index + 1 ? lastElement : null}>
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
                        <a href={i.url} target="_blank">
                          <Button color="primary" className="m-3 p-2">
                            Click To View Full Size Image
                          </Button>
                        </a>
                        <div className="dropdown">
                          <button className="btn btn-danger dropdown-toggle" 
                          type="button" id="dropdownMenuButton" 
                          data-toggle="dropdown" 
                          aria-haspopup="true" 
                          aria-expanded="false">
                            resolutions
                          </button>
                          
                          {/* dropdown menu for different resolutions */}
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {i.res.map((item, index) => (
                              <a className="dropdown-item" key={index} href={item.url}>{item.width + 'x' + item.height}</a>
                              )
                            )}
                          </div>
                        </div>
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
      {props.loading ? <Spinner animation="border" role="status" className="m-5">
        <span className="sr-only">Loading...</span>
      </Spinner> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.image.loading,
    images: state.image.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: (after) => dispatch(actions.fetchImages(after)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WallCard);