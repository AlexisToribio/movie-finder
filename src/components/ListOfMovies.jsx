import { CardMovie } from "./CardMovie.jsx";

export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <CardMovie
          key={movie.id}
          title={movie.title}
          type={movie.type}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </ul>
  );
}
