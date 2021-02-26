import React, {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {movieShape} from "../../types";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = ({movie}) => {
  const {id, name, previewImage, videoLink} = movie;

  const [isPlayerStarted, setPlayerStarted] = useState(false);

  const togglePlayerStarted = () => setPlayerStarted(!isPlayerStarted);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={ togglePlayerStarted }
      onMouseLeave={ togglePlayerStarted }>

      <div className="small-movie-card__image">
        {isPlayerStarted ?
          <VideoPlayer
            previewImage= {previewImage}
            videoLink = {videoLink}
            startPlayer = {isPlayerStarted}
            setStartPlayer = {setPlayerStarted}
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
