export const mappedMovies = ({ movies }) => {
  const result = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return result;
};
