import { useState, useCallback } from "react";
import { Movies } from "./Movies.jsx";
import { Loader } from "./Loader.jsx";
import { useMovies } from "../hooks/useMovies.js";
import debounce from "just-debounce-it";

export function Seeker() {
  const [sort, setSort] = useState(false);
  const [title, setTitle] = useState("");
  const { movies, getMovies, loading } = useMovies({ sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(({ title }) => getMovies({ title }), 300),
    [getMovies] // puedes poner la dependencia getMovies o quitarlo, da igual porque no cambia
  );

  const handleSubmit = e => {
    e.preventDefault();
    getMovies({ title });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedGetMovies({ title: newTitle });
  };

  return (
    <>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <span>Buscador de películas</span>
            <input
              id="search"
              placeholder="Avengers, Star Wars, The Matrix..."
              value={title}
              onChange={handleChange}
            />
          </label>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Buscar</button>
        </form>
      </header>
      <main>{loading ? <Loader /> : <Movies movies={movies} />}</main>
    </>
  );
}
