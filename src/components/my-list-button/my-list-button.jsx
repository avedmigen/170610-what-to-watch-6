import React from "react";
import {Link} from "react-router-dom";

const MyListButton = () => (
  <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
    <span>My list</span>
  </Link>
);

export default MyListButton;
