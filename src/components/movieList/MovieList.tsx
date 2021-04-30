import { useState, useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard';
import axios from 'axios';

import "./movieList.scss"

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";



function MovieList() {
  const [movies, setMovies] = useState([]) as any;
  const data = [
    {
      id: 1,
      title: "Iron Man",
      year: "2008"
    },
    {
      id: 2,
      title: "Spider-Man",
      year: "2017"
    },
    {
      id: 3,
      title: "Captain America",
      year: "2011"
    }
  ]

  useEffect(() => {
    axios.get(MOVIE_API_URL)
      .then(function (response) {
        setMovies(response.data.Search);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(movies)
      });

  }, [])


  return (
    <div className="movie-list-component">
      <h1 className="list-title">Movie List</h1>
      <div className="movie-list-container">
        {movies.map((movie: any, index: number) => {
          return <MovieCard key={index} Title={movie.Title} Year={movie.Year} imdbID={movie.imdbID} Poster={movie.Poster} Type={movie.Type} />
        })}
      </div>

    </div>
  )
}

export default MovieList
