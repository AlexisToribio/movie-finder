import { useState, useCallback, useMemo } from "react";
import { getMoviesByTitle } from "../services/movies.js";
import { sortedMoviesByTitle } from "../utils/sortedMoviesByTitle.js";

export function useMovies({ sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = useCallback(({ title }) => {
    setLoading(true);
    getMoviesByTitle({ title })
      .then(newMovies => setMovies(newMovies))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const sortedMovies = useMemo(
    () => (sort ? sortedMoviesByTitle({ movies }) : movies),
    [sort, movies]
  );

  return { movies: sortedMovies, getMovies, loading };
}
