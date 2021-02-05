import PropTypes from "prop-types";

export const movieShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
});
