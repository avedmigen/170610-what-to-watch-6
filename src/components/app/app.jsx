import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {movieShape} from "../../types";

import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../mylist-screen/mylist-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";


const App = ({promo, movies}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen
          promo = {promo}/>
      </Route>
      <Route exact path="/login">
        <SignInScreen />
      </Route>
      <Route exact path="/mylist">
        <MyListScreen />
      </Route>
      <Route exact
        path="/films/:id"
        render = {(props) => (
          <MoviePageScreen
            props = {props} />
        )} >
      </Route>
      <Route exact
        path="/films/:id/review"
        render = {(props) => (
          <AddReviewScreen
            props = {props}
            movies = {movies}
          />
        )} >
      </Route>
      <Route exact
        path="/player/:id"
        render = {(props) => (
          <PlayerScreen
            props = {props}
            promo = {promo}
          />
        )} >
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  promo: movieShape,
};

export default App;
