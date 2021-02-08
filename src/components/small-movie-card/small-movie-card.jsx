import React from "react";

import {movieShape} from "../../types";
import {Link} from "react-router-dom";

const SmallMovieCard = ({movie}) => {
  const {id, name, previewImage} = movie;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage}
          alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: movieShape,
};

export default SmallMovieCard;
