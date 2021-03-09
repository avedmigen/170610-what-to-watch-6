import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {movieShape, withRouterHistoryShape} from "../../types";
import {findObjInArrayById} from "../../utils";
import {useParams} from "react-router-dom";

const PlayerScreen = ({promo, movies}) => {

  const {id} = useParams();
  const movie = findObjInArrayById(movies, Number(id));

  const getMovieName = () => Number(id) === promo.id ? promo.name : movie.name;
  const getVideoLink = () => Number(id) === promo.id ? promo.videoLink : movie.videoLink;

  return (
    <div className="player">
      <video src={getVideoLink()} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{ getMovieName() }</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  props: PropTypes.objectOf(withRouterHistoryShape),
  promo: movieShape,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {PlayerScreen};
export default connect(mapStateToProps, null)(PlayerScreen);

