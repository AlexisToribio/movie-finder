import { mappedMovies } from "../utils/mappedMovies.js";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getMoviesByTitle({ title }) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
  );
  if (!res.ok) return;
  const data = await res.json();
  const { Search } = data;
  const newMovies = mappedMovies({ movies: Search });

  return newMovies;
}
