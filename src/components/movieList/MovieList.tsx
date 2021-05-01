import MovieCard from '../movieCard/MovieCard';

import "./movieList.scss"



function MovieList({ movies, isLoading }: { movies: any, isLoading: boolean }) {

  return (
    <div className="movie-list-component">
      <h1 className="list-title">Movie List</h1>
      {movies && <div className="movie-list-container">
        {movies.map((movie: any, index: number) => {
          return <MovieCard key={index} Title={movie.Title} Year={movie.Year} imdbID={movie.imdbID} Poster={movie.Poster} Type={movie.Type} />
        })}
      </div>}
    </div>
  )
}

export default MovieList