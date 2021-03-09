import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {movieShape} from "../../types";
import {getFilteredMoviesByGenre} from "../../utils";

import PlayButton from "../play-button/play-button";
import MyListButton from "../my-list-button/my-list-button";
import MoviesList from "../movies-list/movies-list";
import GenreList from "../genres-list/genres-list";

const MainScreen = ({promo, movies}) => {

  const {id} = promo;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.posterImage} alt={promo.name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton id = {id} />
                <MyListButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <MoviesList movies={movies}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MainScreen.propTypes = {
  promo: movieShape,
  movies: PropTypes.arrayOf(movieShape)
};


const mapStateToProps = (state) => ({
  movies: getFilteredMoviesByGenre(state.movies, state.genre),
});

export {MainScreen};
export default connect(mapStateToProps, null)(MainScreen);
