

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    <div>      
    {/* 
      MovieList - Popular
       - Movie card * n 
      MovieList - Trending
      MovieList - thriller
    
    */}
        <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"}  movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"}  movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"}  movies={movies.nowPlayingMovies}/>
      


    </div>
  )
}

export default SecondaryContainer
