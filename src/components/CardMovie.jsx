export function CardMovie({ title, type, year, poster }) {
  return (
    <li className="movie">
      <h3>{title}</h3>
      <p>{type}</p>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </li>
  );
}
