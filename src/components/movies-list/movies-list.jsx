import React from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieShape} from "../../types";
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, id) =>
        <SmallMovieCard
          key={id}
          movie={movie}
        />)}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape)
};

export default MoviesList;
