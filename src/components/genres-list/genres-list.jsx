import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {movieShape} from "../../types";
import {ActionCreator} from "../../store/actions/action";
import Genre from "../genre/genre";
import {getUniqueGenres} from "../../utils";

const GenresList = ({movies, genre, onSelectGenre}) => {
  const uniqueGenres = getUniqueGenres(movies);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((title) => <Genre title={title} key={title} isActive={title === genre} onSelectGenre={onSelectGenre} />)}
    </ul>
  );
};

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(movieShape),
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(genre) {
    dispatch(ActionCreator.selectGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
