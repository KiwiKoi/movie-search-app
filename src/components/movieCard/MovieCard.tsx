import './movieCard.scss'

function MovieCard(movie: { Title: string; Year: string; imdbID: string; Type: string; Poster: string }) {

  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    <div className="movie-card-component">
      <div className="img-container"><img src={Poster} /></div>
      <h2>{Title}</h2>
      <p>{Year}</p>
    </div>
  )
}

export default MovieCard
