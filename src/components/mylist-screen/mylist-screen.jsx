import React from "react";
import PropTypes from "prop-types";

import {movieShape} from "../../types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import LogoHeader from "../logo-header/logo-header";
import LogoFooter from "../logo-footer/logo-footer";

const MyListScreen = ({movies}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {movies.map((movie, i) => <SmallMovieCard key={movie + i} movie={movie} />)}
        </div>

      </section>

      <footer className="page-footer">
        <LogoFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListScreen.propTypes = {
  movies: PropTypes.arrayOf(movieShape)
};

export default MyListScreen;
