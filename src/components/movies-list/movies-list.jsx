import React, {useState} from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {movieShape} from "../../types";
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {

  const [, setActiveMovie] = useState(false);

  const handleOnMouseEnter = (evt, movie) => {
    setActiveMovie(movie);
  };

  const handleОnMouseLeave = () => {
    setActiveMovie(false);
  };

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, id) =>
        <SmallMovieCard
          key={id}
          movie={movie}
          onMouseOver={handleOnMouseEnter}
          onMouseLeave={handleОnMouseLeave}
        />)}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape)
};

export default MoviesList;
