import React from 'react'
import './movieCard.scss'

function MovieCard(props: { title: string; year: string }) {
  return (
    <div className="movie-card-component">
      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
  )
}

export default MovieCard
