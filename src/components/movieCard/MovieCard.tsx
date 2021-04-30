import './movieCard.scss'

function MovieCard(movie: { Title: string; Year: string; imdbID: string; Type: string; Poster: string }) {

  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div className="movie-card-component">
      <p>{Title}</p>
      <p>{Year}</p>
      <p>{imdbID}</p>
      <p>{Type}</p>
      <img src={Poster} />
    </div>
  )
}

export default MovieCard
