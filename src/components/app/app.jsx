import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";

const App = ({promo, movies}) => {
  return (
    <>
      <MainScreen
        promo = {promo}
        movies = {movies} />
    </>
  );
};

App.propTypes = {
  movies: PropTypes.array,
  promo: PropTypes.object,
};

export default App;
