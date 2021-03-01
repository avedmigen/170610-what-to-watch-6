import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {movieShape} from "../../types";

import LogoHeader from "../logo-header/logo-header";
import LogoFooter from "../logo-footer/logo-footer";
import MoviesList from "../movies-list/movies-list";


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

        <MoviesList movies={movies}/>

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

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
