import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {movieShape, withRouterHistoryShape} from "../../types";
import LogoHeader from "../logo-header/logo-header";
import {findObjInArrayById, convertDashedToCamelCase} from "../../utils";

const AddReviewScreen = ({movies}) => {

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    reviewText: ``,
  });

  const handleSubmit = () => {
    /*    console.log(`Form Submitted`);*/
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [convertDashedToCamelCase(name)]: value});
  };

  const {id} = useParams();
  const movie = findObjInArrayById(movies, Number(id));

  const {name, posterImage, backgroundImage} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoHeader />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={handleSubmit} onChange={handleFieldChange} action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReviewScreen.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  props: PropTypes.objectOf(withRouterHistoryShape),
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {AddReviewScreen};
export default connect(mapStateToProps, null)(AddReviewScreen);

