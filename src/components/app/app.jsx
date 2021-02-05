import React from "react";
import PropTypes from "prop-types";

import MainScreen from "../main-screen/main-screen";
import {movieShape} from "../../types";

const App = ({promo, movies}) => (
  <MainScreen
    promo = {promo}
    movies = {movies} />
);

App.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  promo: movieShape,
};

export default App;
