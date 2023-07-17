export const sortedMoviesByTitle = ({ movies }) =>
  [...movies].sort((a, b) => a.title.localeCompare(b.title));
