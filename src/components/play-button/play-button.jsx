import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PlayButton = ({id}) => (

  <Link to={`/player/${id}`} className="btn btn--play movie-card__button" type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Link>

);

PlayButton.propTypes = {
  id: PropTypes.number,
};

export default PlayButton;
