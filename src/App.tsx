import React from 'react';
import './App.scss';

import Header from './components/Header';
import MovieList from './components/MovieList';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
