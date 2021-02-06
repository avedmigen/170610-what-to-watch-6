import React from "react";
import PropTypes from "prop-types";

import {movieShape, objectPropType} from "../../types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import LogoHeader from "../logo-header/logo-header";
import LogoFooter from "../logo-footer/logo-footer";
import PlayButton from "../play-button/play-button";
import MyListButton from "../my-list-button/my-list-button";
import AddReviewButton from "../add-review-button/add-review-button";
import {findObjInArrayById} from "../../utils";

const MoviePageScreen = ({props, movies}) => {

  const films = movies;
  const id = parseInt(props.match.params.id, 10);
  const movie = findObjInArrayById(films, id);

  const {name, posterImage, backgroundImage, description, rating, scoresCount, director, starring, genre, released} = movie;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <LogoHeader />

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton id = {id} />
                <MyListButton />
                <AddReviewButton id = {id} />
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {starring.map((star) => `${star}`).join(`, `) } and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {films.map((film, i) => <SmallMovieCard key={film + i} movie={film} />)}
          </div>

        </section>

        <footer className="page-footer">
          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MoviePageScreen.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  props: objectPropType,
  match: objectPropType,
};

export default MoviePageScreen;
