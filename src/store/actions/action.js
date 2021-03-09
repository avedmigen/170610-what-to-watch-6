export const ActionType = {
  SELECT_GENRE: `selectGenre`,
  GET_MOVIES: `getMovies`,
};

export const ActionCreator = {
  selectGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre,
  }),
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
  })
};
