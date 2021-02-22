import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {movieShape} from "../../types";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = ({movie, onMouseOver, onMouseLeave}) => {
  const {id, name, previewImage, posterImage, videoLink} = movie;

  const [startPlayer, setStartPlayer] = useState(false);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={
        () => {
          onMouseOver(movie);
          setStartPlayer(true);
        }
      }
      onMouseLeave={
        () => {
          onMouseLeave();
          setStartPlayer(false);
        }}>
      <div className="small-movie-card__image">
        {startPlayer ?
          <VideoPlayer
            posterImage = {posterImage}
            videoLink = {videoLink}
            startPlayer = {startPlayer}
            setStartPlayer = {setStartPlayer}
          /> :
          <img src={previewImage} alt={name} width="280" height="175"/> }
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: movieShape,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default SmallMovieCard;
