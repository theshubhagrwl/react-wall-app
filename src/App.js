import React, { useEffect } from "react";
import { connect } from "react-redux";
import WallCard from "./WallCard";
import { Container } from "reactstrap";
import * as actions from "./store/actions/image/";

const App = (props) => {
  useEffect(() => {
    if (!props.loading) {
      // Fetching the images
      props.fetchImages();
    }
  }, []);

  return (
    <div>
      <WallCard />
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

const mapStateToProps = (state) => {
  return {
    loading: state.image.loading,
    error: state.image.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(actions.fetchImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);