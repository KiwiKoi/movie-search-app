import { useState } from 'react'

import "./searchBar.scss"

function SearchBar({ getQuery }: { getQuery: any }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = (q: any) => {
    setQuery(q);
    getQuery(q);
    console.log(query)
  }

  return (
    <div className="search-bar-container">
      <input
        placeholder="Search Here"
        type="text"
        className="search-bar"
        onChange={(e: any) => handleQueryChange(e.target.value)}
        value={query}
        autoFocus />
    </div>
  )
}

export default SearchBar
