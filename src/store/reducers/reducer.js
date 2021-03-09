import {ActionType} from "../actions/action";
import {movies} from "../../mocks/movies";
import {ALL_GENRES} from "../../const";

const initialState = {
  genre: ALL_GENRES,
  movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return movies;

    case ActionType.SELECT_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    default:
      return state;
  }
};

export {reducer};
