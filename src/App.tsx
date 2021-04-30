import { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import SearchBar from './components/searchBar/SearchBar';




function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
