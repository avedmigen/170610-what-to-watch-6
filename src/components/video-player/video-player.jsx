import React, {useEffect, createRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({posterImage, videoLink, startPlayer, setStartPlayer}) => {

  const videoRef = createRef();

  let timer = null;

  useEffect(() => {
    if (startPlayer) {
      timer = setTimeout(() => {
        videoRef.current.play();
      }, 1000);
    }

    return () => {
      setStartPlayer(false);
      timer = clearTimeout(timer);
    };
  }, [startPlayer]);

  return (
    <video src={videoLink} ref={videoRef} width={280} height={175} poster={posterImage} muted/>
  );
};

VideoPlayer.propTypes = {
  posterImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  startPlayer: PropTypes.bool.isRequired,
  setStartPlayer: PropTypes.func.isRequired,
};

export default VideoPlayer;
