import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddReviewButton = ({id}) => (
  <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
);

AddReviewButton.propTypes = {
  id: PropTypes.string,
};

export default AddReviewButton;
