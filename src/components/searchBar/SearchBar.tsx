import React from 'react'
import "./searchBar.scss"

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input placeholder="Search Here" type="search" className="search-bar" />
      <input value="search" type="submit" className="search-btn" />
    </div>
  )
}

export default SearchBar
