import { useState, useEffect } from 'react';
import axios from 'axios'

import Header from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import SearchBar from './components/searchBar/SearchBar';

import './App.scss';

const App = () => {

  const [movies, setMovies] = useState([]) as any;
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`https://www.omdbapi.com/?s=${query}&apikey=4a3b711b`);
      setMovies(result.data.Search);
      setIsLoading(false);
    }
    fetchMovies();
    console.log(`query: ${query} - movies: ${movies}`)
  }, [query]);

  return (
    <div className="App">
      <Header />
      <SearchBar getQuery={(q: string) => setQuery(q)} />
      {query === "" ? <div className="search-prompt"><h1 >Search a movie!</h1><p>Type at least 3 letters...</p></div> : <MovieList isLoading={isLoading} movies={movies} />}
    </div>
  );
}

export default App;
