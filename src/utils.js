import {ALL_GENRES} from "../const";

export const findObjInArrayById = (array, id) => {
  return array.find((item) => item.id === id);
};

export const convertDashedToCamelCase = (item) => {
  return item.replace(/(-.)/g, (x) => x[1].toUpperCase());
};

export const getUniqueGenres = (movies) => {
  const uniqueGenres = [ALL_GENRES];

  for (const movie of movies) {
    if (!uniqueGenres.includes(movie.genre)) {
      uniqueGenres.push(movie.genre);
    }
  }

  return uniqueGenres;
};

export const getFilteredMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};
