import React from 'react'
import MovieCard from '../movieCard/MovieCard';

import "./movieList.scss"

function MovieList() {

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

  return (
    <div className="movie-list-component">
      <h1 className="list-title">Movie List</h1>
      <div className="movie-list-container">
        {data.map((item) => {
          return <MovieCard key={item.id} title={item.title} year={item.year} />
        })}
      </div>

    </div>
  )
}

export default MovieList
