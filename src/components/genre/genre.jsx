import React from "react";
import PropTypes from "prop-types";

const Genre = ({title, onSelectGenre, isActive}) => {

  return (
    <li className=
      {isActive
        ? (`catalog__genres-item catalog__genres-item--active`)
        : `catalog__genres-item`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          onSelectGenre(title);
        }}>
        {title}
      </a>
    </li>
  );
};

Genre.propTypes = {
  title: PropTypes.string.isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Genre;
