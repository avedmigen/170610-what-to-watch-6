import React, {useEffect, createRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({previewImage, videoLink, startPlayer, setStartPlayer}) => {

  const TIMEOUT = 1000;

  const videoRef = createRef();

  let timer = null;

  useEffect(() => {
    if (startPlayer) {
      timer = setTimeout(() => {
        videoRef.current.play();
      }, TIMEOUT);
    }

    return () => {
      setStartPlayer(false);
      timer = clearTimeout(timer);
    };
  }, [startPlayer]);

  return (
    <video src={videoLink} ref={videoRef} width={280} height={175} poster={previewImage} muted/>
  );
};

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  startPlayer: PropTypes.bool.isRequired,
  setStartPlayer: PropTypes.func.isRequired,
};

export default VideoPlayer;
