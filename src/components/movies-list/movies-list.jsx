import React, {useState} from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieShape} from "../../types";
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {

  const [activeMovieId, setActiveMovieId] = useState({});

  const handleOnMouseOver = (evt, movie) => {
    evt.preventDefault();
    setActiveMovieId(Object.assign(activeMovieId, movie));
  };

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, i) =>
        <SmallMovieCard
          key={movie + i}
          movie={movie}
          onMouseOver={handleOnMouseOver}
        />)}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape)
};

export default MoviesList;
